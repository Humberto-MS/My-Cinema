import { Component, ElementRef, input, OnChanges, output, SimpleChanges, ViewChild } from '@angular/core';
import { CheckoutItem, TicketSelection } from '@interfaces/index';
import Swal from 'sweetalert2'

@Component({
  selector: 'final-payment',
  templateUrl: './final-payment.component.html',
  styleUrl: './final-payment.component.css'
})
export default class FinalPaymentComponent implements OnChanges {
  ngOnChanges ( changes: SimpleChanges ): void {
    if ( changes["selected_seats"] ) this.checkout_items[3].value = this.selected_seats();
    if ( changes["ticket_selection"] ) this.checkout_items[4].value = this.getTotal();
  }

  @ViewChild ( 'card_input', { static: false } )
  card_input!: ElementRef<HTMLInputElement>;

  public ticket_selection = input <TicketSelection> ({children: 0, adults: 0, elders: 0 });
  public selected_seats = input <string> ('');
  public onReturn = output();
  public onPay = output();

  private movie_title: string|null = localStorage.getItem('movie_title');
  private movie_hour: string|null = localStorage.getItem('movie_hour');
  public isErasing: boolean = false;

  public checkout_items: CheckoutItem[] = [
    { name: 'Movie',      class: 'movie-title',      value: this.movie_title!          },
    { name: 'Hour',       class: 'movie-hour',       value: this.movie_hour!           },
    { name: 'Auditorium', class: 'movie-auditorium', value: this.getRandomNumber(1,12) },
    { name: 'Seats',      class: 'movie-seats',      value: ''                         },
    { name: 'Total',      class: 'movie-total',      value: ''                         },
  ];

  private getRandomNumber ( min: number, max: number ): string {
    return ( Math.floor ( Math.random() * ( max - min + 1 ) ) + min ).toString();
  }

  public getTotal(): string {
    const children_total: number = this.ticket_selection().children * 60;
    const adults_total: number = this.ticket_selection().adults * 75;
    const elders_total: number = this.ticket_selection().elders * 60;
    const total = children_total + adults_total + elders_total;
    return `${total.toString()} MXN`;
  }

  public setHyphen(): void {
    const digits_quantity = this.card_input.nativeElement.value.replaceAll('-','').length;
    if ( digits_quantity % 4 === 0 && digits_quantity % 16 !== 0 && !this.isErasing )
      this.card_input.nativeElement.value += '-';
  }

  public checkInput ( event: KeyboardEvent ): void {
    if ( event.key === 'Backspace' ) this.isErasing = true;
    else if ( event.code === 'Space' || event.key.match ( /[a-zA-Z]/ ) ) event.preventDefault();
    else this.isErasing = false;
  }

  public return(): void {
    this.onReturn.emit();
  }

  public pay(): void {
    if ( this.card_input.nativeElement.value.replaceAll('-','') === '' )
      Swal.fire ({
        title: 'Error!',
        text: 'Please put a credit or debit card to pay',
        icon: 'warning',
        confirmButtonText: 'Ok'
      })
    else this.onPay.emit();
  }
}

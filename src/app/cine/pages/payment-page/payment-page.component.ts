import { Component, ElementRef, inject, OnInit, signal, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { TicketSelection } from '@interfaces/index';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrl: './payment-page.component.css'
})
export default class PaymentPageComponent implements OnInit {
  ngOnInit(): void {
    if ( this.image_src() == null || this.image_alt() == null || this.movie_title() == null )
      this.router.navigateByUrl('error');
  }

  private router: Router = inject(Router);

  @ViewChild ( 'ticket_selector', { static: false } )
  ticket_selector!: ElementRef<HTMLDivElement>;

  @ViewChild ( 'seat_selector', { static: false } )
  seat_selector!: ElementRef<HTMLDivElement>;

  @ViewChild ( 'final_payment', { static: false } )
  final_payment!: ElementRef<HTMLDivElement>;

  public image_src   = signal <string|null> ( localStorage.getItem('movie_image_src') );
  public image_alt   = signal <string|null> ( localStorage.getItem('movie_image_alt') );
  public movie_title = signal <string|null> ( localStorage.getItem('movie_title') );

  public ticket_selection = signal <TicketSelection> ({ children: 0, adults: 0, elders: 0 });
  public selected_seats = signal <string> ('');

  public moveToSeatSelection ( tickets: TicketSelection ): void {
    this.ticket_selection.set(tickets);
    this.ticket_selector.nativeElement.classList.add('invisible');
    this.seat_selector.nativeElement.classList.remove('invisible');
  }

  public returnToTicketSelection(): void {
    this.seat_selector.nativeElement.classList.add('invisible');
    this.ticket_selector.nativeElement.classList.remove('invisible');
  }

  public moveToFinalPayment ( seats: string ): void {
    this.selected_seats.set(seats);
    this.seat_selector.nativeElement.classList.add('invisible');
    this.final_payment.nativeElement.classList.remove('invisible');
  }

  public returnToSeatSelection(): void {
    this.final_payment.nativeElement.classList.add('invisible');
    this.seat_selector.nativeElement.classList.remove('invisible');
  }

  public finishPayment(): void {
    Swal.fire ({
      title: 'Thanks for your purchase!',
      text: 'Enjoy your movie!',
      icon: 'success',
      confirmButtonText: 'Close'
    })
    this.router.navigateByUrl('home');
  }
}

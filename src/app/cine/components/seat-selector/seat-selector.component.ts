import { Component, computed, input, output } from '@angular/core';
import { SeatType, TicketSelection } from '@interfaces/index';
import Swal from 'sweetalert2'

@Component({
  selector: 'seat-selector',
  templateUrl: './seat-selector.component.html',
  styleUrl: './seat-selector.component.css'
})
export default class SeatSelectorComponent {
  constructor() {
    let letter: number = 65;
    let number: number = 49;
    let new_number: string = '';
    let new_id: string = String.fromCharCode(letter) + String.fromCharCode(number);
    this.seats[0] = new_id;

    for ( let i = 1; i < this.seats.length; i++ ) {
      number = this.seats [ i - 1 ].charCodeAt(1) + 1;

      if ( new_number === '10' ) number = 49;
      if ( i % 10 === 0 ) letter = this.seats [ i - 1 ].charCodeAt(0) + 1;

      if ( number === 58 ) new_number = '10';
      else new_number = String.fromCharCode(number);

      new_id = String.fromCharCode(letter) + new_number;
      this.seats[i] = new_id;
    }
  }

  public ticket_selection = input.required <TicketSelection> ();
  public onReturn = output();
  public onContinue = output <string> ();
  public selected_seats: string[] = [];
  public busy_seats: string[] = [];
  public seats: string[] = new Array(60);

  public seats_types: SeatType[] = [
    { type: 'Available Seat', image_src: 'seat.jpeg',         image_alt: 'Normal Seat Image'   },
    { type: 'Busy Seat',      image_src: 'busySeat.jpeg',     image_alt: 'Busy Seat Image'     },
    { type: 'Selected Seat',  image_src: 'selectedSeat.jpeg', image_alt: 'Selected Seat Image' },
  ]

  public seats_quantity = computed <number> ( () => {
    const children_tickets: number = this.ticket_selection().children;
    const adult_tickets: number = this.ticket_selection().adults;
    const elder_tickets: number = this.ticket_selection().elders;
    return children_tickets + adult_tickets + elder_tickets;
  } )

  public toggleSeatSelection ( seat: string ): void {
    if ( !this.busy_seats.includes(seat) && !this.selected_seats.includes(seat) && this.selected_seats.length != this.seats_quantity() )
      this.selected_seats.push(seat);
    else if ( this.selected_seats.includes(seat) )
      this.selected_seats = this.selected_seats.filter ( s => s != seat );
    else if ( this.selected_seats.length === this.seats_quantity() ) {
      this.selected_seats.pop();
      this.selected_seats.push(seat);
    }
  }

  public return(): void {
    this.selected_seats = [];
    this.onReturn.emit();
  }

  public continue(): void {
    if ( this.selected_seats.length !== this.seats_quantity() )
      Swal.fire ({
        title: 'Error!',
        text: 'Please select all your seats to continue',
        icon: 'warning',
        confirmButtonText: 'Ok'
      })
    else this.onContinue.emit ( this.selected_seats.sort().toString() );
  }
}

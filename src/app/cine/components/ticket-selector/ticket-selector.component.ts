import { Component, output, signal } from '@angular/core';
import { Ticket, TicketSelection } from '@interfaces/index';
import Swal from 'sweetalert2'

@Component({
  selector: 'ticket-selector',
  templateUrl: './ticket-selector.component.html',
  styleUrl: './ticket-selector.component.css'
})
export default class TicketSelectorComponent {
  public onContinue = output <TicketSelection> ();

  public ticket_types = signal <Ticket[]> ([
    { class: 'children', title: 'Children', price: '60.00', counter: 0 },
    { class: 'adults',   title: 'Adult',    price: '75.00', counter: 0 },
    { class: 'elders',   title: 'Elder',    price: '60.00', counter: 0 },
  ]);

  public decrementCounter ( ticket_type: string ): void {
    this.ticket_types.update ( types => {
      return types.map ( type => {
        if ( type.class === ticket_type && type.counter > 0 )
          return { ...type, counter: type.counter - 1 };
        return type;
      });
    });
  }

  public incrementCounter ( ticket_type: string ): void {
    this.ticket_types.update ( types => {
      return types.map ( type => {
        if ( type.class === ticket_type )
          return { ...type, counter: type.counter + 1 };
        return type;
      });
    });
  }

  public continue(): void {
    const selection: TicketSelection = {
      children: this.ticket_types()[0].counter,
      adults: this.ticket_types()[1].counter,
      elders: this.ticket_types()[2].counter
    }

    if ( selection.children === 0 && selection.adults === 0 && selection.elders === 0 )
      Swal.fire ({
        title: 'Error!',
        text: 'Please select your tickets to continue',
        icon: 'warning',
        confirmButtonText: 'Ok'
      })
    else this.onContinue.emit(selection);
  }
}

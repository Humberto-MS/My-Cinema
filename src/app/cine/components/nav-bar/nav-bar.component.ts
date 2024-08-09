import { Component, ElementRef, HostListener, signal, ViewChild } from '@angular/core';
import { NavBarItem } from '@interfaces/index';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export default class NavBarComponent {
  constructor() {
    this.current_width = window.innerWidth;
    this.previous_width = window.innerWidth;
    this.toggleNavBar();
  }

  @HostListener ( 'window:resize', ['$event'] )
  onResize ( event: any ) {
    this.previous_width = this.current_width;
    this.current_width = event.target.innerWidth;
    if (this.current_width !== this.previous_width) this.toggleNavBar();
  }

  public NavBarItems = signal <NavBarItem[]> ([
    { name: 'Home',     route: 'home'     },
    { name: 'About Me', route: 'about'    },
    { name: 'Log In',   route: 'logIn'    },
    { name: 'Register', route: 'register' },
  ]);

  public hidden: boolean = false;
  private current_width: number;
  private previous_width: number;

  public toggleNavBar(): void {
    if ( window.innerWidth > 460 || this.hidden ) this.hidden = false;
    else if ( window.innerWidth < 460 || !this.hidden ) this.hidden = true;
  }
}

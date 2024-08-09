import { AfterViewInit, Component, ElementRef, ViewChild, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export default class RegisterPageComponent implements OnInit, AfterViewInit {
  @ViewChild ( 'eyeopened', { static: true } )
  eye_opened!: ElementRef<SVGElement>;

  @ViewChild ( 'eyeclosed', { static: true } )
  eye_closed!: ElementRef<SVGElement>;

  private eye_O!: SVGElement;
  private eye_C!: SVGElement;
  public type: string = 'password';

  ngOnInit(): void {
    localStorage.removeItem ( 'movie_image_src' );
    localStorage.removeItem ( 'movie_image_alt' );
    localStorage.removeItem ( 'movie_title' );
  }

  ngAfterViewInit(): void {
    this.eye_O = this.eye_opened.nativeElement;
    this.eye_C = this.eye_closed.nativeElement;
  }

  public togglePasswordView(): void {
    if ( this.eye_O.classList.contains('invisible') ) {
      this.eye_O.classList.remove('invisible');
      this.eye_C.classList.add('invisible');
      this.type = 'text';
    } else {
      this.eye_O.classList.add('invisible');
      this.eye_C.classList.remove('invisible');
      this.type = 'password';
    }
  }
}

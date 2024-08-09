import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export default class LoginPageComponent implements OnInit {
  @ViewChild ( 'eyeopened', { static: true } )
  eye_opened!: ElementRef<SVGElement>;

  @ViewChild ( 'eyeclosed', { static: true } )
  eye_closed!: ElementRef<SVGElement>;

  public type: string = 'password';

  ngOnInit(): void {
    localStorage.removeItem ( 'movie_image_src' );
    localStorage.removeItem ( 'movie_image_alt' );
    localStorage.removeItem ( 'movie_title' );
  }

  public togglePasswordView(): void {
    if ( this.eye_opened.nativeElement.classList.contains('invisible') ) {
      this.eye_opened.nativeElement.classList.remove('invisible');
      this.eye_closed.nativeElement.classList.add('invisible');
      this.type = 'text';
    } else {
      this.eye_opened.nativeElement.classList.add('invisible');
      this.eye_closed.nativeElement.classList.remove('invisible');
      this.type = 'password';
    }
  }
}

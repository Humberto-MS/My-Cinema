import { Component, HostListener, inject, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from '@interfaces/index';

@Component({
  selector: 'app-movie-page',
  templateUrl: './movie-page.component.html',
  styleUrl: './movie-page.component.css'
})
export default class MoviePageComponent implements OnInit {
  constructor() { this.toggleTrailerSize(); }

  ngOnInit(): void {
    localStorage.removeItem ( 'movie_image_src' );
    localStorage.removeItem ( 'movie_image_alt' );
    localStorage.removeItem ( 'movie_title' );
  }

  @HostListener ( 'window:resize', ['$event'] )
  onResize() { this.toggleTrailerSize(); }

  private router: Router = inject(Router);
  public trailer_width: string = '';
  public trailer_height: string = '';

  public goToPay ( hour: string ): void {
    localStorage.setItem ( 'movie_image_src', this.movie().img_src );
    localStorage.setItem ( 'movie_image_alt', this.movie().img_alt );
    localStorage.setItem ( 'movie_title', this.movie().title );
    localStorage.setItem ( 'movie_hour', hour );
    this.router.navigateByUrl('payment');
  }

  public movie = signal <Movie> ({
    img_src: 'Posters/bluelockMOVIE.jpg',
    img_alt: 'Blue Lock: Episode Of Nagi Movie Poster',
    title: 'Blue Lock: Episode Of Nagi',

    synopsis: "'That's a hassle.' That was second-year high schooler Nagi Seishiro's favorite phrase as he lived his dull life. Until Mikage Reo, a classmate who dreamed of winning the World Cup, discovered Nagi's hidden skill, inspiring him to play soccer and share his outstanding talent. One day, he receives an invitation to the mysterious BLUE LOCK Project. What awaits him there is an encounter with the finest strikers assembled from across the country. Nagi's dream of becoming the best, alongside Reo, will take this prodigy to a world he's never known. A prodigy can only be shaped when someone discovers him....now, striker Nagi Seishiro's incredible talent and persona will set the soccer world ablaze.",

    cast: [
      'Nobunaga Shimazaki	as Seishiro Nagi (voice)',
      'Yuma Uchida	as Reo Mikage (voice)',
      'Kazuyuki Okitsu	as Zantetsu Tsurugi (voice)',
      'Kazuki Ura	as Yoichi Isagi (voice)',
      'Tasuku Kaito	as Meguru Bachira (voice)',
      'Yuki Ono	as Rensuke Kunigami (voice)',
      'Sôma Saitô	as Hyoma Chigiri (voice)',
      'Kôki Uchiyama	as Rin Itoshi (voice)',
      'Hiroshi Kamiya	as Jinpachi Ego (voice)',
      'Subaru Kimura	as Ryô Nameoka (voice)',
      'Bryson Baugus	as Seishiro Nagi (voice)',
      'Drew Breedlove	as Meguru Bachira (voice)',
      'Kamen Casey	as Kamen Casey',
      'Aaron Dismuke	as Hyoma Chigiri (voice)',
      'Matthew Elkins	as Zantetsu Tsurugi (voice)',
      'Kristian Eros	as Additional (voice)',
      'Ricco Fajardo	as Yoichi Isagi (voice)',
      'Jim Foronda	as Kenyu Yukimiya (voice)',
      'Alex Hom	as Rensuke Kunigami (voice)',
      'Mami Koyama	as Old Lady (voice)',
      'William Ofoegbu	as Nerima (voice)',
      'Seiya	Seiya	as Shimofuri Myojo (voice)',
      'Matt Shipman	as Rin Itoshi (voice)',
      'Derick Snow	as Jinpachi Ego (voice)'
    ],

    trailer_id: '6NCsj0anAt8',

    hours: [ '10:00 AM', '11:30 AM', '01:00 PM', '02:30 PM', '04:00 PM', '05:30 PM', '07:00 PM', '08:30 PM', '10:00 PM' ]
  });

  private toggleTrailerSize(): void {
    if ( window.innerWidth < 460 ) {
      this.trailer_width = '340';
      this.trailer_height = '200';
    } else {
      this.trailer_width = '580';
      this.trailer_height = '330';
    }
  }
}

import { Component, OnInit, signal } from '@angular/core';
import { SocialMedia } from '@interfaces/index';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrl: './about-page.component.css'
})
export default class AboutPageComponent implements OnInit {
  ngOnInit(): void {
    localStorage.removeItem ( 'movie_image_src' );
    localStorage.removeItem ( 'movie_image_alt' );
    localStorage.removeItem ( 'movie_title' );
  }

  public MySM = signal <SocialMedia[]> ([
    { name: 'Facebook',    color: 'color: dodgerblue;',   url: 'https://www.facebook.com/humberto.santos.186?locale=es_LA' },
    { name: 'X (Twitter)', color: 'color: gray;',  url: 'https://x.com/hum2561?t=tdg0C3SI-jWZVquwWYOwvQ&s=09' },
    { name: 'Instagram',   color: 'color: magenta;',   url: 'https://www.instagram.com/hum_ms/' },
    { name: 'TikTok',      color: 'color: white;',  url: 'https://www.tiktok.com/@humberto_med' },
    { name: 'Github',      color: 'color: limegreen;', url: 'https://github.com/Humberto-MS' },
  ]);
}

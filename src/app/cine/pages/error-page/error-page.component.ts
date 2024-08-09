import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrl: './error-page.component.css'
})
export default class ErrorPageComponent implements OnInit {
  ngOnInit(): void {
    localStorage.removeItem ( 'movie_image_src' );
    localStorage.removeItem ( 'movie_image_alt' );
    localStorage.removeItem ( 'movie_title' );
  }
}

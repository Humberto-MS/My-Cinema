import { Component, OnInit, signal } from '@angular/core';
import { ImagePoster } from '@interfaces/index';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export default class HomePageComponent implements OnInit {
  ngOnInit(): void {
    localStorage.removeItem ( 'movie_image_src' );
    localStorage.removeItem ( 'movie_image_alt' );
    localStorage.removeItem ( 'movie_title' );
  }

  public poster_images = signal <ImagePoster[]> ([
    {
      src: "Posters/bluelockMOVIE.jpg",
      alt: "Blue Lock Movie Poster",
      title: "Blue Lock Episode of Nagi"
    },
    {
      src: "Posters/despicableme4MOVIE.jpg",
      alt: "Despicable Me 4 Movie Poster",
      title: "Despicable Me 4"
    },
    {
      src: "Posters/insideout2MOVIE.jpg",
      alt: "Inside Out 2 Movie Poster",
      title: "Inside Out 2"
    },
    {
      src: "Posters/planetoftheapesMOVIE.jpg",
      alt: "Planet Of The Apes Movie Poster",
      title: "Kingdom Of The Planet Of The Apes"
    },
    {
      src: "Posters/deadpoolandwolverineMOVIE.jpg",
      alt: "Deadpool And Wolverine Movie Poster",
      title: "Deadpool And Wolverine"
    },
    {
      src: "Posters/aquietplacedayoneMOVIE.jpg",
      alt: "A Quiet Place Day One Movie Poster",
      title: "A Quiet Place Day One"
    },
    {
      src: "Posters/badboysMOVIE.jpg",
      alt: "Bad Boys: Ride Or Die Movie Poster",
      title: "Bad Boys: Ride Or Die"
    },
    {
      src: "Posters/furiosaMOVIE.webp",
      alt: "Furiosa: A Mad Max Saga Movie Poster",
      title: "Furiosa: A Mad Max Saga"
    },
  ]);
}

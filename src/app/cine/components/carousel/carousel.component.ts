import { AfterViewInit, Component, ElementRef, HostListener, signal, ViewChild, ViewChildren } from '@angular/core';
import { ImageNText } from '@interfaces/index';

@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export default class CarouselComponent implements AfterViewInit {
  constructor() {
    this.current_width = window.innerWidth;
    this.previous_width = window.innerWidth;
    this.toggleCarouselImages();
  }

  ngAfterViewInit(): void {
    this.slides.nativeElement.style.width = `${this.carousel_images().length * 100}%`;
  }

  @ViewChild( 'slides' )
  slides!: ElementRef<HTMLUListElement>;

  @HostListener ( 'window:resize', ['$event'] )
  onResize ( event: any ) {
    this.previous_width = this.current_width;
    this.current_width = event.target.innerWidth;
    if (this.current_width !== this.previous_width) this.toggleCarouselImages();
  }

  private current_width: number;
  private previous_width: number;

  public carousel_images = signal <ImageNText[]> ([
    {
      src: "",
      alt: "Blue Lock Movie Cover",
      title: "Blue Lock Episode of Nagi",
      synopsis: "'That's a hassle.' That was second-year high schooler Nagi Seishiro's favorite phrase as he lived his dull life. Until Mikage Reo, a classmate who dreamed of winning the World Cup, discovered Nagi's hidden skill, inspiring him to play soccer and share his outstanding talent. One day, he receives an invitation to the mysterious BLUE LOCK Project. What awaits him there is an encounter with the finest strikers assembled from across the country. Nagi's dream of becoming the best, alongside Reo, will take this prodigy to a world he's never known. A prodigy can only be shaped when someone discovers him....now, striker Nagi Seishiro's incredible talent and persona will set the soccer world ablaze."
    },
    {
      src: "",
      alt: "Despicable Me 4 Movie Cover",
      title: "Despicable Me 4",
      synopsis: "In the first Despicable Me movie in seven years, Gru, the world's favorite supervillain-turned-Anti-Villain League-agent, returns for an exciting, bold new era of Minions mayhem in Illumination's DESPICABLE ME 4."
    },
    {
      src: "",
      alt: "Inside Out 2 Movie Cover",
      title: "Inside Out 2",
      synopsis: "Disney and Pixar’s “Inside Out 2” returns to the mind of newly minted teenager Riley just as headquarters is undergoing a sudden demolition to make room for something entirely unexpected: new Emotions! Joy, Sadness, Anger, Fear and Disgust, who’ve long been running a successful operation by all accounts, aren’t sure how to feel when Anxiety shows up. And it looks like she’s not alone."
    },
    {
      src: "",
      alt: "Planet Of The Apes Movie Cover",
      title: "Kingdom Of The Planet Of The Apes",
      synopsis: "300 years after the war between the San Francisco Ape Colony and the Alpha-Omega, several ape clans have emerged from the Oasis to which Caesar had led his fellow apes, while humans have regressed into a feral state. When the ape leader, Proximus Caesar perverts the teachings of Caesar to enslave other clans in search of last traces of human technology, the ape, Noa embarks on a journey to find freedom alongside a young mysterious woman, named Mae."
    },
    {
      src: "",
      alt: "Deadpool And Wolverine Movie Cover",
      title: "Deadpool And Wolverine",
      synopsis: "Marvel Studios presents their most significant mistake to date -'Deadpool and Wolverine.' A listless Wade Wilson toils away in civilian life. His days as the morality flexible mercenary, Deadpool, behind him. When his homeworld faces an existential threat, Wade must reluctantly suit-up again with an even more reluctanter? Reluctantest? He must convince a reluctant Wolverine to -Fuck. Synopses are so fucking stupid."
    },
  ]);

  private cover_images: string[] = [
    "Covers/bluelock.avif",
    "Covers/despicableme4.avif",
    "Covers/insideout2.jpeg",
    "Covers/planetoftheapes.webp",
    "Covers/deadpoolandwolverine.jpg"
  ];

  private poster_images: string[] = [
    "Posters/bluelockMOVIE.jpg",
    "Posters/despicableme4MOVIE.jpg",
    "Posters/insideout2MOVIE.jpg",
    "Posters/planetoftheapesMOVIE.jpg",
    "Posters/deadpoolandwolverineMOVIE.jpg"
  ];

  private toggleCarouselImages(): void {
    if ( window.innerWidth < 460 ) {
      this.carousel_images.update ( images => {
        return images.map ( (image,i) => {
          image.src = this.poster_images[i];
          return { ...image, src: image.src };
        } )
      } )
    } else {
      this.carousel_images.update ( images => {
        return images.map ( (image,i) => {
          image.src = this.cover_images[i];
          return { ...image, src: image.src };
        } )
      } )
    }
  }
}

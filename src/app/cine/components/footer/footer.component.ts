import { Component, signal } from '@angular/core';
import { Content } from '@interfaces/index';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export default class FooterComponent {
  public fc1 = signal <Content[]> ([
    { content: "Our Brands",            id: 1 },
    { content: "FAQs",                  id: 2 },
    { content: "Corporate Information", id: 3 },
    { content: "Investor Relations",    id: 4 },
    { content: "Media Center",          id: 5 },
    { content: "Terms And Conditions",  id: 6 },
    { content: "Providers",             id: 7 },
  ]);

  public fc2 = signal <Content[]> ([
    { content: "Movies",             id: 1 },
    { content: "Theatres",           id: 2 },
    { content: "Rating Information", id: 3 },
    { content: "IMAX",               id: 4 },
    { content: "Dolby Atmos",        id: 5 },
    { content: "Real3D",             id: 6 },
    { content: "Premieres",          id: 7 },
  ]);

  public fc3 = signal <Content[]> ([
    { content: "Gift Cards",              id: 1 },
    { content: "Movie Merchandise",       id: 2 },
    { content: "NFTs",                    id: 3 },
    { content: "Mobile App",              id: 4 },
    { content: "Business Clients",        id: 5 },
    { content: "Film Festivals",          id: 6 },
    { content: "Private Theatre Rentals", id: 7 },
  ]);
}

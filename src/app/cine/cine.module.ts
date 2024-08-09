import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CineRoutingModule } from './cine-routing.module';
import { YouTubePlayerModule } from '@angular/youtube-player'

import CinemaLayoutComponent from './layout/cinema-layout/cinema-layout.component';

import AboutPageComponent from '@pages/about-page/about-page.component';
import ErrorPageComponent from '@pages/error-page/error-page.component';
import HomePageComponent from '@pages/home-page/home-page.component';
import MoviePageComponent from '@pages/movie-page/movie-page.component';
import LoginPageComponent from '@pages/login-page/login-page.component';
import RegisterPageComponent from '@pages/register-page/register-page.component';
import PaymentPageComponent from '@pages/payment-page/payment-page.component';

import FooterComponent from '@components/footer/footer.component';
import NavBarComponent from '@components/nav-bar/nav-bar.component';
import CarouselComponent from '@components/carousel/carousel.component';
import FinalPaymentComponent from '@components/final-payment/final-payment.component';
import SeatSelectorComponent from '@components/seat-selector/seat-selector.component';
import TicketSelectorComponent from '@components/ticket-selector/ticket-selector.component';

@NgModule({
  declarations: [
    CinemaLayoutComponent,
    HomePageComponent,
    MoviePageComponent,
    AboutPageComponent,
    ErrorPageComponent,
    NavBarComponent,
    FooterComponent,
    LoginPageComponent,
    RegisterPageComponent,
    CarouselComponent,
    PaymentPageComponent,
    TicketSelectorComponent,
    SeatSelectorComponent,
    FinalPaymentComponent
  ],
  imports: [
    CommonModule,
    CineRoutingModule,
    YouTubePlayerModule
  ]
})
export class CineModule { }

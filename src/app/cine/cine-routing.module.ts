import { NgModule } from '@angular/core';
import { provideRouter, RouterModule, Routes, withViewTransitions } from '@angular/router';
import CinemaLayoutComponent from './layout/cinema-layout/cinema-layout.component';
import HomePageComponent from '@pages/home-page/home-page.component';
import MoviePageComponent from '@pages/movie-page/movie-page.component';
import AboutPageComponent from '@pages/about-page/about-page.component';
import ErrorPageComponent from '@pages/error-page/error-page.component';
import LoginPageComponent from '@pages/login-page/login-page.component';
import RegisterPageComponent from '@pages/register-page/register-page.component';
import PaymentPageComponent from '@pages/payment-page/payment-page.component';

const routes: Routes = [
  {
    path: '',
    component: CinemaLayoutComponent,

    children: [
      { path: 'home', title: 'My Cinema', component: HomePageComponent },
      { path: 'movie', title: 'Movie', component: MoviePageComponent },
      { path: 'about', title: 'About Me', component: AboutPageComponent },
      { path: 'logIn', title: 'Log In', component: LoginPageComponent },
      { path: 'register', title: 'Register', component: RegisterPageComponent },
      { path: 'error', title: 'Wrong Page :(', component: ErrorPageComponent },
      { path: 'payment', title: 'Payment', component: PaymentPageComponent },
      { path: '**', redirectTo: 'error', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],

  providers: [
    provideRouter (
      routes,
      withViewTransitions({
        skipInitialTransition: true
      })
    )
  ],

  exports: [RouterModule]
})
export class CineRoutingModule { }

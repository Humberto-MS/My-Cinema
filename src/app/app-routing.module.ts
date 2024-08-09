import { NgModule } from '@angular/core';
import { provideRouter, RouterModule, Routes, withViewTransitions } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import ( './cine/cine.module' ).then ( m => m.CineModule )
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

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
export class AppRoutingModule { }

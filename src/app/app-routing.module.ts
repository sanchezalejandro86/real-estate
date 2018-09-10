import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const appRoutes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  //{ path: 'page/:slug', loadChildren: "./pages/static-pages/static-pages.module#StaticPagesModule" },

];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {onSameUrlNavigation: 'reload'})
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }

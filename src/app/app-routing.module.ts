import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './shared/components/layout/main/main.component';
import { AuthComponent } from './shared/components/layout/auth/auth.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'path to redirect to',
    pathMatch: 'full'
  },
  {path: '', component: MainComponent, children: [
    {path: '', loadChildren: () => import('./views/main/main.module').then(m => m.MainModule)},
  ]},
  {path: 'auth', component: AuthComponent, children: [
    {path: '', loadChildren: () => import('./views/authentication/authentication.module').then(m => m.AuthenticationModule)}
  ]}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

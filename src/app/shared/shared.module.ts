import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoaderComponent } from './components/loader/loader.component';
import { MainComponent } from './components/layout/main/main.component';
import { AuthComponent } from './components/layout/auth/auth.component';
import { RouterModule } from '@angular/router';
import { DetailPageComponent } from './components/detail-page/detail-page.component';
import { CardComponent } from './components/card/card.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LoaderComponent,
    MainComponent,
    AuthComponent,
    DetailPageComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    LoaderComponent,
    FooterComponent,
    HeaderComponent,
    LoaderComponent,
    DetailPageComponent,
    CardComponent
  ]
})
export class SharedModule { }

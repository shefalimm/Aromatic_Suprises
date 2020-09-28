import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';
import { PhotogalleryComponent } from './photogallery/photogallery.component';
import { BombsComponent } from './bombs/bombs.component';
import { CandlesComponent } from './candles/candles.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FragranceComponent } from './fragrance/fragrance.component';
import { HelpComponent } from './help/help.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { ZodiacComponent } from './zodiac/zodiac.component';
import { RingComponent } from './ring/ring.component';
import { BraceletComponent } from './bracelet/bracelet.component';



import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    BombsComponent,
    CandlesComponent,
    ContactusComponent,
    FragranceComponent,
    HelpComponent,
    HomeComponent,
    RegistrationComponent,
    ZodiacComponent,
    RingComponent,
    BraceletComponent,
    AboutComponent,
    PhotogalleryComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    routes,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

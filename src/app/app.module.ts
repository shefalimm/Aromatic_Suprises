import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';
import { PhotogalleryComponent } from './photogallery/photogallery.component';
import { LoginComponent } from './login/login.component';
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





var myRoutes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path:'home',component:HomeComponent},
  {path:'fragrance',component:FragranceComponent},
    {path:'Candles', component:CandlesComponent},
      {path:'zodiac', component:ZodiacComponent},
    {path:'bombs',component:BombsComponent},
      {path:'bracelet', component:BraceletComponent},
      {path:'ring', component:RingComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'blog',component:BlogComponent},
  {path:'photogallery',component:PhotogalleryComponent},
  {path:'help',component:HelpComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'login',component:LoginComponent},
  {path:'about',component:AboutComponent}
];






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
    PhotogalleryComponent,
    LoginComponent 
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(myRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

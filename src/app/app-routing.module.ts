
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { FragranceComponent } from './fragrance/fragrance.component';
  import { CandlesComponent } from './candles/candles.component';
import { ZodiacComponent } from './zodiac/zodiac.component';
  import { BombsComponent } from './bombs/bombs.component';
import { BraceletComponent } from './bracelet/bracelet.component';
import { RingComponent } from './ring/ring.component';


import { RegistrationComponent } from './registration/registration.component';
import { BlogComponent } from './blog/blog.component';
import { PhotogalleryComponent } from './photogallery/photogallery.component';
import { HelpComponent } from './help/help.component';
import { ContactusComponent } from './contactus/contactus.component';




import { AboutComponent } from './about/about.component';



const router: Routes = [

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

  {path:'about',component:AboutComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
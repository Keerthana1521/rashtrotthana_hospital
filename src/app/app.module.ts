import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { DropdownModule } from 'primeng/dropdown';
import { CardModule } from 'primeng/card';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { ProgrammsComponent } from './programms/programms.component';
import { TitleButtonComponent } from './components/title-button/title-button.component';
import { ArrowBtnComponent } from './components/arrow-btn/arrow-btn.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { SpecalitiesComponent } from './specalities/specalities.component';
import { DonationComponent } from './donation/donation.component';
import { BoxCardComponent } from './components/box-card/box-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    ProgrammsComponent,
    TitleButtonComponent,
    ArrowBtnComponent,
    AboutUsComponent,
    SpecalitiesComponent,
    DonationComponent,
    BoxCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DropdownModule,
    CardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListJobsComponent } from './list-jobs/list-jobs.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header//header.component';
import { FooterComponent } from './footer/footer.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { ListJobsDetailComponent } from './list-jobs-detail/list-jobs-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JobPageComponent } from './job-page/job-page.component';



@NgModule({
  declarations: [
    AppComponent,
    ListJobsComponent,
    HomeComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    NavBarComponent,
    ListJobsDetailComponent,
    JobPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { ApiserviceService } from './apiservice.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { FaqComponent } from './faq/faq.component';
import { AddstudentinfoComponent } from './addstudentinfo/addstudentinfo.component';
import { ViewstudentinfoComponent } from './viewstudentinfo/viewstudentinfo.component';
import { UpdatestudentinfoComponent } from './updatestudentinfo/updatestudentinfo.component';
import { AddtripinfoComponent } from './addtripinfo/addtripinfo.component';
import { ViewtripinfoComponent } from './viewtripinfo/viewtripinfo.component';
import { UpdatetripinfoComponent } from './updatetripinfo/updatetripinfo.component';
import { NavbarComponent } from './navbar/navbar.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    FaqComponent,
    AddstudentinfoComponent,
    ViewstudentinfoComponent,
    UpdatestudentinfoComponent,
    AddtripinfoComponent,
    ViewstudentinfoComponent,
    UpdatetripinfoComponent,
    NavbarComponent,
    ViewtripinfoComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    
  ],

  providers: [ApiserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

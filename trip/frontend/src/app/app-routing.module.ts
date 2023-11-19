import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AddstudentinfoComponent } from './addstudentinfo/addstudentinfo.component';
import { ViewstudentinfoComponent } from './viewstudentinfo/viewstudentinfo.component';
import { AddtripinfoComponent } from './addtripinfo/addtripinfo.component';
import { ViewtripinfoComponent } from './viewtripinfo/viewtripinfo.component';
import { FaqComponent } from './faq/faq.component';
import { UpdatestudentinfoComponent } from './updatestudentinfo/updatestudentinfo.component';
import { UpdatetripinfoComponent } from './updatetripinfo/updatetripinfo.component';


const routes: Routes = [
  {path: 'home',component:HomeComponent},
  {path: 'aboutus',component:AboutusComponent},
  {path: 'addstudentinfo',component:AddstudentinfoComponent},
  {path: 'viewstudentinfo',component:ViewstudentinfoComponent},
  {path: 'addtripinfo',component:AddtripinfoComponent},
  {path: 'viewtripinfo',component:ViewtripinfoComponent},
  {path: 'updatetripinfo',component:UpdatetripinfoComponent},
  {path: 'faq',component:FaqComponent},
  {path: 'updatestudentinfo/:id',component:UpdatestudentinfoComponent},
  {path: 'updatetripinfo/:id',component:UpdatetripinfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component, OnInit } from '@angular/core';
import {ApiserviceService}from '../apiservice.service';

@Component({
  selector: 'app-viewtripinfo',
  templateUrl: './viewtripinfo.component.html',
  styleUrls: ['./viewtripinfo.component.css']
})
export class ViewtripinfoComponent implements OnInit {

  constructor(private service:ApiserviceService) { }


  listData:any;
  successmsg:any;


ngOnInit(): void {
  this.getAlltripinfo();


  }

  //get delete id
  deleteId(id:any){
    console.log(id,'deleteid==>');
    this.service.deletetripinfo(id).subscribe((res)=>{
      console.log(res,'deleteres==>');
      this.successmsg = "Delete trip profile successful!";
      this.getAlltripinfo();

    });

  }

  //get trip
  getAlltripinfo(){

    this.service.getAlltripinfo().subscribe((res)=>{
      console.log(res,"res==>");

      this.listData = res.data;
    });

  }

}

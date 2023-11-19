import { Component, OnInit } from '@angular/core';
import {ApiserviceService}from '../apiservice.service';

@Component({
  selector: 'app-viewstudentinfo',
  templateUrl: './viewstudentinfo.component.html',
  styleUrls: ['./viewstudentinfo.component.css']
})
export class ViewstudentinfoComponent implements OnInit {

  constructor(private service:ApiserviceService) { }


  listData:any;
  successmsg:any;


ngOnInit(): void {
  this.getAllstudentinfo();


  }

  //get delete id
  deleteId(id:any){
    console.log(id,'deleteid==>');
    this.service.deletestudentinfo(id).subscribe((res)=>{
      console.log(res,'deleteres==>');
      this.successmsg = "Delete student profile successful!";
      this.getAllstudentinfo();

    });

  }

  //get student
  getAllstudentinfo(){

    this.service.getAllstudentinfo().subscribe((res)=>{
      console.log(res,"res==>");

      this.listData = res.data;
    });

  }

}

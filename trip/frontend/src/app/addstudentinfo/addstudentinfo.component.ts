import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ApiserviceService} from '../apiservice.service';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-addstudentinfo',
  templateUrl: './addstudentinfo.component.html',
  styleUrls: ['./addstudentinfo.component.css']
})
export class AddstudentinfoComponent implements OnInit {

  constructor(private service:ApiserviceService,  private router:ActivatedRoute) { }

  errormsg:any;
  successmsg:any;
  getparamid:any;

  ngOnInit(): void {
    //id for update
    this.getparamid = this.router.snapshot.paramMap.get('id');
    if (this.getparamid){
    this.service.getOnestudentinfo(this.getparamid).subscribe((res)=>{
      console.log(res,'res==>');
      this.studentinfoForm.patchValue({
        studentID:res.data[0].studentID,
        studentName:res.data[0].studentName,
        studentEmail:res.data[0].studentEmail,
        studentPhone:res.data[0].studentPhone,
        Faculty:res.data[0].Faculty,
        CourseCode:res.data[0].CourseCode,

      });
    });
  }
  }

  studentinfoForm = new FormGroup({
    'studentID':new FormControl('',Validators.required),
    'studentName':new FormControl('',Validators.required),
    'studentEmail':new FormControl('',Validators.required),
    'studentPhone':new FormControl('',Validators.required),
    'Faculty':new FormControl('',Validators.required),
    'CourseCode':new FormControl('',Validators.required),



  });

  //to create a new studentinfo
  studentinfoSubmit(){
    if(this.studentinfoForm.valid){
      console.log(this.studentinfoForm.value);
      this.service.createstudentinfo( this.studentinfoForm.value ).subscribe((res)=>{
        console.log(res,'res==>');
        this.studentinfoForm.reset();
        this.successmsg = 'Add Student Profile Successful';
      });

    }
    else{
      this.errormsg = 'Add Student Profile Unsuccessful';
    }

  }
//to update a studentinfo
studentinfoUpdate()
{
  console.log(this.studentinfoForm.value,'updatedform');

  if(this.studentinfoForm.valid)
  {
    this.service.updatestudentinfo(this.studentinfoForm.value,this.getparamid).subscribe((res)=>{
      console.log(res,'resupdated');
      this.successmsg = res.message;

    })
  }
  else
  {
    this.errormsg = 'invalid';
  }
}
}

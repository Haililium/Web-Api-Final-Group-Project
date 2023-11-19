import { Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ApiserviceService} from '../apiservice.service';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-updatestudentinfo',
  templateUrl: './updatestudentinfo.component.html',
  styleUrls: ['./updatestudentinfo.component.css']
})

export class UpdatestudentinfoComponent implements OnInit {

  studentinfoForm = new FormGroup({
    'studentID':new FormControl('',Validators.required),
    'studentName':new FormControl('',Validators.required),
    'studentEmail':new FormControl('',Validators.required),
    'studentPhone':new FormControl('',Validators.required),
    'Faculty':new FormControl('',Validators.required),
    'CourseCode':new FormControl('',Validators.required)



  });

  constructor(private service:ApiserviceService,  private router:ActivatedRoute) { }

  errormsg:any;
  successmsg:any;
  getparamid:any;
  message: boolean= false;

  ngOnInit(): void {

      this.service.getOnestudentinfo(this.router.snapshot.params['id']).subscribe((res:any)=>{
        console.log(res,'res==>');
        this.studentinfoForm.patchValue({
          studentID:res.data[0].studentID,
            studentName:res.data[0].studentName,
            studentEmail:res.data[0].studentEmail,
            studentPhone:res.data[0].studentPhone,
            Faculty:res.data[0].Faculty,
            CourseCode:res.data[0].CourseCode

        });
      });
  }
//to update a studentinfo
studentinfoUpdate()
{
  console.log(this.studentinfoForm.value);
    this.service.updatestudentinfo(this.router.snapshot.params['id'], this.studentinfoForm.value).subscribe((result:any)=>{

    this.studentinfoForm.reset();
    this.successmsg = 'Profile successfully updated';
    this.message = true;

    });
  }
removeMessage(){
  this.message = false;
}
}

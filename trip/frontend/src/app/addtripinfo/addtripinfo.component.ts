import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ApiserviceService} from '../apiservice.service';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-addtripinfo',
  templateUrl: './addtripinfo.component.html',
  styleUrls: ['./addtripinfo.component.css']
})
export class AddtripinfoComponent implements OnInit {

  constructor(private service:ApiserviceService,  private router:ActivatedRoute) { }

  errormsg:any;
  successmsg:any;
  getparamid:any;

  ngOnInit(): void {
    //id for updatetripinfo
    this.getparamid = this.router.snapshot.paramMap.get('id');
    if (this.getparamid){
    this.service.getOnetripinfo(this.getparamid).subscribe((res)=>{
      console.log(res,'res==>');
      this.tripinfoForm.patchValue({
        TripDate:res.data[0].TripDate,
        TripLocation:res.data[0].TripLocation,
        TripDuration:res.data[0].TripDuration,
        Faculty:res.data[0].Faculty,
        Transportation:res.data[0].Transportation,
        NoStudents:res.data[0].NoStudents,
        LectName:res.data[0].LectName,
      });
    });
  }
  }

  tripinfoForm = new FormGroup({
    'TripDate':new FormControl('',Validators.required),
    'TripLocation':new FormControl('',Validators.required),
    'TripDuration':new FormControl('',Validators.required),
    'Faculty':new FormControl('',Validators.required),
    'Transportation':new FormControl('',Validators.required),
    'NoStudents':new FormControl('',Validators.required),
    'LectName':new FormControl('',Validators.required),
  });

  //to create a new infoinfo
  tripinfoSubmit(){
    if(this.tripinfoForm.valid){
      console.log(this.tripinfoForm.value);
      this.service.createtripinfo( this.tripinfoForm.value ).subscribe((res)=>{
        console.log(res,'res==>');
        this.tripinfoForm.reset();
        this.successmsg = 'Add Trip Profile Successful';
      });

    }
    else{
      this.errormsg = 'Add Trip Profile Unsuccessful';
    }

  }
//to update a tripinfo
tripinfoUpdate()
{
  console.log(this.tripinfoForm.value,'updatedform');

  if(this.tripinfoForm.valid)
  {
    this.service.updatetripinfo(this.tripinfoForm.value,this.getparamid).subscribe((res)=>{
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

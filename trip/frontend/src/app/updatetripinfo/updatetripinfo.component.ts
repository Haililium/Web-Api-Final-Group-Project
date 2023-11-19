import { Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ApiserviceService} from '../apiservice.service';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-updatetripinfo',
  templateUrl: './updatetripinfo.component.html',
  styleUrls: ['./updatetripinfo.component.css']
})

export class UpdatetripinfoComponent implements OnInit {

  tripForm = new FormGroup({
    'TripDate':new FormControl('',Validators.required),
    'TripLocation':new FormControl('',Validators.required),
    'TripDuration':new FormControl('',Validators.required),
    'Faculty':new FormControl('',Validators.required),
    'Transportation':new FormControl('',Validators.required),
    'NoStudents':new FormControl('',Validators.required),
    'LectName':new FormControl('',Validators.required)


  });

  constructor(private service:ApiserviceService,  private router:ActivatedRoute) { }

  errormsg:any;
  successmsg:any;
  getparamid:any;
  message: boolean= false;

  ngOnInit(): void {

      this.service.getOnetripinfo(this.router.snapshot.params['id']).subscribe((res:any)=>{
        console.log(res,'res==>');
        this.tripForm.patchValue({
          TripDate:res.data[0].TripDate,
            TripLocation:res.data[0].TripLocation,
            TripDuration:res.data[0].TripDuration,
            Faculty:res.data[0].Faculty,
            Transportation:res.data[0].Transportation,
            NoStudents:res.data[0].NoStudents,
            LectName:res.data[0].LectName

        });
      });
  }
//to update a tripinfo
tripinfoUpdate()
{
  console.log(this.tripForm.value);
    this.service.updatetripinfo(this.router.snapshot.params['id'], this.tripForm.value).subscribe((result:any)=>{

    this.tripForm.reset();
    this.successmsg = 'Profile successfully updated';
    this.message = true;

    });
  }
removeMessage(){
  this.message = false;
}
}

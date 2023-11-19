import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
const basestudentinfoUrl = "http://localhost:8080/studentinfo"
const createstudentinfoUrl = "http://localhost:8080/studentinfo/add"
const delstudentinfoUrl = "http://localhost:8080/studentinfo/del"
const putstudentinfoUrl = "http://localhost:8080/studentinfo/put"
const basetripinfoUrl = "http://localhost:8080/tripinfo"
const createtripinfoUrl = "http://localhost:8080/tripinfo/add"
const deltripinfoUrl = "http://localhost:8080/tripinfo/del"
const puttripinfoUrl = "http://localhost:8080/tripinfo/put"

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
 
  constructor(private _http:HttpClient) { }
//get all 
getAllstudentinfo():Observable<any>{
  const url = "http://localhost:8080/allstudentinfo"
  return this._http.get<any>(url)
}
getAlltripinfo():Observable<any>{
  const url = "http://localhost:8080/alltripinfo"
  return this._http.get<any>(url)
}

 // create
 createstudentinfo(studentinfo: any):Observable<any>{
  console.log(studentinfo,'createapi=>');
  return this._http.post(createstudentinfoUrl, studentinfo)
}
createtripinfo(tripinfo: any):Observable<any>{
  console.log(tripinfo,'createapi=>');
  return this._http.post(createtripinfoUrl, tripinfo)
}


//deleting 

deletestudentinfo(id: any): Observable<any> {
  return this._http.delete(`${delstudentinfoUrl}/${id}`);

}
deletetripinfo(id: any): Observable<any> {
  return this._http.delete(`${deltripinfoUrl}/${id}`);

}


//update 
updatestudentinfo(id: any, studentinfo: any): Observable<any> {
  return this._http.put(`${putstudentinfoUrl}/${id}`, studentinfo);

}
updatetripinfo(id: any, tripinfo: any): Observable<any> {
  return this._http.put(`${puttripinfoUrl}/${id}`, tripinfo);

}


//get one 
getOnestudentinfo(id:any):Observable<any>{
  return this._http.get(`${basestudentinfoUrl}/${id}`);
}
getOnetripinfo(id:any):Observable<any>{
  return this._http.get(`${basetripinfoUrl}/${id}`);
}

}

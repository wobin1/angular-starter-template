import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LocalStorageService } from '../local-storage-service/local-storage.service';


@Injectable({
  providedIn: 'root'
})
export class ServerRequestService {

  baseUrl = "";
  token:any;


  constructor(private http: HttpClient, private store: LocalStorageService) { }
 
 
    ngOnInit(){
     this.getToken()
    }
 
    getToken(){
     this.token = this.store.getStoredData('mtlToken')
       
   }
 
    pay(body:object):Observable<any>{
 
     return this.http.post('https://api.paystack.co/transaction/initialize', body, {
       headers: new HttpHeaders({
        
       })
     },)
    }
 
    paginate(url:string){
     return this.http.get(url)
    }
 
    post(url:string, body:object):Observable<any>{
     return this.http.post(this.baseUrl + url, body, {
       headers: new HttpHeaders({
         'custome': 'wobin',
         'Authorization': 'Bearer ' + this.token, 
       })
     },)
    }
  
    get(url:string):Observable<any>{
      return this.http.get(this.baseUrl + url)
    }
  
  
    put(url:string, body:object):Observable<any>{
      return this.http.put(this.baseUrl + url, body)
    }
  
    delete(url:string):Observable<any>{
      return this.http.delete(this.baseUrl + url)
    }
 
    processResponse(response:any){
     if (response.errorStatus != false){
       return false;
     }
     else {
       return response.contentData;
     }
   }
}

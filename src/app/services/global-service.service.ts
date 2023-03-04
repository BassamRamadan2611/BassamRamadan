import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalServiceService {

  currentLang!:string
  email:string='bassamramadan964@gmail.com'
  private api="https://mailthis.to/"+ this.email
  constructor(private translate: TranslateService ,  private http:HttpClient) { 
    translate.setDefaultLang('en')
    this.currentLang=localStorage.getItem("currentLang") || 'en';
    this.translate.use(this.currentLang);
   
  }
  changeLanguage(language:string){
    this.translate.use(language);
  
localStorage.setItem("currentLang",language)
  }
  postMessage(input:any){
    return this.http.post(this.api,input,{responseType:'text'}).pipe(
      map(
      (response:any)=>{
      if(response){
       return response
     }
      },(error:any)=>{
        return error;
      }
      )
    )
    


  }
}

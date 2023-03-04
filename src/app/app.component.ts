
import { Component, OnInit, Inject, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { GlobalServiceService } from 'src/app/services/global-service.service';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'my-app';
  classToggled:boolean = false;

  theme: Theme = localStorage.getItem("theme") as Theme || 'light-theme';

  constructor(
    @Inject(DOCUMENT) private document: Document,private services:GlobalServiceService,
    private renderer: Renderer2
  ) {
   

  }

  toggleSettings(){
    this.classToggled = !this.classToggled;  
  }


 
  

ngOnInit():void{ 
  this.initializeTheme();
}

changeLang(lang:string){
  this.services.changeLanguage(lang);
  if (localStorage.getItem("currentLang") == 'ar'){
    window.document.body.style.direction="rtl"

    
          }
          else {
            window.document.body.style.direction="ltr"

          }
          

}


  switchTheme() {
    this.document.body.classList.replace(
   localStorage.getItem("theme")! ,
      this.theme === 'light-theme'
        ? (this.theme = 'dark-theme')
        : (this.theme = 'light-theme')
    );
    localStorage.setItem("theme",this.theme)
    
  }
  initializeTheme = (): void =>{
    this.renderer.addClass(this.document.body,localStorage.getItem("theme")!);
  }
    
}

export type Theme = 'light-theme' | 'dark-theme';
  


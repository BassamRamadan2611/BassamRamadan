import { Component } from '@angular/core';
import { GlobalServiceService } from 'src/app/services/global-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  showControl:boolean = false;

constructor(private services:GlobalServiceService){}

  ngOnInit(): void {
    console.log(this.changeLang())
  }
  changeLang(){
    this.services.changeLanguage('en');
  }
  showControlFunction() {
    this.showControl = !this.showControl;
  }
}



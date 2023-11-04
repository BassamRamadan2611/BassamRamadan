import {  Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { map, take, timeout } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  implements OnInit{
  showControl:boolean = false;
  currentLang:any


  text = ''; // the text to display
  word = "I'm Web Developer (Front-End ) & Web Designer"; // the word to type
  speed = 80; // the typing speed in milliseconds
 
  constructor(){
    // create an observable that emits each letter of the word at the speed interva


 const type$ = interval(this.speed).pipe(
      map(x => this.word.substr(0, x + 1)), 
      // map each number to a substring of the word
      take(this.word.length)) // take only as many values as the word length
      type$.subscribe((letter:any) => {
        this.text = letter;
      });
 
  }
    ngOnInit() {
    }

    showControlFunction() {
      this.showControl = !this.showControl;
    }
  

}

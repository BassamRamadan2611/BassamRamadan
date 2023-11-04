import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent  implements OnInit{
  constructor(){
  }



  Active:boolean = false

  SelectedProjects:any=[]

allProjects :any=[
  {
    projectTitle:"Madrasa Online",
    projectImageSrc:"madrasaonline.png",
    projectInfo:"Madrasa online ia a Elearning-platform that mange your courses , your students  and subscription in courses ",
    projectGithubLink:"https://github.com/BassamRamadan2611/MadrasaOnline-",
    projectDemoLink:"https://madrasa-online-app.vercel.app/#/home"
   },
   
   {
    projectTitle:"Online Store",
    projectImageSrc:"onlineStore.png",
    projectInfo:"Online Store is an e-commerce-app that displaying products ,search by category or product name , you can add to cart , we applied Authentication to login and register",
    projectGithubLink:"https://github.com/BassamRamadan2611/EcommerceApp",
    projectDemoLink:"https://ecommerce-app-bassamramadan2611.vercel.app/products"
   },
  {
    projectTitle:"Islam Baic Website",
    projectImageSrc:"islam-basic.jpg.png",
    projectInfo:"Islam Basic is an angular app that contain basic information about islam such as , quraan written surahs , quran audio surahs , all about hadith , Azkar , and prayer times",
    projectGithubLink:"https://github.com/BassamRamadan2611/Islam-Basic",
    projectDemoLink:"https://islam-basic.vercel.app/home"
   },  {
    projectTitle:"Recipe-Angular-crud",
    projectImageSrc:"recipe-book.jpeg",
    projectInfo:"Recipe is an angular crud app , you can  retrieve ,add,update and delete Recipe , we applied Authentication ",
    projectGithubLink:"https://github.com/BassamRamadan2611/Angular-Crud-App",
    projectDemoLink:"https://recipe-book-five.vercel.app/recipes"
   },
   {
    projectTitle:"Movie App",
    projectImageSrc:"movie.png",
    projectInfo:"Movie is angular app that displaying movies ,trending movies ,search about certain movie with applies pagination to show multi pages ",
    projectGithubLink:"https://github.com/BassamRamadan2611/angular-movie-app",
    projectDemoLink:"https://angular-movie-app.vercel.app/home"
   }
  ,//responsive design
   {
    projectTitle:"Food Template",
    projectImageSrc:"food.png",
    projectInfo:"food Website is  a responsive template design by html ,css work on multi screens",
    projectGithubLink:"https://github.com/BassamRamadan2611/Food-Project",
    projectDemoLink:"https://food-tempalte.vercel.app/"
   },
   {
    projectTitle:"Zero template ",
    projectImageSrc:"landing-page.png",
    projectInfo:"   ",
    projectGithubLink:"https://github.com/BassamRamadan2611/Landing-page",
    projectDemoLink:"https://my-third-project-tau.vercel.app/"
   }
   , {
    projectTitle:"tailwind css template ",
    projectImageSrc:"taiwinddesign.png",
    projectInfo:"   ",
    projectGithubLink:"https://github.com/BassamRamadan2611/TailWindDesign",
    projectDemoLink:"https://tail-wind-design.vercel.app/"
   },
   ///////////js
   {
    projectTitle:"Crud App By Js",
    projectImageSrc:"crud.png",
    projectInfo:"",
    projectGithubLink:"https://github.com/BassamRamadan2611/Javascript-crud-project",
    projectDemoLink:"https://crud-project-hazel.vercel.app/"
   },
  {
    projectTitle:"Calculator By Js",
    projectImageSrc:"calaculator.png",
    projectInfo:"",
    projectGithubLink:"https://github.com/BassamRamadan2611/calculator-By-JS",
    projectDemoLink:"https://bassamramadan2611.github.io/calculator-By-JS/"
   }
   ,{
    projectTitle:"clock By Js",
    projectImageSrc:"clock.png",
    projectInfo:"",
    projectGithubLink:"https://github.com/BassamRamadan2611/App-clock",
    projectDemoLink:"https://app-clock.vercel.app/"
   }
    ,{
    projectTitle:"Slider By Js Dom",
    projectImageSrc:"slider.png",
    projectInfo:"",
    projectGithubLink:"https://github.com/BassamRamadan2611/Slider-by-javascript-Dom",
    projectDemoLink:"https://bassamramadan2611.github.io/Slider-by-javascript-Dom/"
   }


]
/// angular Projects
AngularApps =[
  {
    projectTitle:"Madrasa Online",
    projectImageSrc:"madrasaonline.png",
    projectInfo:"Madrasa online ia a Elearning-platform that mange your courses , your students  and subscription in courses ",
    projectGithubLink:"https://github.com/BassamRamadan2611/MadrasaOnline-",
    projectDemoLink:"https://madrasa-online-app.vercel.app/#/home"
   },
   
   {
    projectTitle:"Online Store",
    projectImageSrc:"onlineStore.png",
    projectInfo:"Online Store is an e-commerce-app that displaying products ,search by category or product name , you can add to cart , we applied Authentication to login and register",
    projectGithubLink:"https://github.com/BassamRamadan2611/EcommerceApp",
    projectDemoLink:"https://ecommerce-app-bassamramadan2611.vercel.app/products"
   },
  {
    projectTitle:"Islam Baic Website",
    projectImageSrc:"islam-basic.jpg.png",
    projectInfo:"Islam Basic is an angular app that contain basic information about islam such as , quraan written surahs , quran audio surahs , all about hadith , Azkar , and prayer times",
    projectGithubLink:"https://github.com/BassamRamadan2611/Islam-Basic",
    projectDemoLink:"https://islam-basic.vercel.app/home"
   },  {
    projectTitle:"Recipe-Angular-crud",
    projectImageSrc:"recipe-book.jpeg",
    projectInfo:"Recipe is an angular crud app , you can  retrieve ,add,update and delete Recipe , we applied Authentication ",
    projectGithubLink:"https://github.com/BassamRamadan2611/Angular-Crud-App",
    projectDemoLink:"https://recipe-book-five.vercel.app/recipes"
   },
   {
    projectTitle:"Movie App",
    projectImageSrc:"movie.png",
    projectInfo:"Movie is angular app that displaying movies ,trending movies ,search about certain movie with applies pagination to show multi pages ",
    projectGithubLink:"https://github.com/BassamRamadan2611/angular-movie-app",
    projectDemoLink:"https://angular-movie-app.vercel.app/home"
   }

]
///js projects
javascriptApps =[
  {
    projectTitle:"Crud App By Js",
    projectImageSrc:"crud.png",
    projectInfo:"",
    projectGithubLink:"https://github.com/BassamRamadan2611/Javascript-crud-project",
    projectDemoLink:"https://crud-project-hazel.vercel.app/"
   },
  {
    projectTitle:"Calculator By Js",
    projectImageSrc:"calaculator.png",
    projectInfo:"",
    projectGithubLink:"https://github.com/BassamRamadan2611/calculator-By-JS",
    projectDemoLink:"https://bassamramadan2611.github.io/calculator-By-JS/"
   }
   ,{
    projectTitle:"clock By Js",
    projectImageSrc:"clock.png",
    projectInfo:"",
    projectGithubLink:"https://github.com/BassamRamadan2611/App-clock",
    projectDemoLink:"https://app-clock.vercel.app/"
   }
    ,{
    projectTitle:"Slider By Js Dom",
    projectImageSrc:"slider.png",
    projectInfo:"",
    projectGithubLink:"https://github.com/BassamRamadan2611/Slider-by-javascript-Dom",
    projectDemoLink:"https://bassamramadan2611.github.io/Slider-by-javascript-Dom/"
   }
]


///////html & css projects 
responsiveApps :any=[
    {
    projectTitle:"Food Template",
    projectImageSrc:"food.png",
    projectInfo:"",
    projectGithubLink:"https://github.com/BassamRamadan2611/Food-Project",
    projectDemoLink:"https://food-tempalte.vercel.app/"
   },
   {
    projectTitle:"Zero template ",
    projectImageSrc:"landing-page.png",
    projectInfo:" ",
    projectGithubLink:"https://github.com/BassamRamadan2611/Landing-page",
    projectDemoLink:"https://my-third-project-tau.vercel.app/"
   }
   , {
    projectTitle:"tailwind css template ",
    projectImageSrc:"taiwinddesign.png",
    projectInfo:"   ",
    projectGithubLink:"https://github.com/BassamRamadan2611/TailWindDesign",
    projectDemoLink:"https://tail-wind-design.vercel.app/"
   }

]

ngOnInit(): void {
  this.SelectedProjects =this.allProjects
}


getAllProjects(e:any){
  this.ToggleActgiveClass(e)
  this.SelectedProjects = this.allProjects

}

getAngularProjects(e:any){
  this.ToggleActgiveClass(e)
  this.SelectedProjects = this.AngularApps

}

getResponsiveProjects(e:any){
  this.ToggleActgiveClass(e)
  this.SelectedProjects = this.responsiveApps

}
getJavascriptProjects(e:any){
  this.ToggleActgiveClass(e)
  this.SelectedProjects = this.javascriptApps

}

ToggleActgiveClass(event:any){
  const Li = window.document.querySelectorAll(".col-md")

Li.forEach(item=>{item.classList.remove('active')})
  event.target.classList.add('active');
  console.log(event)
  console.log(Li)
}

}

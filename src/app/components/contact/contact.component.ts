import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { window } from 'rxjs';
import { GlobalServiceService } from 'src/app/services/global-service.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent  implements OnInit {
  FormData!: FormGroup;
constructor(private builder: FormBuilder , private serviceApi:GlobalServiceService) { }

ngOnInit() {
  this.FormData = this.builder.group({
  Fullname: new FormControl('', [Validators.required]),
  Email: new FormControl('', [Validators.required, Validators.email]),
  Message: new FormControl('', [Validators.required])
  })
  }


  onSubmit(FormData:any) {
    console.log(FormData)
    this.serviceApi.PostMessage(FormData)
    .subscribe(response => {
    location.href = 'https://mailthis.to/confirm'
    console.log(response)
    this.FormData.reset()
    }, error => {

     alert(" Sorry !!! ,Form is not valid Now ! , You can contact with me  With another way..")
    console.warn(error.responseText)
    console.log({ error })
    this.FormData.reset()

    })
    }

  }



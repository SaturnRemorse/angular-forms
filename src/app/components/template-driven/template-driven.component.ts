import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../../models/User';

@Component({
  selector: 'app-template-driven',
  standalone: false,
  templateUrl: './template-driven.component.html',
  styleUrl: './template-driven.component.css'
})
export class TemplateDrivenComponent {

  user = new User("tohsaka", "tohsake@gmail.com", "Hi I am tohsaka rin, I have an archer.", "female", "lucknow");

  formSubmitted(userForm: NgForm){
    console.log("Form submitted");
    console.log(userForm.value);
    this.user.about="I now have saber";
  }

}

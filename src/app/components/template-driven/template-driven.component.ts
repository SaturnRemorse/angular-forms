import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  standalone: false,
  templateUrl: './template-driven.component.html',
  styleUrl: './template-driven.component.css'
})
export class TemplateDrivenComponent {

  formSubmitted(userForm: NgForm){
    console.log("Form submitted");
    console.log(userForm.value);
  }

}

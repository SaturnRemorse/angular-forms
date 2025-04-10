import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../../models/User';

@Component({
  selector: 'app-template-driven',
  standalone: false,
  templateUrl: './template-driven.component.html',
  styleUrl: './template-driven.component.css'
})
export class TemplateDrivenComponent implements OnInit{
  

  @ViewChild("userForm", {static: true}) userForm: NgForm | undefined;
  user = new User("tohsaka", "tohsake@gmail.com", "Hi I am tohsaka rin, I have an archer.", "female", "lucknow");

  ngOnInit(): void {
    this.user.name="max verstappen";
    setTimeout(()=>{
      this.userForm?.setValue(this.user);
    },2000);
  }

  formSubmitted(userForm: NgForm){
    console.log("Form submitted");
    console.log(userForm.value);
    this.user.about="I now have saber";
  }

}

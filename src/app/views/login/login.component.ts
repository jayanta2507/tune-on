import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	//oginForm:FormGroup;

  constructor( private router: Router,
  	 private fb: FormBuilder) { }

  ngOnInit(): void {
  	//this.createForm();
  }
   
}

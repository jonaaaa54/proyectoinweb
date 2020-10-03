import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent implements OnInit {

  constructor(private router: Router) { }
  model: any = {};


  ngOnInit(): void {

  }

  // tslint:disable-next-line: typedef
  home(){

    this.router.navigate(['home']);
  }
}

import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-bienvenida',
  templateUrl: './bienvenida.component.html',
  styleUrls: ['./bienvenida.component.css']
})
export class BienvenidaComponent implements OnInit {

  constructor(private router: Router) {  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  ingresar(){
    this.router.navigate(['home']);
  }
}

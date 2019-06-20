import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-uitloggen',
  templateUrl: './uitloggen.component.html',
  styleUrls: ['./uitloggen.component.css']
})
export class UitloggenComponent implements OnInit {

  constructor(private loginservice : LoginService, private router : Router) { }

  ngOnInit() {
  }

  uitloggen() {
    this.loginservice.actievegebruiker = null;
    this.router.navigate(['evenement']);
  }

}

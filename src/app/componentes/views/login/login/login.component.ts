import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    email!:      string;
    senha!:      string;

  constructor() { }

  ngOnInit(): void {}

  entrar( ): void {
      //this.router.navigate([ranking/listar]); ainda não existe
  }

}

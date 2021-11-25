import { LoginService } from './../../../../services/login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private service: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

   delete(): void{
    console.log(this.delete);
    this.service.delete( ).subscribe(( ) => {
      console.log( );
        this.router.navigate(["login/entrar"]);
        this.ngOnInit
    });

    }

}

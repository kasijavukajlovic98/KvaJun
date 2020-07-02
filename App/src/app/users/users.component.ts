import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LoginService} from "../login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: any = [];

  dodatUser = {
    id:0,
    username: null,
    password: null,
    roles: []
  };

  constructor(private http: HttpClient, public loginService: LoginService, private router:Router) { }

  ngOnInit(): void {
    this.dobaviSve();
  }

  dobaviSve(){
    this.http.get('http://localhost:8080/api/users').subscribe(r => {
      this.users = r;
      this.dodatUser.id = this.users.length + 1;
    });
  }

  brisanje(id){
    this.http.delete('http://localhost:8080/api/users/' + id).subscribe(r => {
      this.dobaviSve();
    });
  }

  dodavanje(){

    this.http.post('http://localhost:8080/api/users', this.dodatUser).subscribe(r => {
      this.dobaviSve()
    });
  }

  detalji(idUsera){
    this.router.navigate(["users/detaljiUsera"], { queryParams: { id: idUsera } });
  }

  dodajRole(e){
    if(e.target.checked){
      this.dodatUser.roles.push(e.target.value);
    }
    else{
      let index = this.dodatUser.roles.indexOf(e.target.value);
      this.dodatUser.roles.splice(index, 1);
    }

    console.log(this.dodatUser.roles);

  }

}

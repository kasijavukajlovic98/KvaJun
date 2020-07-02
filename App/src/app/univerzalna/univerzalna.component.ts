import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LoginService} from "../login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-univerzalna',
  templateUrl: './univerzalna.component.html',
  styleUrls: ['./univerzalna.component.css']
})
export class UniverzalnaComponent implements OnInit {

  items: any = [];

  dodatItems = {
    id:0,
    title: null,
    image: null,
    description: null,
    price: null
  };

  constructor(private http: HttpClient, public loginService: LoginService, private router:Router) { }

  ngOnInit(): void {
    this.dobaviSve();
  }

  dobaviSve(){
    this.http.get('http://localhost:8080/api/items').subscribe(r => {
      this.items = r;
      this.dodatItems.id = this.items.length + 1;
    });
  }

  brisanje(id){
    this.http.delete('http://localhost:8080/api/items/' + id).subscribe(r => {
      this.dobaviSve();
    });
  }

  dodavanje(){

    this.http.post('http://localhost:8080/api/items', this.dodatItems).subscribe(r => {
      this.dobaviSve()
    });
  }

  detalji(idItems){
    this.router.navigate(["univerzalna/detaljiUniverzalna"], { queryParams: { id: idItems } });
  }

}

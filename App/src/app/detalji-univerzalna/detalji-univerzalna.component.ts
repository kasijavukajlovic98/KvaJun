import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {LoginService} from "../login.service";

@Component({
  selector: 'app-detalji-univerzalna',
  templateUrl: './detalji-univerzalna.component.html',
  styleUrls: ['./detalji-univerzalna.component.css']
})
export class DetaljiUniverzalnaComponent implements OnInit {

  constructor(private router:Router, private http:HttpClient, private route:ActivatedRoute, public loginService: LoginService) { }

  trenutniItems;

  ngOnInit(): void {
    this.dobaviUsera()
  }

  dobaviUsera(){
    this.http.get('http://localhost:8080/api/items/' + this.route.snapshot.queryParams["id"]).subscribe(r => {
      this.trenutniItems = r;
    });
  }

  izmeni(){
    this.http.put('http://localhost:8080/api/items/' + this.route.snapshot.queryParams["id"], this.trenutniItems).subscribe(r => {
      this.router.navigate(["/univerzalna"]);
    });
  }

}

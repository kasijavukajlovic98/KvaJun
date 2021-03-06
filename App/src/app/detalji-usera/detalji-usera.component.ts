import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {LoginService} from "../login.service";

@Component({
  selector: 'app-detalji-usera',
  templateUrl: './detalji-usera.component.html',
  styleUrls: ['./detalji-usera.component.css']
})
export class DetaljiUseraComponent implements OnInit {

  constructor(private router:Router, private http:HttpClient, private route:ActivatedRoute, public loginService: LoginService) { }

  trenutniUser;
  izabraneRole = [];

  ngOnInit(): void {
    this.dobaviUsera()
  }

  dobaviUsera(){
    this.http.get('http://localhost:8080/api/users/' + this.route.snapshot.queryParams["id"]).subscribe(r => {
      this.trenutniUser = r;
    });
  }

  izmeni(){
    if(this.izabraneRole.length != 0){
      this.trenutniUser.roles = this.izabraneRole;
    }

    this.http.put('http://localhost:8080/api/users/' + this.route.snapshot.queryParams["id"], this.trenutniUser).subscribe(r => {
      this.router.navigate(["/users"]);
    });
  }

  dodajRole(e){

    if(e.target.checked){
      this.izabraneRole.push(e.target.value);
    }
    else{
      let index = this.izabraneRole.indexOf(e.target.value);
      this.izabraneRole.splice(index, 1);
    }
  }
}

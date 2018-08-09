import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../user/login/login.service";
import {flyIn} from "../../animations/fly-in";

@Component({
  selector: 'app-manage-main',
  templateUrl: './manage-main.component.html',
  styleUrls: ['./manage-main.component.css'],
  animations: [
    flyIn
  ]
})
export class ManageMainComponent implements OnInit {

  public permission:Array<string>=new Array<string>();
  constructor(public loginService:LoginService) { }

  ngOnInit() {
    this.permission=this.loginService.permission
  }

}

import {Component, Input, OnInit} from '@angular/core';
import {User} from "../model/user.model";

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  @Input()
  public user:User=new User();

  @Input()
  public panelTitle:string;

  @Input()
  public readTimes:number=1;

  @Input()
  public commentTimes:number=0;

  constructor() { }

  ngOnInit() {
  }

}

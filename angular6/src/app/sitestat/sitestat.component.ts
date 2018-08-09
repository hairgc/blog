import { Component, OnInit } from '@angular/core';
import {SiteStatService} from "./services/sitestat.service";

@Component({
  selector: 'app-sitestat',
  templateUrl: './sitestat.component.html',
  styleUrls: ['./sitestat.component.css']
})
export class SiteStatComponent implements OnInit {

  public currentTime: Date = new Date();

  public onlineUsers:number;
  public postNum:number;
  public readNum:number;
  public commentNum:number;
  constructor(public siteStatService:SiteStatService) {
    window.setInterval(
      ()=>this.currentTime=new Date()
      ,1000);
  }

  ngOnInit() {
  this.siteStatService.getSiteStat().subscribe(
    res=>{
      if(res && !res.msg){
        this.onlineUsers=res.onlineUsers;
        this.commentNum=res.commentNum;
        this.readNum=res.readNum;
        this.postNum=res.postNum;
      }
    },
    error=>{

    },
    ()=>{}
  )
  }

}

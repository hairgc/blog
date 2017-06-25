import { Component, OnInit } from '@angular/core';
import {User} from "../../user/model/user.model";
import {LazyLoadEvent} from "primeng/primeng";
import {UserTableService} from "./services/user-table.service";
import {ToastrService} from "ngx-toastr";
import {flyIn} from "../../animations/fly-in";

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css'],
  animations: [
    flyIn
  ]
})
export class UserTableComponent implements OnInit {

  public users:User[];
  public totalRecords:number;
  public minDate=new Date();
  //记录分页信息
  public pageNum:number;
  public rowNum:number;
  public en: any;
  public zh: any;
  constructor(public userTableService:UserTableService,
              public toastr: ToastrService) { }

  ngOnInit() {
    this.en = {
      firstDayOfWeek: 0,
      dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      dayNamesMin: ["Su","Mo","Tu","We","Th","Fr","Sa"],
      monthNames: [ "January","February","March","April","May","June","July","August","September","October","November","December" ],
      monthNamesShort: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ]
    };
    this.zh = {
      firstDayOfWeek: 1,
      dayNames: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
      dayNamesShort: ["一", "二", "三", "四", "五", "六", "日"],
      dayNamesMin: ["Su","Mo","Tu","We","Th","Fr","Sa"],
      monthNames: [ "一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月" ],
      monthNamesShort: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ]
    };
  }

  loadUsersLazy(event: LazyLoadEvent) {
    this.pageNum=1+event.first/event.rows;
    this.rowNum=event.rows
    this.queryUser(this.pageNum,this.rowNum);
  }

  queryUser(pageNum:number,rowNum:number){
    this.userTableService.getUserTable(pageNum,rowNum).subscribe(
      res=>{
        this.users=res.rows;
        this.totalRecords=res.total;
      },
      error=>{
        this.toastr.error(error.json()["msg"]?error.json()["msg"]:"未知错误",'系统提示');
      },
      ()=>{}
    );
  }

  enableUser(user:User){
    user.status=0;
    this.updateUser(user);
  }

  disableUser(user:User){
    user.status=1;
    user.disabledTime=new Date(new Date().getTime()+24 * 60 * 60 * 1000);//默认禁言一天
    this.updateUser(user);
  }
  setDisabledDate(user:User){
    this.updateUser(user);
  }
  updateUser(user:User){
    this.userTableService.editUser(user).subscribe(
      res=>{
        if(res&&res.success){

        }else{
          this.toastr.error(res["msg"]?res["msg"]:"未知错误",'系统提示');
        }
      },
      error=>{
        this.toastr.error(error.json()["msg"]?error.json()["msg"]:"未知错误",'系统提示');
      },
      ()=>{
        this.queryUser(this.pageNum,this.rowNum);
      }
    );

  }
  setStyles(){
    let styles={
      'text-align':'center'
    }
    return styles;
  }
  setEditorStyles(){
    let styles={
      'text-align':'center',
      'overflow':'visible'
    }
    return styles;
  }
}

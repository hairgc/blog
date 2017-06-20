import { Component,OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import {LoginService} from "./user/login/login.service";
import {User} from "./user/model/user.model";
import {Router} from "@angular/router";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public currentUser:User = new User();

  constructor(public translate: TranslateService,
              public loginService: LoginService,
              public router: Router,
              public toastr: ToastrService) {

  }
  ngOnInit(){
    this.translate.addLangs(["zh", "en"]);
    this.translate.setDefaultLang('zh');

    const browserLang = this.translate.getBrowserLang();
    this.translate.use(browserLang.match(/zh|en/) ? browserLang : 'zh');

    this.loginService.currentUser
      .subscribe(
        data => {
          this.currentUser = data;
        },
        error => console.error(error)
      );

      this.loginService.queryUserInfo().subscribe(
        res=>{
          if(res&&!res.msg){
            this.loginService.hasLogin=true;
            window.localStorage.setItem("currentUser",JSON.stringify(Object.assign(this.currentUser,res['user'])));
            window.localStorage.setItem("permission",JSON.stringify(res['permission']));
            this.loginService.triggerNextValue(res['user']);
            console.log(JSON.parse(window.localStorage.getItem("permission")))
          }
        },
        error => {console.log(error)},
        () => {}
      );
  }

  login(){
    this.loginService.hasLogin=true;
    window.location.href="/blog/oauth2-login";
  }

  public doLogout(): void {
    this.loginService.logout().subscribe(
      res=>{
        this.toastr.success('退出成功！','系统提示');
        this.router.navigateByUrl("");
      },
      error => {console.log(error)},
      () => {}
    );
  }
}

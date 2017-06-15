import { Component,OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import {LoginService} from "./user/login/login.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public translate: TranslateService,public loginService: LoginService) {

  }
  ngOnInit(){
    this.translate.addLangs(["zh", "en"]);
    this.translate.setDefaultLang('zh');

    const browserLang = this.translate.getBrowserLang();
    console.log("检测到的浏览器语言>" + browserLang);
    this.translate.use(browserLang.match(/zh|en/) ? browserLang : 'zh');
  }
  title = 'app works!';

  login(){
    this.loginService.login()
  }
}

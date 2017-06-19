import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserInfoComponent } from "../user/user-info/user-info.component";
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  imports: [
    CommonModule,
    TranslateModule
  ],
  declarations: [
    UserInfoComponent
  ],
  exports:[
    UserInfoComponent,
    TranslateModule
  ]
})
export class SharedModule { }

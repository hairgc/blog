import { RouterModule } from '@angular/router';
import {WritePostComponent} from "./post/write-post/write-post.component";

export const appRoutes=[
  {
    path:'',
    redirectTo:'posts',
    pathMatch:'full'
  },
  {
    path:'posts',
    loadChildren:'./home/home.module#HomeModule'
  },
  { path: 'write', component: WritePostComponent },
  {
    path:'**',//fallback router must in the last
    loadChildren:'./home/home.module#HomeModule'
  }
];

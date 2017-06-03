import { RouterModule } from '@angular/router';

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
  {
    path:'**',//fallback router must in the last
    loadChildren:'./home/home.module#HomeModule'
  }
];

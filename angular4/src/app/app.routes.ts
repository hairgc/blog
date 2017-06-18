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
    path:'post',
    loadChildren:'./post/post.module#PostModule'
  },
  {
    path:'user',
    loadChildren:'./user/user.module#UserModule'
  },
  {
    path:'**',//fallback router must in the last
    loadChildren:'./home/home.module#HomeModule'
  }
];

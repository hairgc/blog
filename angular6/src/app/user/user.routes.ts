import { WritePostComponent } from '../post/write-post/write-post.component';
import { UserGuard } from "./user.guard";

export const userRoutes = [
  {
    path:'',
    redirectTo:'write',
    pathMatch:'full'
  },
  {
    path: 'write',
    canActivate: [UserGuard],
    component: WritePostComponent
  },{
    path: 'editpost/:postId',
    canActivate: [UserGuard],
    component: WritePostComponent
  }
];

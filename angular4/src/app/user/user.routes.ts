import { WritePostComponent } from '../post/write-post/write-post.component';

export const userRoutes = [
  {
    path:'',
    redirectTo:'write',
    pathMatch:'full'
  },
  {
    path: 'write',
    component: WritePostComponent
  }
];

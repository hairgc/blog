import { PostlistComponent } from './postlist/postlist.component';
import {PostDetailMainComponent} from "./post-detail-main/post-detail-main.component";
export const postRoutes=[
  {
    path:'',
    redirectTo:'page',
    pathMatch:'full'
  },
  {
    path: 'page',
    component: PostlistComponent
  },
  {
    path: 'postdetail/:postId',
    component: PostDetailMainComponent
  }
];

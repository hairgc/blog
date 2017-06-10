import { RouterModule } from '@angular/router';

import { PostlistComponent } from './postlist/postlist.component';
import {WritePostComponent} from "./write-post/write-post.component";
export const postRoutes=[
  {
    path:'',
    redirectTo:'page/1',
    pathMatch:'full'
  },
  {
    path: 'page/:page',
    component: PostlistComponent
  }
  // },
  // { path: 'write', component: WritePostComponent },
];

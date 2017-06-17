import { RouterModule } from '@angular/router';

import { PostlistComponent } from './postlist/postlist.component';
export const postRoutes=[
  {
    path:'',
    redirectTo:'page',
    pathMatch:'full'
  },
  {
    path: 'page',
    component: PostlistComponent
  }
];

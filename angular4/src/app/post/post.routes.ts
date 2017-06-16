import { RouterModule } from '@angular/router';

import { PostlistComponent } from './postlist/postlist.component';
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
];

import { ManageMainComponent } from './manage-main/manage-main.component';
import {PostTableComponent} from "./post-table/post-table.component";
import {UserTableComponent} from "./user-table/user-table.component";
import {CommentTableComponent} from "./comment-table/comment-table.component";
import {ManageGuard} from "./manage.guard";
import {VisitorTableComponent} from "app/manage/visitor-table/visitor-table.component";
import {CategoryTableComponent} from "./category-table/category-table.component";

export const manageRoutes = [
  {
    path:'',
    component:ManageMainComponent,
    canActivate: [ManageGuard],
    canActivateChild: [ ManageGuard ],
    children: [
      { path: '',redirectTo:'visitortable',pathMatch:'full'},
      { path: 'visitortable', component: VisitorTableComponent },
      { path: 'posttable', component: PostTableComponent },
      { path: 'categorytable', component: CategoryTableComponent },
      { path: 'commenttable', component: CommentTableComponent },
      { path: 'usertable', component: UserTableComponent },
      { path: '**', redirectTo:'visitortable' }
    ]
  }
];

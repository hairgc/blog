import {User} from "../../user/model/user.model";
import {Category} from "../../home/category/model/category.model";
export class Post{
  id: number;
  title: string;
  postContent: string;
  enableComment:boolean=true;
  postType:number;
  status:number;
  postTime: Date;
  lastModifyTime:Date;
  readTimes: number;
  commentTimes: number;
  user:User=new User();
  category:Category=new Category();
}

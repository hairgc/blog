import {Post} from "../../post/model/post.model";
import {User} from "../../user/model/user.model";
export class Comment{
  id: number;
  content: string;
  status:number;
  reName:string;
  commentTime:Date;
  post:Post=new Post()
  user:User=new User()
}

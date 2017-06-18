import {User} from "../../user/model/user.model";
import {Category} from "../../home/category/model/category.model";
export class Post{
  id: number
  title: string
  postContent: string
  enableComment:boolean
  postType:number
  status:number
  author: string
  postTime: Date
  lastModifyTime:Date
  readTimes: number
  commentTimes: number
  user:User=new User();
  category:Category=new Category();
}

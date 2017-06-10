import { Component, OnInit, AfterViewInit ,ElementRef } from '@angular/core';
import {Post} from "../model/post.model";

@Component({
  selector: 'app-write-post',
  templateUrl: './write-post.component.html',
  styleUrls: ['./write-post.component.css']
})
export class WritePostComponent implements OnInit,AfterViewInit {

  private post:Post = new Post();
  private saveDisabled:boolean=true;
  private firstSubmit:boolean=true;
  private isNull:boolean=true;
  private editor:any;
  constructor(private elementRef: ElementRef) { }

  ngOnInit() {

  }
  ngAfterViewInit(): void {
    // tinymce.init({
    //   selector: 'textarea#post_editor',  // change this value according to your HTML
    //   skin_url: '/assets/tinymce/skins/lightgray',
    //   theme: 'modern',
    //   language_url:'/assets/tinymce/langs/zh_CN.js',
    //   content_css: [
    //     '//fonts.googleapis.com/css?family=Lato:300,300i,400,400i'],
    //   plugins: [
    //     'advlist autolink lists link image charmap print preview hr anchor pagebreak',
    //     'searchreplace wordcount visualblocks visualchars code fullscreen',
    //     'insertdatetime media nonbreaking save table contextmenu directionality',
    //     'emoticons template paste textcolor colorpicker textpattern imagetools codesample toc help'
    //   ],
    //   toolbar1: 'undo redo | insert | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image',
    //   toolbar2: 'print preview media | forecolor backcolor emoticons | codesample help',
    //   image_advtab: true,
    //   templates: [
    //     { title: 'Test template 1', content: 'Test 1' },
    //     { title: 'Test template 2', content: 'Test 2' }
    //   ],
    //   codesample_content_css:'/assets/tinymce/prism.css',
    //   a_plugin_option: true,
    //
    // });

    let that=this;
    that.editor = editormd("editormd", {
      path : "../assets/editormd/lib/", // Autoload modules mode, codemirror, marked... dependents libs path
      autoHeight : true,
      delay:500,
      //height:$(window)-200,
      flowChart : true,             // 开启流程图支持，默认关闭
      sequenceDiagram : true,
      toolbarIcons : function() {
        // Or return editormd.toolbarModes[name]; // full, simple, mini
        // Using "||" set icons align right.
        return ["undo", "redo", "|", "bold", "hr","quote", "|","image","code","code-block","table","|","link", "reference-link",
          "|" ,"list-ul", "list-ol","html-entities","|","preview", "watch"]
      },
      codeFold : true,
      imageUpload: true,
      imageUploadURL : "./php/upload.php",
      editorTheme:"mdn-like",
      onchange : function() {
        //$('#save').attr("disabled",false)
        if(that.saveDisabled){
          that.saveDisabled=false;
        }
        that.post.postContent=that.editor.getMarkdown();
      }
    });


  }
  public save(form){
    if(!this.saveDisabled){
      this.saveDisabled=true;
    }
    this.firstSubmit=false;
    if(this.post.postContent==null || this.post.postContent.trim().length==0){
      this.isNull=true;
    }
    console.log(this.post);
    //console.log(this.elementRef.nativeElement.querySelector('#save').disabled='disabled');
  }
}

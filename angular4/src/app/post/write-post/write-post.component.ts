import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-write-post',
  templateUrl: './write-post.component.html',
  styleUrls: ['./write-post.component.css']
})
export class WritePostComponent implements OnInit,AfterViewInit {


  constructor() { }

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

    var editor = editormd("editormd", {
      path : "../assets/editormd/lib/", // Autoload modules mode, codemirror, marked... dependents libs path
      autoHeight : true,
      emoji:true,
      toolbarIcons : function() {
        // Or return editormd.toolbarModes[name]; // full, simple, mini
        // Using "||" set icons align right.
        return ["undo", "redo", "|", "bold", "hr", "|", "preview", "watch", "|", "fullscreen", "info", "testIcon", "testIcon2", "file", "faicon", "||", "watch", "fullscreen", "preview", "testIcon"]
      }
    });
  }
}

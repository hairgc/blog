import { Component, OnInit } from '@angular/core';
import {VisitorService} from "./services/visitor.service";
import {Visitor} from "./model/visitor.model";
import {LazyLoadEvent} from "primeng/primeng";

@Component({
  selector: 'app-visitor-table',
  templateUrl: './visitor-table.component.html',
  styleUrls: ['./visitor-table.component.css']
})
export class VisitorTableComponent implements OnInit {

  public visitors:Visitor[];
  public totalRecords:number;
  constructor(public visitorService:VisitorService) { }

  ngOnInit() {
    //this.queryVisitors(1,10);
  }

  loadVisitorsLazy(event: LazyLoadEvent) {
    //in a real application, make a remote request to load data using state metadata from event
    //event.first = First row offset
    //event.rows = Number of rows per page
    //event.sortField = Field name to sort with
    //event.sortOrder = Sort order as number, 1 for asc and -1 for dec
    //filters: FilterMetadata object having field as key and filter value, filter matchMode as value

    //imitate db connection over a network

    this.queryVisitors(1+event.first/event.rows,event.rows);
  }

  queryVisitors(pageNum:number,rowNum:number){
    this.visitorService.getVisitorList(pageNum,rowNum).subscribe(
      res=>{
        this.visitors=res.rows;
        this.totalRecords=res.total;
      },
      error=>{},
      ()=>{}
    )
  }

  setStyles(){
    let styles={
      'text-align':'center'
    }
    return styles;
  }
}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-student-chart',
  templateUrl: './student-chart.component.html',
  styleUrls: ['./student-chart.component.css']
})
export class StudentChartComponent implements OnInit {

  stacked: any[] = [];
  @Input() studentResult:any;
  // count types 
  weakCount:any;
  okCount:any;
  goodCount:any;
  excellentCount:any;

  constructor() {
    
  }
  ngOnChanges() {
    this.stacked=[];
    this.organizedData();
    
  }
 
 
  ngOnInit() {
   
  }


  organizedData(){
    let data =this.studentResult;
    this.weakCount =((this.studentResult.filter((x:any)=> x.values < 60 ).length / data.length) *100).toFixed(2);
    this.okCount=((this.studentResult.filter( (x:any)=> x.values>= 60 && x.values < 80).length / data.length) *100).toFixed(2);
    this. goodCount= ((this.studentResult.filter((x:any)=> x.values>=80 && x.values<90).length / data.length) *100).toFixed(2);
    this. excellentCount= ((this.studentResult.filter((x:any)=> x.values>= 90).length / data.length)*100).toFixed(2);

  }



}

import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/service/student.service';
import { Activity } from 'src/app/model/activity';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-student-grid',
  templateUrl: './student-grid.component.html',
  styleUrls: ['./student-grid.component.css']
})
export class StudentGridComponent implements OnInit {

  public activities: Activity[] | undefined;
  public activityLog: any[] = [];
  public gridData: any[] = [];
  public toDate: Date | undefined;
  public fromDate: Date | undefined;
  public filteredStudent: string | undefined;

  public selectedStudents: any;



  public classesList: any;
  constructor(public studentService: StudentService, public datePipe: DatePipe) { }


  ngOnInit() {
    this.getActivities();
    this.getClasses();
  }
  getActivities() {
    this.studentService.getTestActivities().subscribe(
      res => {

        this.activities = JSON.parse(res.body);

      },
      error => {
        console.error(error);
      }
    );

  }

  getClasses() {
    this.studentService.getTestClasses().subscribe(
      res => {
      

        this.classesList = res;
      },
      error => {
        console.error(error);
      }
    );
  }

  filterClass(value: any) {
    this.toDate = undefined;
    this.fromDate = undefined;

    this.filteredStudent = undefined;
    let result: any[] = [];
    this.activityLog = [];
    this.selectedStudents = []; //selected students by class
    this.selectedStudents = this.classesList.find((x: any) => x.name == value.target.value).students;
    this.selectedStudents.forEach((element: any) => { result.push(this.activities?.find(x => x.student == element)) });

    result.forEach(x => {
      for (let index = 0; index < x.attempts.weeks.length; index++) {
        this.activityLog.push({
          date: x.attempts.weeks[index],
          values: x.attempts.values[index],
          content: x.content,
          skill: x.skill,
          student: x.student,
          time: x.time,
          type: x.type,
        })

      }

    });
    this.gridData = this.activityLog;
  }




  filterStudent(value: any) {
    this.filteredStudent = value.target.value;
    if (!this.fromDate && !this.toDate) {
      let res = this.activityLog.filter(x => { return x.student == value.target.value });
      this.gridData = res;
    }
    else {
      this.dateChange();
    }



  }

  dateChange() {
    if (this.fromDate && this.toDate && this.filteredStudent) {
      let res = this.activityLog?.filter((m: any) => {
        var split = m.date.split('/');
        let year = 20 + split[2]   //data date comming as year like 18 
        var Ndate = new Date(year, split[1] - 1, split[0]); //Y M D 
        if (this.fromDate && this.toDate) {
          return Ndate >= this.fromDate && Ndate <= this.toDate && m.student == this.filteredStudent
        } else {
          return;
        }
      })
      this.gridData = res;
      console.log(this.gridData)
    }

  }




}

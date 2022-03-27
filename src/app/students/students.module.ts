import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { StudentsRoutingModule } from './students-routing.module';
import { StudentGridComponent } from './student-grid/student-grid.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { MarksColorDirective } from '../directive/marks-color.directive';
import { StudentChartComponent } from './student-chart/student-chart.component';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
@NgModule({
  declarations: [StudentGridComponent,MarksColorDirective, StudentChartComponent],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot(),
    FormsModule,
    ProgressbarModule.forRoot()
    
  ],
  providers:[DatePipe]
})
export class StudentsModule { }

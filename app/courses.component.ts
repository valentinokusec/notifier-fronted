import {Component} from 'angular2/core'
import {CourseService} from './course.service'
import {AutoGrowDirective} from './auto-grow.directive'

@Component({
  selector: 'courses',
  template: `
  <h2>Courses</h2>
  {{title}}
  <input type="text" autoGrow />
  <button (click)="onClickMe()">Click me!</button>
  {{clickMessage}}
<ul>
<li *ngFor="#course of courses">
  {{course}}
<li>
</ul>

  `,
  providers: [CourseService],
  directives: [AutoGrowDirective]
})

export class CoursesComponent
{
    title: string = "The title of ";
    courses;
  clickMessage = '';
    constructor(courseService: CourseService)
    {
        this.courses=courseService.getCourses();
    }
    onClickMe() {
   this.clickMessage = 'You are my hero!';
 }
}

// import { Component, OnInit } from '@angular/core';
// import { AppService } from '../app.service';
// import { FormControl, FormGroup } from '@angular/forms';

// @Component({
//   selector: 'app-course',
//   templateUrl: './course.component.html',
//   styleUrls: ['./course.component.css'],
// })
// export class CourseComponent implements OnInit {
//   users: any;
//   bioSection = new FormGroup({
//     courses: new FormControl(''),
//   });
//   constructor(private api: AppService) {}
//   currentval: string[] = [];

//   ngOnInit(): void {
//     this.api.getUser().subscribe((user) => {
//       this.users = user;
//       console.log(this.users);
//     });
//   }
//   // getval(val: any) {
//   //   this.currentval.push(val.value);
//   // }
//   callingfunction() {
//     console.log(this.bioSection.value);
//   }}
// //
// callingFunction() {
//     console.log(this.bioSection.value);
//     this.api.postUser.subscribe((response: any) => {
//       console.log(response);
//       this.api.getUser().subscribe((user) => {
//         this.users = user;
//         console.log('USER', this.users);
//       });
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  FormsModule,
  FormBuilder,
} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Data } from '@angular/router';
import { AppService } from '../app.service';
AppService;
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
})
export class CourseComponent implements OnInit {
  users: any;
  data: Data | undefined;

  constructor(private api: AppService) {}
  courname = 'Enter Course Name';
  currentval: string[] = [];
  bioSection = new FormGroup({
    courses: new FormControl(''),
  });

  ngOnInit(): void {
    this.api.getUser().subscribe((user) => {
      this.users = user;
      console.log('USER', this.users);
    });
  }

  // getval(val: any) {
  //   this.currentval.push(val.value);
  // }
  callingFunction() {
    console.log(this.bioSection.value);
    this.api.postUser(this.bioSection.value).subscribe((response: any) => {
      console.log(response);
      this.api.getUser().subscribe((user) => {
        this.users = user;
        console.log('USER', this.users);
      });
    });
  }
}

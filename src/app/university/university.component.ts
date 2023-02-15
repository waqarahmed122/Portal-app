// import { Component, OnInit } from '@angular/core';
// import { AppService } from '../app.service';
// import { FormControl, FormGroup } from '@angular/forms';
// // import {
// //   FormControl,
// //   FormGroup,
// //   Validators,
// //   FormsModule,
// //   FormBuilder,
// // } from '@angular/forms';

// @Component({
//   selector: 'app-university',
//   templateUrl: './university.component.html',
//   styleUrls: ['./university.component.css'],
// })
// export class UniversityComponent implements OnInit {
//   users: any;
//   course: any;
//   constructor(private api: AppService) {}
//   bioSection = new FormGroup({
//     courses: new FormControl(''),
//     university: new FormControl(''),
//   });

//   ngOnInit(): void {
//     this.api.getUser().subscribe((user) => {
//       this.course = user;
//       console.log('user', this.course);
//     });
//     this.api.getUni().subscribe((user) => {
//       this.users = user;
//       console.log('user', this.users);
//     });
//   }
//   // userlist: string[] = [];

//   // onclick(prouser: { value: any }) {
//   //   this.userlist.push(prouser.value);
//   // }
//   callingFunction() {
//     console.log(this.bioSection.value);
//     this.api
//       .postUni(this.bioSection.value)
//       .subscribe((response: any) => {

//       });
//   }
// }
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AppService } from '../app.service';

@Component({
  selector: 'app-university',
  templateUrl: './university.component.html',
  styleUrls: ['./university.component.css'],
})
export class UniversityComponent implements OnInit {
  stuname: String = 'Enter University Name';
  users: any;
  course: any;
  constructor(private api: AppService) {}
  bioSection = new FormGroup({
    courses: new FormControl(''),
    university: new FormControl(''),
  });

  ngOnInit(): void {
    this.api.getUser().subscribe((user: any) => {
      this.course = user;
    });
    this.api.getUni().subscribe((user: any) => {
      this.users = user;
      console.log('University', this.users);
    });
  }
  userlist: string[] = [];

  onclick(prouser: { value: any }) {
    this.userlist.push(prouser.value);
  }
  callingFunction() {
    console.log(this.bioSection.value);
    this.api
      .postUni(this.bioSection.value)
      .subscribe((response: any) => {
        console.log(response);
        this.api.getUni().subscribe((user) => {
          this.users = user;
          console.log('University', this.users);
        });
      });
  }
}

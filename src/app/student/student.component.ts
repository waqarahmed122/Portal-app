// import { Component, OnInit } from '@angular/core';
// import { AppService } from '../app.service';
// import { FormControl,FormGroup } from '@angular/forms';

// @Component({
//   selector: 'app-student',
//   templateUrl: './student.component.html',
//   styleUrls: ['./student.component.css'],
// })
// export class StudentComponent implements OnInit {
//   currentval: string[] = [];
//   users: any;
//   cour: any;
//   uni: any;
//   bioSection = new FormGroup({
//     university: new FormControl(''),
//     course: new FormControl(''),
//     student: new FormControl(''),
//   });
//   callingFunction(){
//     console.log(this.bioSection.value);
//   }
//   // private api: AppService;
//   constructor(private api: AppService) {}
//   ngOnInit(): void {
//     this.api.getstudent().subscribe((user) => {
//       this.users = user;
//       console.log(this.users);
//     });
//     this.api.getUser().subscribe((user) => {
//       this.cour = user;
//       console.log(this.cour);
//     });
//     this.api.getUni().subscribe((user) => {
//       this.uni = user;
//       console.log(this.uni);
//     });
//   }
//   getval(val: any) {
//     this.currentval.push(val.value);
//   }
// }

// import { Component, OnInit } from '@angular/core';
// import {
//   FormControl,
//   FormGroup,
//   Validators,
//   FormsModule,
//   FormBuilder,
// } from '@angular/forms';
// import { ReactiveFormsModule } from '@angular/forms';
// import { Form } from '@angular/forms';
// import { AppService } from '../app.service';

// @Component({
//   selector: 'app-student',
//   templateUrl: './student.component.html',
//   styleUrls: ['./student.component.css'],
// })
// export class StudentComponent implements OnInit {
//   stuname: String = 'Enter Student Name';
//   users: any;
//   university: any;
//   course: any;
//   constructor(private api: AppService) {}
//   courname = 'Enter Course Name';
//   currentval: string[] = [];
//   bioSection = new FormGroup({
//     courses: new FormControl(''),
//     university: new FormControl(''),
//     student: new FormControl(''),
//   });

//   ngOnInit(): void {
//     this.api.getUni().subscribe((user) => {
//       this.university = user;
//       console.log('USER', this.university);
//     });
//     this.api.getUser().subscribe((user) => {
//       this.course = user;
//       console.log('USER', this.course);
//     });
//     this.api.getUser().subscribe((user) => {
//       this.users = user;
//       console.log('USER', this.users);
//     });
//   }
//   // userlist: string[] = [];

//   // onclick(prouser: { value: any }) {
//   //   this.userlist.push(prouser.value);
//   // }
//   callingFunction() {
//     console.log(this.bioSection.value);
//     this.api.poststudent(this.bioSection.value).subscribe((response: any) => {
//       console.log(response);
//       this.api.getUser().subscribe((user) => {
//         this.users = user;
//         console.log('USER', this.users);
//       });
//     });
//   }
//   import { Component, OnInit } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  FormsModule,
  FormBuilder,
} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Form } from '@angular/forms';
import { AppService } from '../app.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
})
export class StudentComponent implements OnInit {
  stuname: String = 'Enter Student Name';
  users: any;
  university: any;
  course: any;
  constructor(private api: AppService) {}
  courname = 'Enter Course Name';
  currentval: string[] = [];
  bioSection = new FormGroup({
    courses: new FormControl(''),
    university: new FormControl(''),
    student: new FormControl(''),
  });

  ngOnInit(): void {
    this.api.getUni().subscribe((user) => {
      this.university = user;
      console.log('USER', this.university);
    });
    this.api.getUser().subscribe((user) => {
      this.course = user;
      console.log('USER', this.course);
    });
    this.api.getstudent().subscribe((user) => {
      this.users = user;
      console.log('USER', this.users);
    });
  }
  // userlist: string[] = [];

  // onclick(prouser: { value: any }) {
  //   this.userlist.push(prouser.value);
  // }
  callingFunction() {
    console.log(this.bioSection.value);
    this.api.poststudent(this.bioSection.value).subscribe((response: any) => {
      console.log(response);
      this.api.getstudent().subscribe((user) => {
        this.users = user;
        console.log('USER', this.users);
      });
    });
  }
}

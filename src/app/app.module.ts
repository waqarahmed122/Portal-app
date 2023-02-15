import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { UniversityComponent } from './university/university.component';
import { StudentComponent } from './student/student.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';

const appRoutes: Routes = [
  { path: 'Course', component: CourseComponent },
  { path: 'university', component: UniversityComponent },
  { path: 'student', component: StudentComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    UniversityComponent,
    StudentComponent,

  ],

  imports: [
    BrowserModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: 'Course', component: CourseComponent },
      { path: 'university', component: UniversityComponent },
      { path: 'student', component: StudentComponent },
    ]),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { JobPageComponent } from './job-page/job-page.component';
import { ListJobsDetailComponent } from './list-jobs-detail/list-jobs-detail.component';
import { ListJobsComponent } from './list-jobs/list-jobs.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'list', component: ListJobsComponent },
  { path: 'detail', component: ListJobsDetailComponent },
  { path: 'job', component: JobPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

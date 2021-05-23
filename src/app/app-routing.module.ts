import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   component:ListStudnetComponent,
  //   path:'listStudent'
  // },
  // {
  //   component:LoginComponent,
  //   path:'login'
  // },
  // {
  //   component:RegisterStudentComponent,
  //   path:'registerStudent'
  // },
  // {
  //   component:TemplateDrivenComponent,
  //   path:'tempDriven'
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



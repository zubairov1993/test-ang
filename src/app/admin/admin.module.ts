import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AdminLayoutComponent } from './shared/components/admin-layout/admin-layout.component';
import { DashbordPageComponent } from './dashbord-page/dashbord-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { CreatePageComponent } from './create-page/create-page.component';
import { EditPageComponent } from './edit-page/edit-page.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AuthService } from "./shared/services/auth.service";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild([
      {path: '', component: AdminLayoutComponent, children: [
        {path: '', redirectTo: '/admin/login', pathMatch: 'full'},
        {path: 'login', component: LoginPageComponent},
        {path: 'dashboard', component: DashbordPageComponent},
        {path: 'create', component: CreatePageComponent},
        {path: 'post/:id/edit', component: EditPageComponent}
      ]}
    ])
  ],
  exports: [RouterModule],
  declarations: [AdminLayoutComponent, DashbordPageComponent, LoginPageComponent, CreatePageComponent, EditPageComponent],
  providers: [
    AuthService
  ]
})
export class AdminModule {

}

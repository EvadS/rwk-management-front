import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/components/login/login.component';
import { AuthGuard } from './auth/guards/auth.guard';
 
//skills 
import { SkillListComponent } from './skills/skill-list/skill-list.component'
// searchers
import { SearchersComponent } from './searchers/searchers.component'
// messangers types 
import { MessangersListComponent } from './messengers/messangers-list/messangers-list.component';


const skillListRoute = 'skill-list';
const messangersTypesListRoute = 'messengers-type';

const routes: Routes = [
   
    { path: 'login', component: LoginComponent },
    { canActivate: [AuthGuard], path: '', component: SearchersComponent },
    { canActivate: [AuthGuard], path: skillListRoute, component: SkillListComponent },    
    { canActivate: [AuthGuard], path: messangersTypesListRoute, component: MessangersListComponent }   

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/components/login/login.component';
import { AuthGuard } from './auth/guards/auth.guard';
import { SkillComponent } from './skill/skill.component'
import { SearchersComponent } from './searchers/searchers.component'


//'./skill/skill.component';

const routes: Routes = [
   
    { path: 'login', component: LoginComponent },
    { canActivate: [AuthGuard], path: 'skills', component: SkillComponent },
    { canActivate: [AuthGuard], path: '', component: SearchersComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SkillComponent } from './skill/skill.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtTokenInterceptor } from './auth/interceptors/jwt.token.interceptor';
import { LoginComponent } from './auth/components/login/login.component';

import { FormsModule } from '@angular/forms';
import { SearchersComponent } from './searchers/searchers.component';

import { FooterComponent } from './layout/footer/footer.component'
import { HeaderComponent } from './layout/header/header.component';
import { AddSearchersComponent } from './add-searchers/add-searchers.component';
import { AddSearcherDetailComponent } from './add-searcher-detail/add-searcher-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    SkillComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    SearchersComponent,
    AddSearchersComponent,
    AddSearcherDetailComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtTokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

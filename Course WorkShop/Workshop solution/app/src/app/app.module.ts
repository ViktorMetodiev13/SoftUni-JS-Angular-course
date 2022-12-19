import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from "./core/core.module";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecentPostsComponent } from './recent-posts/recent-posts.component';
import { HttpClientModule } from '@angular/common/http';
import { MainComponent } from './main/main.component';
import { AuthModule } from './auth/auth.module';
import { SharedRoutingModule } from './shared/shared-routing.module';
import { NotFoundPageComponent } from './shared/not-found-page/not-found-page.component';
//import { ThemeModule } from './theme/theme.module';

@NgModule({
  declarations: [
    AppComponent,
    RecentPostsComponent,
    MainComponent,
    NotFoundPageComponent
  ],
  imports: [
    AuthModule,
    //ThemeModule,
    AppRoutingModule,
    BrowserModule,
    CoreModule,
    HttpClientModule,
    SharedRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

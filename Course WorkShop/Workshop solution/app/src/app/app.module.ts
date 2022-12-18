import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from "./core/core.module";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThemeListComponent } from './theme-list/theme-list.component';
import { RecentPostsComponent } from './recent-posts/recent-posts.component';
import { HttpClientModule } from '@angular/common/http';
import { MainComponent } from './main/main.component';
import { AuthModule } from './auth/auth.module';
import { SharedRoutingModule } from './shared/shared-routing.module';
import { NotFoundPageComponent } from './shared/not-found-page/not-found-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ThemeListComponent,
    RecentPostsComponent,
    MainComponent,
    NotFoundPageComponent
  ],
  imports: [
    AuthModule,
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule,
    SharedRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

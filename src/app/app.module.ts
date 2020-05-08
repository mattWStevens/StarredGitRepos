import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RepoDetailComponent } from './component/repo-detail/repo-detail.component';
//import { RepoDetailComponentComponent } from './repo-detail-component/repo-detail-component.component';
//mport { RepoDetailComponent } from './repo-detail/repo-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    RepoDetailComponent,
   // RepoDetailComponentComponent,
    //RepoDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

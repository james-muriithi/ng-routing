import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestRouterComponent } from './test-router/test-router.component';
import { TestRouterParamComponent } from './test-router-param/test-router-param.component';

@NgModule({
  declarations: [
    AppComponent,
    TestRouterComponent,
    TestRouterParamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

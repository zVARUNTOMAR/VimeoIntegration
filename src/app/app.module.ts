import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthInterceptor } from './_interceptor/auth.interceptor';
import { HttpClient } from '@angular/common/http';
import { VideocontainerComponent } from './_components/videocontainer/videocontainer.component';
import { SainitizeHtmlPipe } from './_pipes/sainitize-html.pipe';
import { EndComponent } from './_components/end/end.component';

@NgModule({
  declarations: [AppComponent, VideocontainerComponent, SainitizeHtmlPipe, EndComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

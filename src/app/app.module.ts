import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgxParisModule, HttpDefaultOptions, JWTOptions } from 'ngx-paris';
import { environment } from 'src/environments/environment';

export class MonitorHttpDefaultOptions extends HttpDefaultOptions {
  baseApiURL = environment['baseApiUrl'];
  // input api base url.
}

export class MonitorJWTOptions extends JWTOptions {
  key = 'user';
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxParisModule,
    NgbModule
  ],
  providers: [{
    provide: HttpDefaultOptions,
    useClass: MonitorHttpDefaultOptions
  },
  {
    provide: JWTOptions,
    useClass: MonitorJWTOptions
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

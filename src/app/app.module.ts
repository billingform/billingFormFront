import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { NgModule, Injectable } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgxParisModule, HttpDefaultOptions, JWTOptions } from 'ngx-paris';
import { environment } from 'src/environments/environment';
import { NgxSpinnerModule } from "ngx-spinner";
import {SnackbarModule} from 'ngx-snackbar';

@Injectable()
export class MonitorHttpDefaultOptions extends HttpDefaultOptions {
  baseApiURL = environment['baseApiUrl'];
  // input api base url.
}

@Injectable()
export class MonitorJWTOptions extends JWTOptions {
  key = 'user';
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgxParisModule,
    NgbModule,
    NgxSpinnerModule,
    SnackbarModule.forRoot()
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

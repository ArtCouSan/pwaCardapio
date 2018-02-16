
import { FormsModule } from '@angular/forms';
import { OrderModule } from 'ngx-order-pipe';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FilterPipe } from './filter.pipe';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    FilterPipe,
    AppComponent
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    OrderModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports:[
    FilterPipe,
    OrderModule,
    FormsModule
  ],
})
export class AppModule { }

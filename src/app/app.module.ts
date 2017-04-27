import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeView } from './home/home-view.component';
import { TransferHttpModule } from '../modules/transfer-http/transfer-http.module';
import { CustomFormsModule } from 'ng2-validation';
import { NguiDatetimePickerModule } from '@ngui/datetime-picker';
import { MyDatePickerModule } from 'mydatepicker';


@NgModule({
	imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    //NguiDatetimePickerModule,
    ReactiveFormsModule,
    MyDatePickerModule,
    CustomFormsModule,
    TransferHttpModule,
    RouterModule.forRoot([
      { path: '', component: HomeView, pathMatch: 'full'},
    ])
	],
	declarations: [ AppComponent, HomeView ],
  exports: [ AppComponent ]
})
export class AppModule {}

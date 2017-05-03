import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeView } from './home/home-view.component';
import { TransferHttpModule } from '../modules/transfer-http/transfer-http.module';
import { CustomFormsModule } from 'ng2-validation';
import { MyDatePickerModule } from 'mydatepicker';
import { FormComponent } from './form/form.component';
import { CoreModule } from './core/core.module';


@NgModule({
	imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MyDatePickerModule,
    CustomFormsModule,
    TransferHttpModule,
    CoreModule,
    RouterModule.forRoot([
      { path: '', component: HomeView, pathMatch: 'full' },
      { path: 'thanks', loadChildren: './thanks/thanks.module#ThanksModule' }
    ])
	],
	declarations: [ AppComponent, HomeView, FormComponent ],
  exports: [ AppComponent ]
})
export class AppModule {}

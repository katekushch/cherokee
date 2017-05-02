import { NgModule }       from '@angular/core';

import { RestangularModule } from 'ngx-restangular';
import { MainService } from './services/mainService';


export function RestangularConfigFactory(RestangularProvider) {
  RestangularProvider.setBaseUrl('https://api.astro.2muchcoffee.com');
}

@NgModule({
  imports: [
    RestangularModule.forRoot(RestangularConfigFactory),
  ],
  declarations: [],
  providers: [
    MainService
  ]
})
export class CoreModule {
  
}
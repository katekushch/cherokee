import { NgModule }       from '@angular/core';

import { RestangularModule } from 'ngx-restangular';
import { MainService } from './services/mainService';


export function RestangularConfigFactory(RestangularProvider) {
  RestangularProvider.setBaseUrl('http://api.astro.2muchcoffee.com');
  RestangularProvider.setFullResponse(true);
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
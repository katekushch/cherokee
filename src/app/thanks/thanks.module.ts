import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { ThanksComponent } from './thanks.component';



@NgModule({
  declarations: [ThanksComponent],
  imports: [
    RouterModule.forChild([
      { path: '', component: ThanksComponent, pathMatch: 'full'}
    ])
  ]
})
export class ThanksModule {
  
}
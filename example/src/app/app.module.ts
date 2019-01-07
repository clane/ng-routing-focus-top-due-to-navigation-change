import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RoutingSignalService } from './routing-signal.service';
import { AppComponent } from './app.component';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';
import { Component3Component } from './component3/component3.component';
import { Component4Component } from './component4/component4.component';


@NgModule({
  declarations: [
    AppComponent,
    Component1Component,
    Component2Component,
    Component3Component,
    Component4Component
  ],
  imports: [
    BrowserModule,
		RouterModule.forRoot([

    {
      //A default path is required to prevent routing errors
      path:'',
      component: Component1Component,

    },
    {
      path: 'component1',
      component: Component1Component,
    },
		{
      path: 'component2',
      component: Component2Component,
    },
		{
      path: 'component3',
      component: Component3Component,
    },
		{
      path: 'component4',
      component: Component4Component,
    },
  ])
  ],
	providers: [RoutingSignalService],
  bootstrap: [AppComponent]
})
export class AppModule { }

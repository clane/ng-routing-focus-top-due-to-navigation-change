import { Component, OnInit, ViewChild } from '@angular/core';
import { RoutingSignalService } from './routing-signal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

constructor(private routingSignalService: RoutingSignalService) { }

  showRoutingLink4: boolean = false;

	@ViewChild('top') elementToFocusAfterRouting;

  ariaCurrent1:string = null;
  ariaCurrent2:string = null;
  ariaCurrent3:string = null;
  ariaCurrent4:string = null;

  ngOnInit() {
     this.routingSignalService.onRoute.subscribe( (e) => {
        this.onRoute(e);
     })
   }

   onRoute(e) {
        if(e){
           this.elementToFocusAfterRouting.nativeElement.textContent = "Top of " + e.target.innerText;
           this.elementToFocusAfterRouting.nativeElement.blur();
					 setTimeout(()=>{this.elementToFocusAfterRouting.nativeElement.focus();}, 500);
					this.setCurrentRouterLink(e.target.innerText); 
        }
   }

 setCurrentRouterLink(componentName) {
    //Set aria-current
    //Reset aria-current on all router links first
      this.ariaCurrent1 = null;
      this.ariaCurrent2 = null;
      this.ariaCurrent3 = null;
      this.ariaCurrent4 = null;


    if (componentName === "component 1") {
        this.ariaCurrent1 =  "page"; 
				this.showRoutingLink4 = false;
    } 
    if (componentName === "component 2") {
        this.ariaCurrent2 =  "page"; 
				this.showRoutingLink4 = false;
    }
    if (componentName === "component 3") {
        this.ariaCurrent3 =  "page"; 
				this.showRoutingLink4 = true;
				alert('now you will see a link to component 4 in the global navigation');
    }
    if (componentName === "component 4") {
        this.ariaCurrent4 =  "page"; 
				this.showRoutingLink4 = false;
    }
 }


}

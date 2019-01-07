import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class RoutingSignalService {

  constructor() { }

	onRoute = new EventEmitter<any>();

}

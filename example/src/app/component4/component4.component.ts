import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-component4',
  templateUrl: './component4.component.html',
  styleUrls: ['./component4.component.css']
})
export class Component4Component implements OnInit {

  constructor(private titleService: Title) {}
  componentTitle = 'Component 4';
  setTitle(newTitle:string) { this.titleService.setTitle(newTitle); }

  ngOnInit() {
    this.setTitle(this.componentTitle);
  }

}

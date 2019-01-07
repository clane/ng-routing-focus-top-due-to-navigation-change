import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {

  constructor(private titleService: Title) {}
  componentTitle = 'Component 1';
  setTitle(newTitle:string) { this.titleService.setTitle(newTitle); }

  ngOnInit() {
    this.setTitle(this.componentTitle);
  }


}

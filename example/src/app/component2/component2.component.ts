import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {

  constructor(private titleService: Title) {}
  componentTitle = 'Component 2';
  setTitle(newTitle:string) { this.titleService.setTitle(newTitle); }

  ngOnInit() {
    this.setTitle(this.componentTitle);
  }



}

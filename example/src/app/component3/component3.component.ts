import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.css']
})
export class Component3Component implements OnInit {

  constructor(private titleService: Title) {}
  componentTitle = 'Component 3';
  setTitle(newTitle:string) { this.titleService.setTitle(newTitle); }

  ngOnInit() {
    this.setTitle(this.componentTitle);
  }


}

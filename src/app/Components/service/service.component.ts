import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  name = 'Get Current Url Route Demo';
  currentRoute: string;

  constructor() { }

  ngOnInit(): void {
  }

}

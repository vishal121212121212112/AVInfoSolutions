import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  public href : string = "";
  constructor(private router : Router) { 
  }
  
  ngOnInit(): void {
    this.href = this.router.url;
  }
}

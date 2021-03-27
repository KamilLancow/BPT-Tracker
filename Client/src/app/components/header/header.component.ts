import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  home: boolean = false;
  energy_log: boolean = false;
  time_log: boolean = false;
  currentRoute: string = "";
  
  constructor(private router: Router) { 
    // get current page url
    router.events.subscribe((event)  => {
      if(event instanceof NavigationEnd) {
        this.currentRoute = event.urlAfterRedirects;
        // according to the current url, apply .selected css class to the aproppriate nav link
        this.toggleCssToNavLinks();
      }

    })
  }

  ngOnInit(): void {
  }

  toggleCssToNavLinks(): void {
    switch(this.currentRoute){
      case "/":
        this.home = true;
        this.energy_log = false;
        this.time_log = false;
        break;
      case "/energy-graph":
        this.home = false;
        this.energy_log = true;
        this.time_log = false;
        break;
      case "/time-graph":
        this.home = false;
        this.energy_log = false;
        this.time_log = true;
    }
  }

}

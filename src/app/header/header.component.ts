import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor() { }

  public widthLessThan(number: Number): boolean {
    return window.innerWidth < number;
  }

  ngOnInit() {
  }
}

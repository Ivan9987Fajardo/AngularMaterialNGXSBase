import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  events: string[] = [];
  opened!: boolean;
  active = 1;
  constructor() {}
  /**
   * Initializes the Header Component
   */
  ngOnInit(): void {}
}

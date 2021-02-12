import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs/internal/operators';

@Component({
  selector: 'app-app-container',
  templateUrl: './app-container.component.html',
  styleUrls: ['./app-container.component.scss'],
})
export class AppContainerComponent implements OnInit {
  showloader: boolean = false;

  constructor() {}

  async ngOnInit(): Promise<void> {}
}

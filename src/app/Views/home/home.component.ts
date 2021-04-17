import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ContactsComponent } from '../contacts/contacts.component';

export interface PeriodicElement {
  examination: string;
  school: string;
  year: number;
  board: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    school: 'Heritage Institute Of Technology',
    examination: 'B.Tech (Electronics &Communications Engineering)',
    year: 2017,
    board: 'West Bengal University of Technology (W.B.U.T)',
  },
  {
    school: 'Birati High School',
    examination: 'Higher Secondary',
    year: 2013,
    board: 'West Bengal Council of Higher Secondary Education',
  },
  {
    school: 'Birati High School',
    examination: 'Secondary',
    year: 2011,
    board: 'West Bengal Council of Secondary Education',
  },
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  displaycomponent = false;
  displayedColumns: string[] = ['examination', 'school', 'board', 'year'];
  dataSource = ELEMENT_DATA;
  constructor(private _bottomSheet: MatBottomSheet) {}

  ngOnInit(): void {}
  DisplayDetails() {
    this.displaycomponent = !this.displaycomponent;
  }
  OpenContacts() {
    this._bottomSheet.open(ContactsComponent);
  }
}

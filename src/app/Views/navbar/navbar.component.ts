import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AboutmeComponent } from '../aboutme/aboutme.component';
import { ContactsComponent } from '../contacts/contacts.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}
  OpenAbout() {
    this.dialog.open(AboutmeComponent);
  }
  OpenContact() {
    this.dialog.open(ContactsComponent);
  }
}

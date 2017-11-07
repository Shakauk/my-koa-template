import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatSnackBar } from '@angular/material';

import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  handsetPortrait: boolean;
  navigationList = [
    {name: 'Shak Systems', link: '/dashboard', icon: 'trending_up', permission: 'all'},
    {name: 'Add user', link: '/user/new', icon: 'person_add', permission: 'admin'},
    {name: 'Users list', link: '/user', icon: 'people', permission: 'all'}
  ];

  constructor(
    private breakpointObserver: BreakpointObserver,
    private snackBar: MatSnackBar,
    private authService: AuthService
  ) {
    breakpointObserver.observe([
      Breakpoints.HandsetPortrait,
      Breakpoints.TabletPortrait,
      Breakpoints.HandsetLandscape
    ]).subscribe(result => {
      this.handsetPortrait = result.matches;
    });
  }

  showNotImplemented() {
    this.snackBar.open('Not implemented', 'Ok', {
      duration: 2000,
    });
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebComponentWrapperOptions } from '@angular-architects/module-federation-tools';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
}

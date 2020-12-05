import { Component } from '@angular/core';
import { AuthService } from '../services/login.service';
import { AppRoutingModule } from './app-routing.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [],
})
export class DashboardComponent {
  constructor(public authService: AuthService) {}
}

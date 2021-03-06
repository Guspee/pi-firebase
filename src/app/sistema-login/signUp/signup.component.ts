import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/login.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignUpComponent implements OnInit {
  constructor(public authService: AuthService) {}

  ngOnInit() {}
}

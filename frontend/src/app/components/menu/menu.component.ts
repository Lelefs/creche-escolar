import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/views/login/login.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  constructor(private loginService: LoginService) {}

  ngOnInit(): void {}

  logout() {
    this.loginService.logout();
  }
}

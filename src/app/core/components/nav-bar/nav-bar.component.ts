import { Component, ElementRef, ViewChild } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.less']
})
export class NavBarComponent {

  expanded: boolean = false;

  @ViewChild('nav') nav: ElementRef;
  @ViewChild('toggle') toggle: ElementRef;
  @ViewChild('body') body: ElementRef;
  @ViewChild('header') header: ElementRef;

  constructor(private auth: AuthService){}
 
  toggleNavbar(): void {
    this.expanded = !this.expanded;
    document.getElementsByTagName('body')[0].classList.toggle('body-pd')
    // this.nav.nativeElement.classList.toggle('show');
    // this.toggle.nativeElement.classList.toggle('bx-x');
    // this.body.nativeElement.classList.toggle('body-pd');
    // this.header.nativeElement.classList.toggle('body-pd');
  }

  logout(){
    this.auth.logout();
  }
}

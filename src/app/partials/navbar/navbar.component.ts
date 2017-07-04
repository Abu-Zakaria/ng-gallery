import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  showDropdown: boolean = false;

  constructor()
  {
    this.observeScreenClick()
  }

  observeScreenClick()
  {
    document.addEventListener('click', (e) =>
      {
        let avatarEl = document.querySelector('.avatar-image')
        if (e.target != avatarEl)
        {
          this.showDropdown = false;
        }

      })
  }

  ngOnInit() {
  }

}

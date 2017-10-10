import {Component, OnInit, Renderer2} from '@angular/core';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private currentTheme = 'dark';
  private avaibleThemes = ['dark', 'light'];

  constructor(
    private cookieService: CookieService,
    private renderer: Renderer2
  ) { }

  public widthLessThan(number: Number): boolean {
    return window.innerWidth < number;
  }

  ngOnInit() {
    if (this.cookieService.check('theme')) {
      this.currentTheme = this.cookieService.get('theme');
      this.switchThemes(true);
    } else {
      this.cookieService.set('theme', this.avaibleThemes[0]);
    }
  }

  switchThemes(keepCurrent: boolean) {
    // Removes the old class
    this.renderer.removeClass(document.body, this.currentTheme);

    // Discover the next "ring" index
    let thmIndx = this.avaibleThemes.indexOf(this.currentTheme);

    if (!keepCurrent) {
      thmIndx += 1;
      if (thmIndx === this.avaibleThemes.length) {
        thmIndx = 0;
      }
    }

    this.currentTheme = this.avaibleThemes[thmIndx];
    this.renderer.addClass(document.body, this.currentTheme);
    this.cookieService.set('theme', this.currentTheme);
  }
}

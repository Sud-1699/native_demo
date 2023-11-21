import { Component, OnInit } from '@angular/core';
import { AppConstant } from 'src/app/app.constants';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  themeToggle: boolean = false;
  homeContentList: any[] = [];

  constructor(private utilService: UtilService) {}

  ngOnInit() {
    this.homeContentList = [
      {
        key1: {
          name: AppConstant.pageTitle.myAgenda,
          icon: "calendar-outline"
        },
        key2: {
          name: AppConstant.pageTitle.myOfficeAgenda,
          icon: "calendar"
        }
      },
      {
        key1: {
          name: AppConstant.pageTitle.mySubActivities,
          icon: "reader-outline"
        },
        key2: {
          name: AppConstant.pageTitle.myOfficeSubActivities,
          icon: "reader"
        }
      },
      {
        key1: {
          name: AppConstant.pageTitle.myTE,
          icon: "time-outline"
        },
        key2: {
          name: AppConstant.pageTitle.myOfficeTE,
          icon: "time"
        }
      },
    ]
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

    this.initializeDarkTheme(prefersDark.matches);

    // Listen for changes to the prefers-color-scheme media query
    prefersDark.addEventListener('change', (mediaQuery) => this.initializeDarkTheme(mediaQuery.matches));
  }

  // Check/uncheck the toggle and update the theme based on isDark
  initializeDarkTheme(isDark: boolean) {
    this.themeToggle = !isDark;
    this.toggleDarkTheme(!isDark);
  }

  // Listen for the toggle check/uncheck to toggle the dark theme
  toggleChange(event: any) {
    this.toggleDarkTheme(event.detail.checked);
  }

  // Add or remove the "dark" class on the document body
  toggleDarkTheme(shouldAdd: any) {
    document.body.classList.toggle('dark', shouldAdd);
  }

  goToPage(pathContent: string) {
    console.log(pathContent);
    switch(pathContent) {
      case AppConstant.pageTitle.myAgenda:
        this.utilService.navigatePage(AppConstant.pagePath.myAgendaPath);
        break;
      case AppConstant.pageTitle.myOfficeAgenda:
        this.utilService.navigatePage(AppConstant.pagePath.myOffcAgendaPath);
        break;
    }
  }

}

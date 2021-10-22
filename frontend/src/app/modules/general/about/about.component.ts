import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  dependencies: any;
  features: any;

  constructor() {
    this.dependencies = {
      frontend: [
        { name: 'Angular 12.2.11' },
        { name: 'Angular CLI 12.2.11' },
        { name: 'Angular Universal 12.1.2' },
        { name: 'Font Awesome 5.15.4' },
        { name: 'Bootstrap 5.1.3' },
      ],
      backend: [
        { name: 'Node.js' },
        { name: 'Express' },
        { name: 'pg-promise' },
      ]
    };

    this.features = {
      frontend: [
        {
          name: 'Angular CLI',
          englishTutorial: 'http://www.ganatan.com/tutorials/getting-started-with-angular',
          frenchTutorial: 'http://www.ganatan.com/tutorials/demarrer-avec-angular',
        },
        {
          name: 'Routing',
          englishTutorial: 'http://www.ganatan.com/tutorials/routing-with-angular',
          frenchTutorial: 'http://www.ganatan.com/tutorials/routing-avec-angular',
        },
        {
          name: 'Lazy loading',
          englishTutorial: 'http://www.ganatan.com/tutorials/lazy-loading-with-angular',
          frenchTutorial: 'http://www.ganatan.com/tutorials/lazy-loading-avec-angular',
        },
        {
          name: 'Bootstrap',
          englishTutorial: 'http://www.ganatan.com/tutorials/bootstrap-with-angular',
          frenchTutorial: 'http://www.ganatan.com/tutorials/bootstrap-avec-angular',
        },
        {
          name: 'Server side Rendering',
          englishTutorial: 'http://www.ganatan.com/tutorials/server-side-rendering-with-angular-universal',
          frenchTutorial: 'http://www.ganatan.com/tutorials/server-side-rendering-avec-angular-universal',
        },
        {
          name: 'HTTPClient',
          englishTutorial: 'http://www.ganatan.com/tutorials/httpclient-with-angular',
          frenchTutorial: 'http://www.ganatan.com/tutorials/httpclient-avec-angular',
        },
        {
          name: 'Transfer State',
          englishTutorial: 'http://www.ganatan.com/tutorials/transfer-state-with-angular',
          frenchTutorial: 'http://www.ganatan.com/tutorials/transfer-state-avec-angular',
        },
        {
          name: 'Progressive Web App',
          englishTutorial: 'http://www.ganatan.com/tutorials/progressive-web-app-with-angular',
          frenchTutorial: 'http://www.ganatan.com/tutorials/progressive-web-app-avec-angular',
        },
        {
          name: 'Search Engine optimization',
          englishTutorial: 'http://www.ganatan.com/tutorials/search-engine-optimization-with-angular',
          frenchTutorial: 'http://www.ganatan.com/tutorials/search-engine-optimization-avec-angular',
        },
        {
          name: 'Components',
          englishTutorial: null,
          frenchTutorial: 'http://www.ganatan.com/tutorials/components-avec-angular',
        },
        {
          name: 'Services',
          englishTutorial: null,
          frenchTutorial: 'http://www.ganatan.com/tutorials/services-avec-angular',
        },
        {
          name: 'Responsive Images List',
          englishTutorial: null,
          frenchTutorial: null,
        },
      ],
      backend: [
        { name: 'Local JSON' },
        { name: 'RESTFull API' },
        { name: 'CRUD API' },
        { name: 'Database Creation' },
        { name: 'Data Import' },
        { name: 'Data Export' },
      ]
    };

  }

}

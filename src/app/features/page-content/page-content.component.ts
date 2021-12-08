import { Component, Input, OnInit } from '@angular/core';
import { NotebookPage } from 'src/app/models/notebookPage.model';

@Component({
  selector: 'app-page-content',
  templateUrl: './page-content.component.html',
  styleUrls: ['./page-content.component.scss']
})
export class PageContentComponent implements OnInit {
  @Input() notebookPage!: NotebookPage[];
  @Input() pgNumber!: number;

  constructor() { }

  ngOnInit(): void {
    //console.log("content pgNumber - " + this.pgNumber);
  }


}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NotebookPage } from 'src/app/models/notebookPage.model';
import { NotebookService } from 'src/app/services/notebook.service';

@Component({
  selector: 'app-notebook',
  templateUrl: './notebook.component.html',
  styleUrls: ['./notebook.component.scss']
})
export class NotebookComponent implements OnInit, OnDestroy {
  notebookPage: NotebookPage[] = [];
  nbSub!: Subscription;
  textboxContent: string = "";
  pgNumber!: number;
  displayError: boolean = false;

  constructor(private nbService: NotebookService) { }

  ngOnInit(): void {
    this.getContent();
  }

  getContent() {
    this.notebookPage = this.nbService.getData();

    if(this.notebookPage != null || undefined) {
      this.pgNumber = 0;
    }
  }

  addContent() {
    if (this.notebookPage == undefined || this.notebookPage.length < 5) {

        let newPgNumber = this.notebookPage.length + 1;
        let newPageContent = this.textboxContent

        this.notebookPage.push({
        pageNumber: newPgNumber,
        pageContent: newPageContent
      })

      this.nbService.saveData(newPgNumber, newPageContent);
      this.textboxContent = '';
    }
    else{
      this.showError();
    }
    console.log(this.notebookPage)
  }

  previousPage(pg: number) {
    console.log("pg - " + pg);
    if(this.notebookPage != null) {
      if(this.notebookPage[pg] != null && this.notebookPage[pg].pageNumber > 1)
      {
        this.pgNumber -= 1;
        console.log("page - " + this.pgNumber)
      }
    }
  }

  nextPage(pg: number) {
    if(this.notebookPage != null) {
      if(this.notebookPage[pg] != null && this.notebookPage[pg].pageNumber < this.notebookPage.length)
      {
        this.pgNumber += 1;
        console.log("page - " + this.pgNumber)
      }
    }
  }

  showError() {
    this.displayError = true;
  }

  ngOnDestroy() {
    this.nbService.deleteData();
  }

}

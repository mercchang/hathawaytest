import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NotebookPage } from '../models/notebookPage.model';

@Injectable({
  providedIn: 'root'
})
export class NotebookService {

  constructor() { }

  getData(){
    let nbContent: NotebookPage[] = [];

    if (sessionStorage.getItem('1') !== null) {
      for (let i = 0; i < 5; i++) {
        nbContent.push({
          pageNumber: i + 1,
          pageContent: sessionStorage.getItem((i + 1).toString())!
        })
      }
    }

    return nbContent;
  }

  saveData(pgNum: number, pgContent: string) {
    sessionStorage.setItem(pgNum.toString(), pgContent);
  }

  deleteData() {
    sessionStorage.clear();
  }

}

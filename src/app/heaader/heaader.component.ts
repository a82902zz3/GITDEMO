import { ArticlesService } from './../articles.service';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-heaader',
  templateUrl: './heaader.component.html',
  styleUrls: ['./heaader.component.css'],
})
export class HeaaderComponent {
  @Output() keywordChange = new EventEmitter<string>();

  constructor(private ArticlesService: ArticlesService) {}

  search($event: any) {
    this.ArticlesService.searchArticles(this.keyword);
  }
  keyword = '';

  highlightTitle = false;
  fontSize = 24;
}

import { ArticlesService } from './articles.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'conduit';
  subtitle = 'A place to share your <u> knowledge. </u>';

  list: any[] = [];

  articles: any[] = [];
  articlesCount = 0;
  pages: any[] = [];
  tag = '';

  get keyword() {
    return this.ArticlesService.keyword;
  }

  constructor(public ArticlesService: ArticlesService) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.ArticlesService.getArticles().subscribe((res) => {
      this.articles = res.articles;
      this.articlesCount = res.articlesCount;

      this.pages = Array(this.calculatePageCount(res.articlesCount));
    });
  }

  switchToPage(pageNo: number) {
    this.ArticlesService.getArticles(pageNo, this.tag).subscribe((res) => {
      this.articles = res.articles;
      this.articlesCount = res.articlesCount;

      this.pages = Array(this.calculatePageCount(res.articlesCount));
    });
  }

  chooseTag(tag: string) {
    this.tag = tag;

    this.ArticlesService.getArticles(0, tag).subscribe((res) => {
      this.articles = res.articles;
      this.articlesCount = res.articlesCount;

      this.pages = Array(this.calculatePageCount(res.articlesCount));
    });
  }

  calculatePageCount(totalPages: number) {
    return Math.ceil(totalPages / 10);
  }
}

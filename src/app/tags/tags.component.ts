import { ArticlesService } from './../articles.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css'],
})
export class TagsComponent implements OnInit {
  tags: string[] = [];

  @Output() choose = new EventEmitter<string>();

  constructor(private ArticlesService: ArticlesService) {}

  ngOnInit(): void {
    this.ArticlesService.getTags().subscribe((res) => {
      this.tags = res;
    });
  }

  chooseTag(tag: string) {
    this.choose.emit(tag);
  }
}

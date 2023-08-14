import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaaderComponent } from './heaader/heaader.component';
import { FooterComponent } from './footer/footer.component';
import { ArticleModule } from './article/article.module';
import { TagsComponent } from './tags/tags.component';
import { FormsModule } from '@angular/forms';
import { FilterArticlePipe } from './filter-article.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaaderComponent,
    FooterComponent,
    TagsComponent,
    FilterArticlePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ArticleModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

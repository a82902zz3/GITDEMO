import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, filter, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ArticlesService {
  originalList = [
    {
      title:
        'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      slug: 'zp7yqc',
      body: 'laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium',
      createdAt: '2018-05-11T21:58:27.358Z',
      updatedAt: '2018-05-11T21:58:27.358Z',
      tagList: [],
      description:
        'laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium',
      author: {
        username: 'Eliseo@gardner.biz',
        bio: 'Eliseo',
        image: 'http://placekitten.com/200/300',
        following: false,
      },
      favorited: false,
      favoritesCount: 1,
    },
    {
      title: 'quo vero reiciendis velit similique earum',
      slug: 'p3vcsw',
      body: 'est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et',
      createdAt: '2018-05-11T21:55:00.722Z',
      updatedAt: '2018-05-11T21:55:00.722Z',
      tagList: [],
      description:
        'est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et',
      author: {
        username: 'Jayne_Kuhic@sydney.com',
        bio: 'Jayne_Kuhic',
        image: 'http://placekitten.com/200/300',
        following: false,
      },
      favorited: false,
      favoritesCount: 3,
    },
    {
      title: 'odio adipisci rerum aut animi',
      slug: '3c69lg',
      body: 'quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione',
      createdAt: '2018-05-11T19:49:35.917Z',
      updatedAt: '2018-05-11T19:49:35.917Z',
      tagList: [],
      description:
        'quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione',
      author: {
        username: 'Lew@alysha.tv',
        bio: 'Lew',
        image: 'http://placekitten.com/200/300',
        following: false,
      },
      favorited: false,
      favoritesCount: 5,
    },
  ];

  list = this.originalList;
  keyword = '';

  constructor(private httpClient: HttpClient) {}
  private apiUrl = 'https://conduit.productionready.io/api/articles';
  //getArticles(): Observable<any[]> {
  //return this.httpClient
  //.get<any[]>(this.apiUrl)
  //.pipe(map((response: any) => response.articles));
  //}
  getArticles(pageNo: number = 0, tag?: string): Observable<any> {
    var offset = pageNo * 10;

    if (!!tag) {
      var url = `https://api.realworld.io/api/articles?limit=10&offset=${offset}&tag=${tag}`;
    } else {
      var url = `https://api.realworld.io/api/articles?limit=10&offset=${offset}`;
    }

    return this.httpClient.get<any>(url);
  }

  getTags(): Observable<string[]> {
    var url = 'https://api.realworld.io/api/tags';
    return this.httpClient.get<Tags>(url).pipe(map((res) => res.tags));
  }

  searchArticles(keyword: string) {
    this.keyword = keyword;
  }

  // searchArticles(keyword: string): Observable<Article[]> {
  //   if (keyword === '') {
  //     return this.getArticles();
  //   } else {
  //     return this.getArticles()
  //       .pipe(map(res => {
  //         return res
  //           .filter(item => item.title.includes(keyword))
  //           .map(item => {
  //             return {
  //               ...item,
  //               title: item.title.replace(keyword, `<mark>${keyword}</mark>`)
  //             };
  //           });
  //       }));
  //   }
  // }
}

export interface Tags {
  tags: string[];
}

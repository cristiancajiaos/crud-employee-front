import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Category} from '../classes/category';
import {lastValueFrom} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private baseUrl: string = 'http://localhost:8090';

  constructor(
    private http: HttpClient
  ) {}

  public getAllCategories(): Promise<Category[]> {
    return lastValueFrom(this.http.get<Category[]>(`${this.baseUrl}/categories`));
  }
}

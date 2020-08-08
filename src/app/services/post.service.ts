import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
  
@Injectable({
  providedIn: 'root'
})
export class PostService {
 
  private url = 'https://jsonplaceholder.typicode.com/posts' 
 
  constructor(private http : HttpClient) { }


  getPost = () => this.http.get(this.url) 
  
  createPost = (post) => this.http.post(this.url, JSON.stringify(post))   

  deletePost = (id) => this.http.delete(this.url + '/' + id) 
    
}

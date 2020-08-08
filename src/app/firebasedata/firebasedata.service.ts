
import { HttpClient } from '@angular/common/http';
import { Post } from './firebasedata.model';
import { map, catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { error } from 'protractor';
import { throwError } from 'rxjs';

@Injectable({providedIn:'root'})
export class PostServices{
   
    postData : Post

    constructor(private http : HttpClient){}

    getPost(){
       let loadedPosts: Post[] = [];

       return this.http.get<{[key : string] : Post }>('https://my-project--test-1583932531424.firebaseio.com/posts.json')
        .pipe(
          map(res => {
            for(const key in res){
                loadedPosts.push({ ...res[key], id:key })
            } 
            return loadedPosts 
          }),
          catchError(error => throwError(error))
        )        
    }

    createPost(form){
        this.postData = form.value
      return this.http.post('https://my-project--test-1583932531424.firebaseio.com/posts.json',this.postData)     
    }


    deletePosts(){
     return this.http.delete('https://my-project--test-1583932531424.firebaseio.com/posts.json')
    }

}




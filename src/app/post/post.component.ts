import { Component, OnInit } from '@angular/core';
import { map } from "rxjs/operators";
import { PostService } from "../services/post.service";
import {Router, NavigationExtras} from "@angular/router";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit{

  posts: any[]
  error = null
  isFetching : boolean
 
  constructor(private service : PostService, private router: Router){}

  ngOnInit(): void {
    
    this.isFetching = true

    this.service.getPost()
    .pipe(map(responseData => {
      const postArray = []
      for(const key in responseData){
        postArray.push({ ...responseData[key]})
      }
      return postArray
    }))
    .subscribe(response => {
      this.isFetching = false
      this.posts = response
    },
    (error) => {
       this.error = error.message
    }
    )  
}

   createPost(input: HTMLInputElement){
     const post = { title : input.value }
     input.value = ''
     
     this.service.createPost(post)
      .subscribe(response => {
        this.posts.splice(0, 0, post)
        this.posts[0]['id'] = response['id']
       },
      (error : Response) =>{
        console.log(error.status)
        if(error.status === 400){
          // this.formSetError(error.json())
        }
        else{
          alert('An unexpected Error occured..')
          console.log(error)
        }
      }      
       )
   }


   updatePost(post){
    console.log(post)
   }

   deletePost(post){    

    this.service.deletePost(post.id)
      .subscribe(
        response => {
       
              const index = this.posts.indexOf(post)
              this.posts.splice(index, 1)
              
              },
        (error : Response) => {

            console.log(error)

              if(error.status === 404)
                alert('This post has already been deleted')
              
              else
                alert('Unexpected error occured')
              
         } 
      )
    }

    onDetails(post){
         let navigationExtras: NavigationExtras = {
          queryParams: {
              ...post
          }
      };
      this.router.navigate(["details"], navigationExtras);
    }

}

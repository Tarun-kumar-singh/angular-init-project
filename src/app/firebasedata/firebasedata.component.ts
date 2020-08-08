import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from "./firebasedata.model";
import { PostServices } from './firebasedata.service';
 
@Component({
  selector: 'app-firebasedata',
  templateUrl: './firebasedata.component.html',
  styleUrls: ['./firebasedata.component.css']
})
export class FirebasedataComponent implements OnInit {

  constructor(private http: HttpClient, private postServices : PostServices) { }
  
  loadedPosts : Post[] = [];
  isFetching = false
  titleContent : string = ''
  isSubmitting = false
  postData : Post
  isError = null
  counter = 0
  isDeleting = false
  isPostCreated = false
  errorMessage = ''

  ngOnInit(): void {
    this.onFetchPosts()
  }


  onCreatePost(form) {
    this.loadedPosts.push(form.value)
    this.isSubmitting = true
    this.isPostCreated = false
    
    this.postServices.createPost(form).subscribe(data => {
      this.isSubmitting = false
      this.isPostCreated = true
      form.reset()
    },
    error =>{
      this.isError = error.message
     this.loadedPosts.splice(this.loadedPosts.indexOf(form.value), 1)
    })
  }

  onFetchPosts() {

    this.loadedPosts = []
    this.isFetching = true

    this.postServices.getPost()
    .subscribe(
      data => {
          this.isFetching = false
          this.loadedPosts = data
          },
      error =>{ 
          this.isError = error.statusText  
          this.isFetching = false  
        }
    )
  }

  onClearPosts() {
    if(this.loadedPosts.length === 0) return

    this.isDeleting = true
    const cloneLoadedPost = this.loadedPosts
    this.loadedPosts = []

    // Send Http request
     this.postServices.deletePosts()
      .subscribe(data => {
        this.isDeleting = false
      }, error => {
        this.isDeleting = false
        this.isError = error.message
        this.loadedPosts = cloneLoadedPost
      })
  }

  onRemove(post){
  
      const index = this.loadedPosts.indexOf(post)
      this.loadedPosts.splice(index, 1)
      this.http.delete(`https://my-project--test-1583932531424.firebaseio.com/${post.id}.json`)
        .subscribe(res => {
          console.log(res)
        })
  }
 
   onHide(){
    this.isPostCreated = false
   }

   handleClose(){
     this.isError = false
     this.isFetching = false
   }

}

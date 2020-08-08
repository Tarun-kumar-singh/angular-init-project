import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Router} from "@angular/router";


@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  post : { id : number, title: string, body : string } 
  constructor(private route : ActivatedRoute, private router: Router) {  }
   
  ngOnInit(): void {  
  
    this.route.queryParams.subscribe(
              post => {
                  this.post = {
                    id : post.id,
                    title : post.title,
                    body : post.body
                  }
              }
     )

    }

    goBack(){
      console.log('going back...')
      this.router.navigate([''])
    }

}
 
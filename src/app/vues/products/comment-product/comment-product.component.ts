import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommentService } from 'src/app/services/comment.service';
import { AbstractControl } from '@angular/forms';
@Component({
  selector: 'app-comment-product',
  templateUrl: './comment-product.component.html',
  styleUrls: ['./comment-product.component.css']
})
export class CommentProductComponent implements OnInit {

  id?:number
  commentForm = new FormGroup(
    {
    idp: new FormControl(),
    text: new FormControl('',Validators.required),
    rating: new FormControl('',([Validators.required,Validators.min(1),Validators.max(5)]))
  }
  )
  comment = new FormControl('');

  constructor(private service:CommentService,private router:Router,private sniper:ActivatedRoute) {

   }

  ngOnInit(): void {
    this.id = this.sniper.snapshot.params['id'];
    this.commentForm.controls.idp.setValue(this.id);
   }

  /*onSubmit(){
    console.log(this.commentForm.value)
    this.service.postComment(this.commentForm.value).subscribe(
      data=> this.router.navigate(['list-product'])
     ,
      error => console.log(error)
    );

  }*/
  onSubmit(){

    console.log(this.commentForm.value)

    if(this.commentForm.valid){
      this.service.postComment(this.commentForm.value).subscribe(
        data=> this.router.navigate(['list-product'])
       ,
        error => console.log(error)
      );
    }
  }
  get idp(): AbstractControl | null {
    return this.commentForm.get('idp');
    }

  get text(): AbstractControl | null {
      return this.commentForm.get('text');
      }

  get rating(): AbstractControl | null {
        return this.commentForm.get('rating');
  }
}

import { Component, OnInit } from '@angular/core';
import { InputField } from '../posts/posts'
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent  implements OnInit {
 
hiddenList = false;
sideBarOpen= true;

 fieldData: InputField ={
   name:"",
   department:"",
   message:""
 };
 inputField: InputField[]=[];

 





 getInput(){
    this.hiddenList = true
     this.inputField.push({'name':this.fieldData.name, 'department':this.fieldData.department, 'message':this.fieldData.message})
     }

  

 

  removeList(i){
   this.inputField =
   this.inputField.filter((data, idx)=>
   idx !== i);
   if(this.inputField && this.inputField.length === 0){
     this.hiddenList = false
   }
  }

  sideBarToggler(){
    this.sideBarOpen = !this.sideBarOpen
  } 
 
  
  ngOnInit() {

  
  }
 

}

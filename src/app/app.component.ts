import { Component } from '@angular/core';
import { User } from './user';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'mmdfrontend';
  
  userModel = new User("","");
  onSubmit(){
    console.log(this.userModel);
 
  }
}

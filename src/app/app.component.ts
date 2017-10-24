import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  videos = [
    {name: 'video one', liked: true},
    {name: 'video two', liked: false}
  ]
  video = {
    title: 'Drone footage',
    views: 37000,
    liked: true
  }

  handleClick(){
    console.log('Someone clicked on button on the template')
              }
}

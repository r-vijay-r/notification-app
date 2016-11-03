import { Component } from '@angular/core';
import { PushNotificationsService } from 'angular2-notifications';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  constructor(private _pushNotifications: PushNotificationsService){
  	_pushNotifications.requestPermission();
  	_pushNotifications.create('Welocome!', {body: 'This is made for testing push notifiactions in angular2'}).subscribe(
            res => console.log(res),
            err => console.log(err)
        )
  }
  send(title:string,body:string){
  	var audio = new Audio();
	audio.src = "http://soundbible.com/grab.php?id=2084&type=wav";
	audio.load();
  	this._pushNotifications.create(title,{body: body,icon:'../favicon.ico'}).subscribe(
            res => audio.play(),
            err => console.log(err)
        );
  }
}
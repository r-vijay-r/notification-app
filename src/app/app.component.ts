import { Component } from '@angular/core';
import { PushNotificationsService } from 'angular2-notifications';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  _audio = new Audio();
  constructor(private _pushNotifications: PushNotificationsService){
    _pushNotifications.requestPermission();
    _pushNotifications.create('Welocome!', {body: 'This is made for testing push notifiactions in angular2',icon:'../favicon.ico'}).subscribe(
            res => console.log(res),
            err => console.log(err)
        )
    this._audio.src = "http://soundbible.com/grab.php?id=2084&type=wav";
    this._audio.load();
  }
  send(title:string,body:string){
  	this._pushNotifications.create(title,{body: body,icon:'../favicon.ico'}).subscribe(
            res => this._audio.play(),
            err => console.log(err)
        );
  }
}
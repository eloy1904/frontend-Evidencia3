import { Component, OnInit } from '@angular/core';
import { cineService } from './cine/cine.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  cines:any;
  constructor(public cine: cineService){}

  ngOnInit(){
    this.cine.getCine().subscribe(
      (r) =>{this.cines = r; console.log(r)},
      (e) =>{console.error(e)}
    )
  }
}

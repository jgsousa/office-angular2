import { Component, OnInit, Input } from '@angular/core';
import { Contract } from '../contract';


@Component({
  selector: 'app-my-list-item',
  templateUrl: './my-list-item.component.html',
  styleUrls: ['./my-list-item.component.css']
})
export class MyListItemComponent {

  constructor() { }

  @Input() item : Contract;
  

}

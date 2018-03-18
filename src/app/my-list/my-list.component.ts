import { Component, OnInit } from '@angular/core';
import { ContractsService } from '../contracts.service';
import { Contract } from '../contract';

@Component({
  selector: 'app-my-list',
  providers: [ContractsService],
  templateUrl: './my-list.component.html',
  styleUrls: ['./my-list.component.css']
})

export class MyListComponent {
  componentName: 'MyListComponent';
  contracts:Array<Contract>

  constructor(_contractsService: ContractsService) { 
    this.contracts = _contractsService.getContracts();
  }

}

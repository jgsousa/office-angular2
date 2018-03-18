import { Injectable } from '@angular/core';
import { Contract } from './contract';
import { ContractItem } from './contract-item';

@Injectable()
export class ContractsService {

  contracts:Array<Contract>

  constructor() { 
    this.contracts = [
      { Id: "12", Guid: "{23232-2323-2323}", 
        Items: [
          { ProductId : "EMS01.02", ProductDesc: "Para Amanhã" },
          { ProductId : "EMS01.03", ProductDesc: "Dois Dias" }
        ]
      }
    ];
  }

  getContracts(){
    return this.contracts;
  }

  getContractItem(s : string){
    var selected = {};
    this.contracts.forEach(function(item){
      if(item.Id == s){
        selected = item;
      }
    });
    return selected;
  }
}

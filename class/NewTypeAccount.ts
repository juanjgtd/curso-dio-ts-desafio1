import { DioAccount } from "./DioAccount"

export class NewTypeAccount extends DioAccount {
  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  deposit = (deposit: number): void => {
    if(this.validateStatus()){
      this.setBalance(deposit + 10,0) 
    }
  }
}
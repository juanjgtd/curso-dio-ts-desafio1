export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  getName = (): string => {
    return this.name
  }

  deposit = (deposit: number): void => {
    if(this.validateStatus()){
      this.setBalance(deposit,0)
    }
  }

  withdraw = (withdraw: number): void => {
    if(this.validateStatus() && this.balance > withdraw){
      this.setBalance(0,withdraw)
    }
  }

  getBalance = (): number => {
    return this.balance
  }

  setBalance = (deposit: number, withdraw: number): number => {
    return this.balance = this.balance + deposit - withdraw
  }

  validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}

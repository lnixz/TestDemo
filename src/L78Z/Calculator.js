function Calculator(num) {
  class Cal {
    constructor(num) {
      if(!num) throw new Error("Invalid number")
      this.value = num;
    }
    add(num) {
      this.value += num;
      return this;
    }
    minus(num) {
      this.value -= num;
      return this;
    }
    multi(num) {
      this.value *= num;
      return this;
    }
    div(num) {
      if(num === 0) throw new Error("Invalid number")
      this.value /= num;
      return this;
    }
    getValue() { return this.value}
  }

  return new Cal(num)
}

const num = Calculator(100).add(20).multi(2).div(2).getValue()
console.log(num);
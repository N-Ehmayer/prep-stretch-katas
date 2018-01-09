var calculateChange = function(total, cash) {

  var r = Math.round(100 * (cash - total))/100;

  const moneyType = {
    twentyDollar: 0,
    tenDollar: 0,
    fiveDollar: 0,
    twoDollar: 0,
    oneDollar: 0,
    quarter: 0,
    dime: 0,
    nickel: 0,
    penny: 0
  };

  while (r > 0) {
    if (r - 20 >= 0) {
      moneyType.twentyDollar ++;
      r -= 20;
    } else if (r - 10 >= 0) {
      moneyType.tenDollar ++;
      r -= 10;
    } else if (r - 5 >= 0) {
      moneyType.fiveDollar ++;
      r -= 5;
    } else if (r - 2 >= 0) {
      moneyType.twoDollar ++;
      r -= 2;
    } else if (r - 1 >= 0) {
      moneyType.oneDollar ++;
      r -= 1;
    } else if (r - 0.25 >= 0) {
      moneyType.quarter ++;
      r -= 0.25;
    } else if (r - 0.10 >= 0) {
      moneyType.dime ++;
      r -= 0.10;
    } else if (r - 0.05 >= 0) {
      moneyType.nickel ++;
      r -= 0.05;
    } else if (r - 0.01 >= 0) {
      moneyType.penny ++;
      r -= 0.01;
    } else {
      break;
    }
  }
  for (var i in moneyType) {
    if (moneyType[i] == 0) {
      delete moneyType[i];
    }
  }



  return moneyType;

}



console.log(calculateChange(17.87, 20));
console.log(calculateChange(26.23, 40));
console.log(calculateChange(5.01, 10));

//console.log(calculateChange(10, 100));




function calculateMoney(ticketSale) {
  if (ticketSale <= 0 || typeof ticketSale !== "number") {
    return "Invalid Input";
  } else {
    const ticket = 120;
    const dailyCost = 500 + 8 * 50;
    return ticketSale * ticket - dailyCost;
  }
}


function checkName(name) {
  if (typeof name !== "string") {
    return "invalid";
  } else {
    if (name.charAt(name.length - 1) === 'a' || name.charAt(name.length - 1) === 'y' || name.charAt(name.length - 1) === 'i' || name.charAt(name.length - 1) === 'e' || name.charAt(name.length - 1) === 'o' || name.charAt(name.length - 1) === 'u' || name.charAt(name.length - 1) === 'w' || name.charAt(name.length - 1) === 'A' || name.charAt(name.length - 1) === 'Y' || name.charAt(name.length - 1) === 'I' || name.charAt(name.length - 1) === 'E' || name.charAt(name.length - 1) === 'O' || name.charAt(name.length - 1) === 'U' || name.charAt(name.length - 1) === 'W') {
      return "good name";

    }
    else {
      return "bad name";
    }
  }
}



function deleteInvalids(myArray) {
  if (!(myArray instanceof Array)) {
    return 'please provide valid info';
  }
  else {
    let newArray = [];
    for (const loop of myArray) {
      if (typeof loop === "number") {
        newArray.push(loop);
      }
    }
    const filter = newArray.filter(x => !Number.isNaN(x));
    return filter;

  }
}
function password(obj) {
  if (typeof obj !== "object") {
    return "invalid input";
  }
  else {
    let name = obj.name;
    let birth = obj.birthYear;
    let site = obj.siteName;
    let birthTO = '' + birth;


    if (birthTO.length !== 4 || name === undefined || site === undefined || birth === undefined) {
      return 'invalid';
    }


    let result = site.split('').map((char, index) =>
      index === 0 ? char.toUpperCase() : char).join('');
    let comb = result + '#' + name + '@' + birthTO;
    return comb;
  }

}

function monthlySavings(arr, livingCost) {
  if (!(arr instanceof Array) || typeof livingCost !== "number") {
    return "invalid input";
  }
  else {
    let total = arr[0] + arr[1] + arr[2];
    let totalWithVat;
    if (arr[0] >= 3000 || arr[1] >= 3000 || arr[2] >= 3000) {
      totalWithVat = arr[0] * 20 / 100;
      totalWithVat = arr[1] * 20 / 100;
      totalWithVat = arr[2] * 20 / 100;
    }
    if (totalWithVat === undefined) {
      let add = total - livingCost;
      return add;
    }
    if (totalWithVat > 0) {
      let add = total - totalWithVat - livingCost;
      if (add < 0) {
        return "earn more";
      }
      return add;
    }
  }
}
// JS-001 / Arithmetic Report / Easy

function arithmeticReport(a, b) {
  return {
    sum: a + b,
    difference: a - b,
    product: a * b,
    quotient: b === 0 ? null : a / b,
  };
}

console.log(arithmeticReport(8, 2));
console.log(arithmeticReport(0, 0));

console.log("");

// JS-002 / Seconds to Clock / Easy

function secondsToClock(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const SecondsFainal = seconds % 60;

  return {
    hours: hours,
    minutes: minutes,
    SecondsFainal: SecondsFainal,
  };
}

console.log(secondsToClock(3661));
console.log(secondsToClock(0));

console.log("");

// JS-003 / Number Classification / Easy

function classifyNumber(n) {
  let sign;

  if (n > 0) {
    sign = "positive";
  } else if (n < 0) {
    sign = "negative";
  } else sign = "Zero";

  let parity = n % 2 === 0 ? "even" : "odd";
  return {
    sign: sign,
    parity: parity,
  };
}

console.log(classifyNumber(7));
console.log(classifyNumber(-4));

console.log("");

// JS-004 / Largest of Three / Easy

function largestOfThree(a, b, c) {
  let largest = a;

  if (b > largest) {
    largest = b;
  }
  if (c > largest) {
    largest = c;
  }

  return largest;
}

console.log(largestOfThree(4, 9, 2));
console.log(largestOfThree(-8, -2, -5));

console.log("");
// JS-005 / Grade Validator / Easy

function gradeFor(score) {
  if (
    typeof score !== "number" ||
    !Number.isFinite(score) ||
    score < 0 ||
    score > 100
  ) {
    return "Invalid score";
  }

  if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 50) {
    return "D";
  } else {
    return "F";
  }
}

console.log(gradeFor(90));
console.log(gradeFor(0));

console.log("");

// JS-006 / Switch Calculator / Medium

function calculate(a, operator, b) {
  switch (operator) {
    case "+":
      return a + b;

    case "-":
      return a - b;

    case "*":
      return a * b;

    case "/":
      if (b === 0) {
        return "Division by zero";
      }
      return a / b;

    case "%":
      if (b === 0) {
        return "Division by zero";
      }
      return a % b;
    default:
      "Invalid operator";
  }
}

console.log(calculate(8, "/", 2));
console.log(calculate(5, "%", 0));

console.log("");

// JS-007 / Leap Year / Medium

function isLeapYear(year) {
  if (year % 400 === 0) {
    return true;
  } else if (year % 100 === 0) {
    return false;
  } else if (year % 4 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isLeapYear(2000));
console.log(isLeapYear(1900));

console.log("");

// JS-008 / Triangle Type / Medium

function triangleType(a, b, c) {
  if (a <= 0 || b <= 0 || c <= 0 || a + b <= c || a + c <= b || b + c <= a) {
    return "Invalid";
  }

  if (a === b && b === c) {
    return "Equilateral";
  } else if (a === b || a === c || b === c) {
    return "Isosceles";
  } else {
    return "Scalene";
  }
}

console.log(triangleType(3, 3, 3));
console.log(triangleType(3, 3, 4));

console.log("");

// JS-009 / Tiered Electricity Bill / Medium

function electricityBill(units) {
  if (units <= 100) {
    return units * 1;
  } else if (units <= 200) {
    return 100 * 1 + (units - 100) * 1.5;
  } else 100 * 1 + 100 * 1.5 + (units - 200) * 2;
}

console.log(electricityBill(80));
console.log(electricityBill(150));

console.log("");

// JS-010 / Checkout Rules / Hard

function checkout(subtotal, isMember, delivery) {
  if (!Number.isFinite(subtotal) || subtotal < 0) {
    return "Invalid subtotal";
  }

  let discount = 0;

  if (isMember && subtotal >= 1000) {
    discount = subtotal * 0.1;
  }

  let discountedSubtotal = subtotal - discount;
  let shipping;

  switch (delivery) {
    case "standard":
      shipping = discountedSubtotal >= 500 ? 0 : 50;
      break;

    case "express":
      shipping = 100;
      break;

    case "pickup":
      shipping = 0;
      break;

    default:
      return "Invalid delivery";
  }

  return {
    discount: discount,
    shipping: shipping,
    total: discountedSubtotal + shipping,
  };
}

console.log(checkout(1200, true, "standard"));
console.log(checkout(400, false, "standard"));

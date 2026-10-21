console.log("");
// JS-011 / Rounding Report / Easy
function roundingReport(x) {
  return {
    floor: Math.floor(x),
    ceil: Math.ceil(x),
    round: Math.round(x),
    trunc: Math.trunc(x),
  };
}

console.log(roundingReport(2.7));
console.log(roundingReport(-2.7));

console.log("");
// JS-012 / Distance Between Points / Easy
function distance(x1, y1, x2, y2) {
  return Math.hypot(x2 - x1, y2 - y1);
}

console.log(distance(0, 0, 3, 4));
console.log(distance(2, 2, 2, 2));

console.log("");

// JS-013 / Circle Measurements / Easy

function circleMeasurements(radius) {
  return {
    area: Math.PI * Math.pow(radius, 2),
    circumference: 2 * Math.PI * radius,
  };
}

console.log(circleMeasurements(1));
console.log(circleMeasurements(0));

console.log("");
// JS-014 / Clamp a Value / Easy

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

console.log(clamp(15, 0, 10));
console.log(clamp(-3, 0, 10));

console.log("");
// JS-015 / Absolute Difference / Easy

function absoluteDifference(a, b) {
  return Math.abs(a - b);
}
console.log(absoluteDifference(4, 9));
console.log(absoluteDifference(-3, 5));

console.log("");
// JS-016 / Inclusive Random Integer / Medium

function randomInteger(min, max, randomValue = Math.random()) {
  return Math.floor(randomValue * (max - min + 1)) + min;
}

console.log(randomInteger(1, 6, 0));
console.log(randomInteger(1, 6, 0.999));

console.log("");

// JS-017 / Digit Count / Medium

function digitCount(n) {
  n = Math.abs(n);

  if (n === 0) {
    return 1;
  }

  let count = 0;

  while (n >= 1) {
    n = Math.trunc(n / 10);
    count++;
  }

  return count;
}

console.log(digitCount(0));
console.log(digitCount(-12345));

console.log("");

// JS-018 / Perfect Square / Medium

function isPerfectSquare(n) {
  if (n < 0) {
    return false;
  }

  return Number.isInteger(Math.sqrt(n));
}

console.log(isPerfectSquare(49));
console.log(isPerfectSquare(50));

console.log("");

// JS - 019 / Trigonometry in Degrees / Medium;
function trigDegrees(degrees) {
  let radians = (degrees * Math.PI) / 180;

  return {
    sin: Math.sin(radians),
    cos: Math.cos(radians),
  };
}

console.log(trigDegrees(0));
console.log(trigDegrees(90));

console.log("");
// JS-020 / Quadratic Equation / Hard

function quadraticRoots(a, b, c) {
  if (a === 0) {
    if (b === 0) {
      if (c === 0) {
        return "Infinite solutions";
      }
      return [];
    }

    return [-c / b];
  }

  const discriminant = b * b - 4 * a * c;

  if (discriminant < 0) {
    return [];
  }

  const root1 = (-b - Math.sqrt(discriminant)) / (2 * a);
  const root2 = (-b + Math.sqrt(discriminant)) / (2 * a);

  if (discriminant === 0) {
    return [root1];
  }

  return [root1, root2].sort((x, y) => x - y);
}

console.log(quadraticRoots(1, -5, 6));
console.log(quadraticRoots(1, 2, 1));

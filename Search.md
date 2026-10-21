<!-- Closure.
Shallow & Deep Copy.
ForIn vs ForOf.
while vs Do While -->

# JavaScript Research: Closures, Copying Objects, Iteration, and Loops

## 1. Closure in JavaScript

### Definition

A **closure** is a feature in JavaScript that allows a function to retain access to variables from its lexical scope, even after the outer function has finished executing. Closures are created when a function is defined within another function and references variables from the surrounding scope.

### How It Works

JavaScript uses lexical scoping, meaning that a function's access to variables is determined by where the function is defined in the source code. A closure allows the inner function to continue accessing its surrounding lexical environment.

### Example

```javascript
function outer() {
  let count = 0;

  return function inner() {
    count++;
    return count;
  };
}

const counter = outer();

console.log(counter()); // 1
console.log(counter()); // 2
```

In this example, the inner function retains access to the `count` variable after `outer()` has returned. Each invocation updates the same variable maintained by the closure.

### Applications

- Data privacy and encapsulation.
- Maintaining state between function calls.
- Implementing callbacks and event handlers.
- Creating function factories.

### Conclusion

Closures are an essential JavaScript concept because they allow functions to preserve access to their lexical environments, supporting state management and modular programming.

**Reference:** https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures

---

## 2. Shallow Copy vs. Deep Copy

### Definition

Copying an object means creating another representation of its data. In JavaScript, shallow and deep copying differ in how they handle nested objects and arrays.

### A. Shallow Copy

A **shallow copy** creates a new object and copies its top-level properties. However, if a property references another object, the reference is copied rather than creating an independent copy of that nested object.

#### Example

```javascript
const original = {
  name: "Mohamed",
  address: {
    city: "Cairo",
  },
};

const copy = { ...original };

copy.name = "Ali";
copy.address.city = "Alexandria";

console.log(original.name); // Mohamed
console.log(original.address.city); // Alexandria
```

The change to `name` does not affect the original object because the top-level property is copied independently. However, modifying `address.city` affects the original because both objects reference the same nested object.

### B. Deep Copy

A **deep copy** creates an independent copy of an object, including its nested objects and arrays, for supported data types.

#### Example

```javascript
const original = {
  name: "Mohamed",
  address: {
    city: "Cairo",
  },
};

const copy = structuredClone(original);

copy.address.city = "Alexandria";

console.log(original.address.city); // Cairo
console.log(copy.address.city); // Alexandria
```

In this example, the nested `address` object is copied independently. Therefore, modifying the copy does not change the original.

### Comparison

| Feature                | Shallow Copy          | Deep Copy                                 |
| ---------------------- | --------------------- | ----------------------------------------- |
| Top-level properties   | Copied                | Copied                                    |
| Nested objects         | References are shared | Independently copied for supported values |
| Independence           | Partial               | Greater independence                      |
| Typical implementation | Spread syntax (`...`) | `structuredClone()`                       |
| Resource requirements  | Generally lower       | May require more time and memory          |

### Conclusion

Shallow copying is useful when a new object with independent top-level properties is sufficient. Deep copying is more appropriate when nested data must also be independent. The choice depends on the data structure and the intended behavior.

**References:**

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
- https://developer.mozilla.org/en-US/docs/Web/API/Window/structuredClone

---

## 3. For...in vs. For...of

### Definition

JavaScript provides different iteration statements for traversing object properties and iterable values. The `for...in` and `for...of` statements differ primarily in what they iterate over.

### A. For...in

The **for...in** statement iterates over the enumerable string-keyed properties of an object, including inherited enumerable properties.

#### Example

```javascript
const student = {
  name: "Mohamed",
  age: 21,
  department: "Computer Science",
};

for (const key in student) {
  console.log(key);
}
```

**Output:**

```text
name
age
department
```

The variable `key` represents each property name. The corresponding value can be accessed using `student[key]`.

### B. For...of

The **for...of** statement iterates over the values produced by an iterable object's iterator. It is commonly used with arrays, strings, maps, and sets.

#### Example

```javascript
const colors = ["red", "green", "blue"];

for (const color of colors) {
  console.log(color);
}
```

**Output:**

```text
red
green
blue
```

In this example, `color` represents each array element rather than its index.

### Comparison

| Feature              | For...in                                    | For...of                        |
| -------------------- | ------------------------------------------- | ------------------------------- |
| Primary purpose      | Iterating over enumerable property keys     | Iterating over iterable values  |
| Common use           | Objects                                     | Arrays, strings, maps, and sets |
| Returned item        | Property key                                | Iterated value                  |
| Array iteration      | Usually not preferred for array elements    | Generally preferred             |
| Inherited properties | Can include enumerable inherited properties | Uses the object's iterator      |

### Conclusion

The `for...in` statement is generally suitable for examining object property names, while `for...of` is more appropriate for processing values in iterable collections. Choosing the correct statement improves code clarity and prevents unintended iteration behavior.

**References:**

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of

---

## 4. While vs. Do...while

### Definition

The `while` and `do...while` statements are conditional loops used to execute a block of code repeatedly. Their main difference is when the condition is evaluated.

### A. While Loop

The **while** loop evaluates its condition before executing the loop body. If the condition is initially false, the body does not execute.

#### Example

```javascript
let count = 5;

while (count < 3) {
  console.log(count);
  count++;
}
```

**Output:** No output.

The condition `count < 3` is false from the beginning, so the loop body is skipped.

### B. Do...while Loop

The **do...while** loop executes its body first and evaluates the condition afterward. Therefore, the body executes at least once.

#### Example

```javascript
let count = 5;

do {
  console.log(count);
  count++;
} while (count < 3);
```

**Output:**

```text
5
```

The body executes once before the condition is evaluated. Since the condition becomes false, the loop terminates.

### Comparison

| Feature              | While                                    | Do...while                            |
| -------------------- | ---------------------------------------- | ------------------------------------- |
| Condition evaluation | Before the loop body                     | After the loop body                   |
| Minimum executions   | Zero                                     | One                                   |
| Execution type       | Entry-controlled loop                    | Exit-controlled loop                  |
| Typical application  | Repetition only when a condition is true | Tasks that must execute at least once |

### Applications

- **While:** Processing data while a condition remains true.
- **Do...while:** Repeating a menu or input process after performing an initial operation.

### Conclusion

Both loops support conditional repetition, but the choice depends on whether the condition must be checked before the first execution. A `while` loop may execute zero times, whereas a `do...while` loop always executes its body at least once.

**References:**

- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while

---

## General Conclusion

Closures, copying mechanisms, iteration statements, and conditional loops are fundamental concepts in JavaScript. Closures support lexical state retention; shallow and deep copies determine the independence of copied data; `for...in` and `for...of` provide different iteration behaviors; and `while` and `do...while` differ in the timing of condition evaluation. Understanding these distinctions contributes to writing more predictable, maintainable, and efficient JavaScript programs.

1. Closure
   الـ Closure هي إن الفنكشن الداخلية تقدر تحتفظ بالوصول للمتغيرات الموجودة في الـ Scope الخارجي، حتى بعد ما الفنكشن الخارجية تخلص تنفيذها.

استخدامها: الاحتفاظ بالبيانات وعمل متغيرات خاصة. 2. Shallow Copy vs. Deep Copy

- Shallow Copy: بتنسخ الخصائص الأساسية، لكن الـ Objects الداخلية بتفضل مشتركة في المرجع مع الأصل.
- Deep Copy: بتعمل نسخة مستقلة تشمل الـ Objects الداخلية، وبالتالي التعديل عليها لا يؤثر على الأصل.
  أمثلة:
- Shallow: { ...obj }
- Deep: structuredClone(obj)

3. For...in vs. For...of

- For...in: بتلف على أسماء الخصائص (Keys)، وغالبًا بنستخدمها مع الـ Objects.
- For...of: بتلف على القيم (Values)، وبنستخدمها مع الـ Arrays والـ Strings وغيرها من الـ Iterables.
  للحفظ: in = Keys، وof = Values.

4. While vs. Do...while

- While: بتفحص الشرط الأول، وبعدها تنفذ الكود؛ ممكن تتنفذ صفر مرة.
- Do...while: بتنفذ الكود الأول، وبعدها تفحص الشرط؛ لازم تتنفذ مرة واحدة على الأقل.


// // Дано масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву

// // Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak. У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).
// Вивести результат математичної дії, вказаної в змінній znak.Обидва числа і знак виходять від користувача.
// // Написати функцію заповнення даними користувача двомірного масиву. Довжину основного масиву і внутрішніх масивів задає користувач.
//  Значення всіх елементів всіх масивів задає користувач.
// // Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 
// 'func(" hello world", ['l', 'd'])' поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач.

//task1
function calculateAverage(array) {
    let sum = 0;
    let count = 0;
  
    for (let i = 0; i < array.length; i++) {
      if (typeof array[i] === 'number') {
        sum += array[i];
        count++;
      }
    }
  
    if (count === 0) {
      return 0; 
    }
  
    return sum / count;
  }
  
  const array = [1, 23, 3, 'some', 'numb', 'or', 'no', 5];
  const average = calculateAverage(array);
  console.log(average);

  //task2
  function doMath(x, znak, y) {
    let result = 0;
  
    switch (znak) {
      case '+':
        result = x + y;
        break;
      case '-':
        result = x - y;
        break;
      case '*':
        result = x * y;
        break;
      case '/':
        result = x / y;
        break;
      case '%':
        result = x % y;
        break;
      case '^':
        result = Math.pow(x, y);
        break;
      default:
        console.log('Invalid operator!');
        return;
    }
  
    console.log('Result:', result);
  }
  
  let x = parseFloat(prompt('Enter the first number:'));
  let znak = prompt('Enter the operator (+, -, *, /, %, ^):');
  let y = parseFloat(prompt('Enter the second number:'));
  
  doMath(x, znak, y);
  
  //task3
  function createArr(mainLength, insideLength) {
    let arr = [];
  
    for (let i = 0; i < mainLength; i++) {
      let insideArr = [];
  
      for (let j = 0; j < insideLength; j++) {
        let item = prompt("Enter an item for the inside array");
        insideArr.push(item);
      }
  
      arr.push(insideArr);
    }
  
    return arr;
  }
  
  let mainLength = prompt("Enter the length of the main array");
  let insideLength = prompt("Enter the length of the inside array");
  let arr = createArr(mainLength, insideLength);
  
  console.log(arr);

  //task4
  function removeChars(str, charsToRemove) {
    let result = '';
  
    for (let i = 0; i < str.length; i++) {
      if (!charsToRemove.includes(str[i])) {
        result += str[i];
      }
    }
  
    return result;
  }
  
  let str = prompt("Enter a string:");
  let chars = prompt("Enter characters to remove (separated by comma):");
  let charsToRemove = chars.split(",");
  
  let modifiedStr = removeChars(str, charsToRemove);
  console.log(modifiedStr);
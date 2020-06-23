// Chapter No: 21 - 25 & Task No: 01
// var firstName = prompt("Enter Your First Name");
// var lastName = prompt("Enter Your Last Name");
// var fullName = firstName + " " + lastName;
// alert("Welcome " + fullName + "\nHave a Good Day...!");

// Chapter No: 21 - 25 & Task No: 02
// var phoneModel = prompt("Enter Your Favourite Mobile Phone Model");
// var modelLen = phoneModel.length;
// document.write("My favourite phone is: " + phoneModel);
// document.write("<br>Length of string: " + modelLen);

// Chapter No: 21 - 25 & Task No: 03
// var str = "Pakistani";
// var ind = str.indexOf("n");
// document.write("String: " + str);
// document.write("<br>Index of 'n': " + ind);

// Chapter No: 21 - 25 & Task No: 04
// var str = "Hello World";
// var ind = str.lastIndexOf("l");
// document.write("String: " + str);
// document.write("<br>Index of 'l': " + ind);

// Chapter No: 21 - 25 & Task No: 05
// var str = "Pakistani";
// var ind = str.slice(3, 4);
// document.write("String: " + str);
// document.write("<br>Character at Index 3: " + ind);

// Chapter No: 21 - 25 & Task No: 06
// var firstName = prompt("Enter Your First Name");
// firstName = firstName.concat(" ");
// var lastName = prompt("Enter Your Last Name");
// var fullName = firstName.concat(lastName);
// alert("Welcome " + fullName + "\nHave a Good Day...!");

// Chapter No: 21 - 25 & Task No: 07
// var str = "Hyderabad";
// var ind = str.indexOf("Hyder");
// var rep = str.slice(0, ind) + "Islam" + str.slice(ind + 5);
// document.write("City: " + str);
// document.write("<br>After Replacement: " + rep);

// Chapter No: 21 - 25 & Task No: 08
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// var newMsg = message.replace(/and/g, "&");
// document.write("Original Message: " + message);
// document.write("<br>After Replacement: " + newMsg);

// Chapter No: 21 - 25 & Task No: 09
// var str = "472";
// var num = parseInt(str);
// document.write("Value: " + str + "<br>Type: " + typeof (str));
// document.write("<br><br>Value: " + num + "<br>Type: " + typeof (num));

// Chapter No: 21 - 25 & Task No: 10
// var txt = prompt("Enter some text");
// document.write("User Input: " + txt);
// document.write("<br>Upper case: " + txt.toUpperCase());

// Chapter No: 21 - 25 & Task No: 11
// var msg = prompt("Enter some text");
// var txt = msg.toLowerCase().split(" ");
// for (var i = 0; i < txt.length; i++) {
//     txt[i] = txt[i][0].toUpperCase() + txt[i].slice(1);
// }
// document.write("User Input: " + msg);
// document.write("<br>Title case: " + txt.join(" "));

// Chapter No: 21 - 25 & Task No: 12
// var num = 35.36;
// var str = num.toString();
// str = str.replace(".", "");
// document.write("Number: " + num);
// document.write("<br>Result: " + str);

// Chapter No: 21 - 25 & Task No: 13
// var userName = prompt("Enter Username");
// for (var i = 0; i < userName.length; i++) {
//     if (userName.charCodeAt(i) === 33 || userName.charCodeAt(i) === 44 || userName.charCodeAt(i) === 46 || userName.charCodeAt(i) === 64) {
//         alert("Please enter a valid username");
//         break;
//     }
// }

// Chapter No: 21 - 25 & Task No: 14
// var A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var order = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
// order = order.toLowerCase();
// var ind = A.indexOf(order);
// if (ind >= 0 && ind < A.length) {
//     document.write(order + " is <b>available</b> at index " + ind + " in our bakery.");
// }
// else {
//     document.write("We are sorry. " + order + " is<b> not available</b> in our bakery.");
// }

// Chapter No: 21 - 25 & Task No: 15
// var pass = prompt("Enter password");
// for (var i = 0; i < pass.length; i++) {
//     if (pass.length < 6) {
//         document.write("Enter a valid password 1");
//         break;
//     }
//     else if (pass.charCodeAt(i) >= 65 && pass.charCodeAt(i) <= 90 && pass.charCodeAt(i) >= 97 && pass.charCodeAt(i) <= 122) {
//         document.write("Enter a valid password 2");
//         break;
//     }
//     else if (pass.slice(i, i + 2) >= 0 && pass.slice(i, i + 2) <= 9) {
//         document.write("Enter a valid password 3");
//         break;
//     }
//     else {
//         document.write("Correct Password")
//         break;
//     }
// }

// Chapter No: 21 - 25 & Task No: 16
// var university = "University of Karachi";
// university = university.split("");
// for (var i = 0; i < university.length; i++) {
//     document.write(university[i] + "<br>");
// }

// Chapter No: 21 - 25 & Task No: 17
// var str = prompt("Enter some text");
// var lastChar = str.charAt(str.length - 1);
// document.write("User Input: " + str);
// document.write("<br>Last character of input: " + lastChar);

// Chapter No: 21 - 25 & Task No: 18
// var text = "The quick brown fox jumps over the lazy dog";
// var txt = text.toLowerCase();
// count = 0;
// for (var i = 0; i < txt.length; i++) {
//     if (txt.slice(i, i + 3) === "the") {
//         count = count + 1;
//     }
// }
// document.write("Text: " + text);
// document.write("<br>There are " + count + " occurrence(s) of word 'the'");



// Chapter No: 26 - 30 & Task No: 01
// var num = prompt("Enter number");
// document.write("number: " + num);
// document.write("<br>round off value: " + Math.round(num));
// document.write("<br>floor value: " + Math.floor(num));
// document.write("<br>ceil value: " + Math.ceil(num));

// Chapter No: 26 - 30 & Task No: 02
// var num = prompt("Enter a negative number");
// document.write("number: " + num);
// document.write("<br>round off value: " + Math.round(num));
// document.write("<br>floor value: " + Math.floor(num));
// document.write("<br>ceil value: " + Math.ceil(num));

// Chapter No: 26 - 30 & Task No: 03
// var num = prompt("Enter a number");
// document.write("The absolute value of " + num + " is " + Math.abs(num));

// Chapter No: 26 - 30 & Task No: 04
// var dice = Math.random();
// if (dice < 0.15) {
//     document.write("Random dice value: 1");
// }
// else if (dice < 0.3) {
//     document.write("Random dice value: 2");
// }
// else if (dice < 0.45) {
//     document.write("Random dice value: 3");
// }
// else if (dice < 0.6) {
//     document.write("Random dice value: 4");
// }
// else if (dice < 0.75) {
//     document.write("Random dice value: 5");
// }
// else {
//     document.write("Random dice value: 6");
// }

// Chapter No: 26 - 30 & Task No: 05
// var coin = Math.random();
// if (coin < 0.5) {
//     document.write("1<br>Random coin value: Tails");
// }
// else {
//     document.write("2<br>Random coin value: Heads");
// }

// Chapter No: 26 - 30 & Task No: 06
// var randVal = Math.floor(Math.random() * 100) + 1;
// document.write("Random number between 1 and 100: " + randVal);

// Chapter No: 26 - 30 & Task No: 07
// var txt = prompt("Enter your weight in kilograms");
// var txt = txt.toLowerCase();
// var txt1 = txt;
// var parse;
// parse = txt1.replace("", "");
// console.log(parse);
// for (var i = 0; i < txt.length; i++) {
//     if (txt.slice(i, i + 3) === "kgs" || txt.slice(i, i + 9) === "kilograms") {
//         document.write("The weight of user is: " + parse + " kilograms");
//     }

// }

// Chapter No: 26 - 30 & Task No: 08
// var randNum = Math.floor(Math.random() * 10) + 1;
// var num = +prompt("Enter a number between 1 to 10");
// if (randNum === num) {
//     alert("Congratulation!");
// }
// else {
//     alert("Try again!");
// }



// Chapter No: 31 - 34 & Task No: 01
// var date = new Date();
// document.write(date);

// Chapter No: 31 - 34 & Task No: 02
// var date = new Date();
// var month = date.getMonth();
// switch (month) {
//     case 0:
//         document.write("Current Month: January");
//         break;
//     case 1:
//         document.write("Current Month: Febuary");
//         break;
//     case 2:
//         document.write("Current Month: March");
//         break;
//     case 3:
//         document.write("Current Month: April");
//         break;
//     case 4:
//         document.write("Current Month: May");
//         break;
//     case 5:
//         document.write("Current Month: June");
//         break;
//     case 6:
//         document.write("Current Month: July");
//         break;
//     case 7:
//         document.write("Current Month: August");
//         break;
//     case 8:
//         document.write("Current Month: September");
//         break;
//     case 9:
//         document.write("Current Month: October");
//         break;
//     case 10:
//         document.write("Current Month: November");
//         break;
//     default:
//         document.write("Current Month: December");
// }

// Chapter No: 31 - 34 & Task No: 03
// var date = new Date();
// var day = date.getDay();
// switch (day) {
//     case 0:
//         document.write("Today is Sun");
//         break;
//     case 1:
//         document.write("Today is Mon");
//         break;
//     case 2:
//         document.write("Today is Tue");
//         break;
//     case 3:
//         document.write("Today is Wed");
//         break;
//     case 4:
//         document.write("Today is Thu");
//         break;
//     case 5:
//         document.write("Today is Fri");
//         break;
//     default:
//         document.write("Today is Sat");
// }

// Chapter No: 31 - 34 & Task No: 04
// var date = new Date();
// var day = date.getDay();
// if (day === 0 || day === 6) {
//     alert("It’s Fun day");
// }

// Chapter No: 31 - 34 & Task No: 05
// var date1 = new Date();
// var date2 = date1.getDate();
// if (date2 < 16) {
//     document.write("First fifteen days of the month");
// }
// else {
//     document.write("Last days of the month");
// }

// Chapter No: 31 - 34 & Task No: 06
// var date = new Date();
// var time = date.getTime();
// var minutes = time/(1000*60);
// document.write("Current Date: " + date);
// document.write("<br>Elapsed milliseconds since January 1, 1970: " + time);
// document.write("<br>Elapsed minutes since January 1, 1970: " + minutes);

// Chapter No: 31 - 34 & Task No: 07
// var date = new Date();
// var time = date.getHours();
// if (time < 12) {
//         alert("“Its AM");
//     }
//     else {
//         alert("“Its PM");
//     }

// Chapter No: 31 - 34 & Task No: 08
// var laterDate = new Date("Dec 31, 2020");
// document.write("Later Date: "+laterDate);

// Chapter No: 31 - 34 & Task No: 09
// var today = new Date();
// var firstRamadan = new Date("Apr 25, 2020");
// today = today.getTime();
// firstRamadan = firstRamadan.getTime();
// var res = today-firstRamadan;
// res = Math.floor(res/(1000 * 60 * 60 * 24));
// document.write(res +" days have passed since 1st Ramadan 2020");

// Chapter No: 31 - 34 & Task No: 10
// var date = new Date();
// var begDate = new Date("Jan 01, 2015");
// var today = date.getTime();
// begDate = begDate.getTime();
// var res = today - begDate;
// res = Math.floor(res / (1000 * 60));
// document.write("On reference date "+date + "<br>");
// document.write(res + " seconds had passed since beginning of 2015");

// Chapter No: 31 - 34 & Task No: 11
// var date = new Date();
// document.write("Current date: " + date + "<br>");
// date.setHours(date.getHours() - 1);
// document.write("1 hour ago, it was " + date);

// Chapter No: 31 - 34 & Task No: 12
// var date = new Date();
// document.write("Current date: " + date + "<br>");
// date.setFullYear(date.getFullYear() - 100);
// document.write("100 years back, it was " + date);
// alert("100 years back, it was " + date);

// Chapter No: 31 - 34 & Task No: 13
// var birth = prompt("Enter your date of birth", "Oct 02, 1998");
// var birthDate = new Date(birth);
// var year = birthDate.getFullYear();
// var date = new Date();
// date = date.getTime();
// var time = birthDate.getTime();
// var age = date - time;
// age = Math.floor(age / (1000 * 60*60*24*365));
// document.write("Your age is " + age + "<br>");
// document.write("Your birth year is " + year );

// Chapter No: 31 - 34 & Task No: 14
// var name = prompt("Enter Name");
// var month = prompt("Enter Month");
// var numUnit = +prompt("Enter Number of Units");
// var chargesUnit = +prompt("Enter Chargers per Unit");
// var latePay = +prompt("Enter Late Payment Surcharge");
// var netAmt = numUnit * chargesUnit;
// var grossAmt = netAmt + latePay;

// document.write("<h1>K-Electric Bill</h1><br>");
// document.write("Customer Name: <b>" + name + "</b>");
// document.write("<br>Current Month: <b>" + month + "</b>");
// document.write("<br>Number of units: <b>" + numUnit + "</b>");
// document.write("<br>Charges per unit: <b>" + chargesUnit + "</b><br>");
// document.write("<br>Net Amount Payable (within Due Date): <b>" + netAmt + "</b>");
// document.write("<br>Late Payment Surcharge: <b>" + latePay + "</b>");
// document.write("<br>Gross Amount Payable (after Due Date): <b>" + grossAmt + "</b>");



// Chapter No: 35 - 38 & Task No: 01
// function dateTime() {
//     var date = new Date();
//     var theHr = date.getHours();
//     var theMin = date.getMinutes();
//     document.write("Current Date: " + date);
//     document.write("<br>Current time: " + theHr + ":" + theMin);

// }
// dateTime();

// Chapter No: 35 - 38 & Task No: 02
// function greet() {
//     var firstName = prompt("Enter Your First Name");
//     var lastName = prompt("Enter Your Last Name");
//     var fullName = firstName + " " + lastName;
//     alert("Welcome " + fullName + "\nHave a Good Day...!");
// }
// greet();

// Chapter No: 35 - 38 & Task No: 03
// function sum() {
//     var num1 = +prompt("Enter First Value");
//     var num2 = +prompt("Enter Second Value");
//     var sum = num1 + num2;
//     document.write(num1 + " + " + num2 + " = " + sum);
//     return sum;
// }
// sum();

// Chapter No: 35 - 38 & Task No: 04
// function cal(num1, op, num2) {
//     switch (op) {
//         case "+":
//             res = num1 + num2;
//             break;
//         case "-":
//             res = num1 - num2;
//             break;
//         case "*":
//             res = num1 * num2;
//             break;
//         case "/":
//             res = num1 / num2;
//             break;
//         case "%":
//             res = num1 % num2;
//             break;
//         default:
//             alert("Enter valid operator");
//     }
// }
// var num1 = +prompt("Enter 1st value");
// var op = prompt("Enter operator");
// var num2 = +prompt("Enter 2nd value");
// document.write("<h1>Calculator</h1><br>");
// cal(num1, op, num2);
// document.write(num1 + " " + op + " " + num2 + " = " + res);

// Chapter No: 35 - 38 & Task No: 05
// function sqrt(num) {
//     sq = num * num;
//     return sq;
// }
// var num = +prompt("Enter value");
// sqrt(num);
// document.write("The square of <b>" + num + "</b> is <b>" + sq + "</b>.");

// Chapter No: 35 - 38 & Task No: 06
// var fac;
// function fact(num) {
//     fac = 1;
//     for (var i = 2; i <= num; i++) {
//         fac *= i;
//     }
//     return fac;
// }
// var num = +prompt("Enter value");
// fact(num);
// document.write("The factorial of <b>" + num + "</b> is <b>" + fac + "</b>.");

// Chapter No: 35 - 38 & Task No: 07
// function count(start, end) {
//     for (var i = start; i <= end; i++) {
//         document.write(i + "<br>");
//     }
// }
// var start = +prompt("Enter starting value");
// var end = +prompt("Enter ending value");
// count(start, end);

// Chapter No: 35 - 38 & Task No: 08
// function calculateHypotenuse(perp, base) {
//     function calculateSquare(n) {
//         var sq = n * n;
//         return sq;
//     }
//     var hep = calculateSquare(base) + calculateSquare(perp);
//     hep =  Math.sqrt(hep);
//     hep = hep.toFixed(2);
//     document.write("Hypotenuse = " + hep);
// }
// var perp = +prompt("Enter perpendicular");
// var base = +prompt("Enter base");
// calculateHypotenuse(perp, base);

// Chapter No: 35 - 38 & Task No: 09
// function area(width, height) {       
//         var area = width * height;
//         area = area.toFixed(2);
//         document.write("Area = " + area);
//     }
//     var height = +prompt("Enter height");
//     area(20, height);

// Chapter No: 35 - 38 & Task No: 10
// function palindrome(str) {
//     var lowRegStr = str.toLowerCase();
//     var reverseStr = lowRegStr.split('').reverse().join('');
//     if (reverseStr === lowRegStr) {
//         alert(str + " is palindrome.")
//     }
//     else {
//         alert(str + " is not palindrome.")
//     }
// }
// var str = prompt("Enter word");
// palindrome(str);

// Chapter No: 35 - 38 & Task No: 11
// function titleCase(msg){
//     var txt = msg.toLowerCase().split(" ");
//     for (var i = 0; i < txt.length; i++) {
//         txt[i] = txt[i][0].toUpperCase() + txt[i].slice(1);
//     }
//     document.write("User Input: " + msg);
//     document.write("<br>Title case: " + txt.join(" "));
// }
// titleCase("the quick brown fox");

// Chapter No: 35 - 38 & Task No: 12
// function longestWord(str) {
//     var str = str.split(" ");
//     var word = str[0];

//     for (var i = 1; i < str.length; i++) {
//         if (word.length < str[i].length) {
//             word = str[i];
//         }
//     }
//     document.write("EXAMPLE STRING : 'Web Development Tutorial'");
//     document.write("<br>EXPECTED OUTPUT : " + word);
//     return word;
// }
// longestWord('Web Development Tutorial');

// Chapter No: 35 - 38 & Task No: 13
// function findLetter(word, letter) {
//     var txt = word.toLowerCase();
//     count = 0;
//     for (var i = 0; i < txt.length; i++) {
//         if (txt.slice(i, i + 1) === letter) {
//             count = count + 1;
//         }
//     }
//     document.write("Word: " + word);
//     document.write("<br>There are " + count + " occurrence(s) of letter '" + letter + "'");

// }
// var word = prompt("Enter Word");
// var letter = prompt("Enter letter to find");
// findLetter(word, letter);

// Chapter No: 35 - 38 & Task No: 14
// function calcCircumference(r) {
//     var circum = 2 * 3.142 * r;
//     circum = circum.toFixed(2);
//     document.write("The Circumference of circle = " + circum);
//     return circum;
// }

// function calcArea(r) {
//     var area = 3.142 * r * r;
//     area = area.toFixed(2);
//     document.write("<br>The Circumference of circle = " + area);
//     return area;
// }
// var radius = +prompt("Enter Radius of circle");
// calcCircumference(radius);
// calcArea(radius);

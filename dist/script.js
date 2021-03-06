function convertToRoman(num) {
 
 var decimalValue = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
 var romanNumeral = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];

 var converted = num + " in Roman Numeral is: \ ";

 for (var i = 0; i < decimalValue.length; i++) {
   while (decimalValue[i] <= num) {
     converted += romanNumeral[i];
     num -= decimalValue[i];
   }
 }
 return converted;

};

console.log(convertToRoman(12));
console.log(convertToRoman(145));
console.log(convertToRoman(5));
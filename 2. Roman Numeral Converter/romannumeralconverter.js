function convertToRoman(num) {
  const arabicNum = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const romanNum = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

  let result = ""
  for (let i=0 ; i<arabicNum.length ; i++) {
    while (num >= arabicNum[i]) {
      result += romanNum[i]
      num -= arabicNum[i]
    }
  }

 return result;
}

convertToRoman(4000);

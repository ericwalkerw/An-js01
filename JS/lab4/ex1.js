function convertToRoman(num) {
    if(num < 0 || num > 1000) return;
    const thousands = ["", "M"];
    const hundreds = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
    const tens = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
    const ones = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
  
    const thousandDigit = Math.floor(num / 1000);
    const hundredDigit = Math.floor((num % 1000) / 100);
    const tenDigit = Math.floor((num % 100) / 10);
    const oneDigit = num % 10;
  
    return (
      thousands[thousandDigit] +
      hundreds[hundredDigit] +
      tens[tenDigit] +
      ones[oneDigit]
    );
  }
  
  // Ví dụ sử dụng
  const number = 246;
  const romanNumeral = convertToRoman(number);
  console.log(`Số ${number} chuyển thành số La Mã là: ${romanNumeral}`);
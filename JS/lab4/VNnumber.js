function convert(nums) {
  const numLetter = {0: "Không",1: "Một ",2: "Hai",3: "Ba",4: "Bốn",
    5: "Năm",6: "Sáu",7: "Bảy",8: "Tám",9: "Chín",10: "Mười"};

  const numStr = nums.toString();
  const numLength = numStr.length;
  let result = '';

  for (let i = 0; i < numLength; i++) {
    const digit = parseInt(numStr[i]);
    const position = numLength - i;

    if (digit !== 0) {
      if(position ===1 && digit ===1 && numStr[1] != 0){
        result += "Mốt";
      }
      else if (position === 2 && digit === 1 || position === 6 && digit === 1) {
        result += "Mười ";
      } else if (position === 2 && digit >= 2) {
        result += numLetter[digit] + " Mươi ";
      }
      else {
        result += numLetter[digit];

        switch (position) {
          case 1: result += " "; break;
          case 3: result += " Trăm "; break;
          case 4: result += " Ngàn "; break;
          case 5: result += " Vạn "; break;
          case 6: result += " Mươi "; break;
          default: break;
        }
      }
    } 
    else {
      if (position === 2 && numLength >=4) {
        result += "Linh ";
      } else if (position === 5 && numLength > 5) {
        result += "Vạn ";
      } else if (position === 3 && numLength > 4 && numStr[4] === '0') {
        result += "Không Trăm ";
      }
    }
  }
  return result.trim();
}

const test = 726503;
console.log(convert(test));

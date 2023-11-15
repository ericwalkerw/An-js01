function convertToVietnamese(num) {
    const nghin = ["", " nghìn", " triệu", " tỷ"];
    const chuc = ["", "một", "hai", "ba", "bốn", "năm", "sáu", "bảy", "tám", "chín"];
    const donvi = ["mười", "mười một", "mười hai", "mười ba", "mười bốn", "mười lăm", "mười sáu", "mười bảy", "mười tám", "mười chín"];
  
    const getChunkWords = (chunk) => {
      return (
        (chunk >= 100 ? chuc[Math.floor(chunk / 100)] + " trăm " : "") +
        (chunk % 100 >= 20 ? chuc[Math.floor((chunk % 100) / 10)] + " mươi " + chuc[chunk % 10] : (chunk % 100 >= 10 ? donvi[chunk % 10] : chuc[chunk % 10])) +
        " "
      ).trim();
    };
  
    const convertChunkToWords = (chunk, unit) => (
      chunk > 0 ? getChunkWords(chunk) + unit + " " : ""
    );
  
    return [...Array(4)].map((_, i) => convertChunkToWords(Math.floor(num / Math.pow(1000, i)) % 1000, nghin[i])).reverse().join("").trim() || "không";
  }
  
  const number = 327;
  const vietnameseWords = convertToVietnamese(number);
  console.log(`${number} chuyển thành từ tiếng Việt là: ${vietnameseWords}`);
  
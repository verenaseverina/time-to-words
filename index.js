// expecting time to be a string in the format like '8:15' or '12:30'
function convertTimeToWords(time) {
  let str = "";
  const hourRules = {
    "0": "midnight",
    "1": "one",
    "2": "two",
    "3": "three",
    "4": "four",
    "5": "five",
    "6": "six",
    "7": "seven",
    "8": "eight",
    "9": "nine",
    "10": "ten",
    "11": "eleven",
    "12": "midday",
  }

  const timeArr = time.split(':');
  const hour = timeArr[0];
  const minutes = timeArr[1];

  if (minutes === "00") {
    if (hour !== "12" && hour !== "0") {
      str = hourRules[hour] + " o'clock";
    } else {
      str = hourRules[hour];
    }
  } else if (minutes === "30") {
    str = "half past " + hourRules[hour];
  } else {
    let minInt = Number(minutes);
    if (minInt > 30) {
      minInt = 60 - minInt;
      str = "to " + hourRules[(Number(hour) + 1)];
    } else {
      str = "past " + hourRules[hour];
    }
    str = handleMinutes(minInt) + str;
  }

  return str;
}

function handleMinutes(min) {
  let minRules = {
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen",
    20: "twenty",
    21: "twenty one",
    22: "twenty two",
    23: "twenty three",
    24: "twenty four",
    25: "twenty five",
    26: "twenty six",
    27: "twenty seven",
    28: "twenty eigth",
    29: "twenty ine",
  }
  if (min === 15) {
    return "quarter ";
  } else {
    return minRules[min] + " ";
  }
}

module.exports = { convertTimeToWords };
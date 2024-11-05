// Map of numbers (1-29)
const numToWords = {
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  21: 'twenty one',
  22: 'twenty two',
  23: 'twenty three',
  24: 'twenty four',
  25: 'twenty five',
  26: 'twenty six',
  27: 'twenty seven',
  28: 'twenty eight',
  29: 'twenty nine',
};


const getWordIndex = (int) => {
  return numToWords[int];
}



const adjustToWords = (hours, minutes) => {
  // Handle quarter cases first
  if (minutes === 0){
    return `${getWordIndex(hours)} o'clock`
  }
  if (minutes === 15){
    return `quarter past ${getWordIndex(hours)}`
  }
  if (minutes === 30){
    return `half past ${getWordIndex(hours)}`
  }
  if (minutes === 45){
    return `quarter to ${getWordIndex(hours == 12 ? 1 : hours + 1)}`
  }
  
  // Handle general cases
  if (minutes < 30){
    return `${getWordIndex(minutes)} past ${getWordIndex(hours)}`
  }
  if (minutes > 30){
    return `${getWordIndex(60 - minutes)} to ${getWordIndex(hours == 12 ? 1 : hours + 1)}`
  }
}



function convertTimeToWords(time) {
  // Parse hours and minutes from time string
  const timeSlice = time.split(':')
  const hours = parseInt(timeSlice[0])
  const minutes = parseInt(timeSlice[1])

  // Input validation
  if (hours > 12){
    return '12 hours time format only'
  } 
  if (minutes > 59){
    return 'Incorrect minutes'
  }
  if(isNaN(hours) || isNaN(minutes)){
    return 'Invalid time'
  }

  // Handle special times
  if (hours === 0 && minutes === 0){
    return 'midnight'
  }
  if (hours === 12 && minutes === 0){
    return 'midday'
  }

  return adjustToWords(hours, minutes);
}

module.exports = { convertTimeToWords };

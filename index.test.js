const  { convertTimeToWords } = require('./index');

describe('Time to words', () => {
  it('Handles midnight', () => {
    const timeInWords = convertTimeToWords('0:00');
    expect(timeInWords).toBe('midnight');
  });

  it('Handles 30 - 8:30', () => {
    const timeInWords = convertTimeToWords('8:30');
    expect(timeInWords).toBe('half past eight');
  });

  it('Handles times after 30 mins - 2:45', () => {
    const timeInWords = convertTimeToWords('2:45');
    expect(timeInWords).toBe('quarter to three');
  });

  it('Handles times after 30 mins - 2:33', () => {
    const timeInWords = convertTimeToWords('2:33');
    expect(timeInWords).toBe('twenty seven to three');
  });

  it('Handles o\'clock - 2:00', () => {
    const timeInWords = convertTimeToWords('2:00');
    expect(timeInWords).toBe('two o\'clock');
  });

  it('Handles single digit minutes past - 2:03', () => {
    const timeInWords = convertTimeToWords('2:03');
    expect(timeInWords).toBe('three past two');
  });

  it('Handles double digit minutes past - 2:11', () => {
    const timeInWords = convertTimeToWords('2:11');
    expect(timeInWords).toBe('eleven past two');
  });

  it('Handles quarter past - 2:15', () => {
    const timeInWords = convertTimeToWords('2:15');
    expect(timeInWords).toBe('quarter past two');
  });

  it('Handles half past - 2:30', () => {
    const timeInWords = convertTimeToWords('2:30');
    expect(timeInWords).toBe('half past two');
  });

  it('Handles minutes to - 2:35', () => {
    const timeInWords = convertTimeToWords('2:35');
    expect(timeInWords).toBe('twenty five to three');
  });

  it('Handles ten minutes to - 2:50', () => {
    const timeInWords = convertTimeToWords('2:50');
    expect(timeInWords).toBe('ten to three');
  });
});

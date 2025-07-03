function isLetter(char) {
  const upper = char.toUpperCase();
  return upper >= 'A' && upper <= 'Z';
}

function isDigit(char) {
  return char >= '0' && char <= '9';
}

function isValidProductCode(code) {
  if (code.length !== 7) return false;

  // First 3 characters: letters (any case)
  for (let i = 0; i < 3; i++) {
    if (!isLetter(code[i])) return false;
  }

  // Last 4 characters: digits
  for (let i = 3; i < 7; i++) {
    if (!isDigit(code[i])) return false;
  }

  return true;
}

function normalizeCode(code) {
  return code.slice(0, 3).toUpperCase() + code.slice(3);
}

function processData(data) {
  const totalCodes = data.length;
  const normalizedValidCodes = [];

  for (const code of data) {
    if (isValidProductCode(code)) {
      normalizedValidCodes.push(normalizeCode(code));
    }
  }

  normalizedValidCodes.sort();

  return {
    totalCodes,
    validCodes: normalizedValidCodes.length,
    invalidCodes: totalCodes - normalizedValidCodes.length,
    normalizedValidCodes
  };
}

module.exports = { processData };
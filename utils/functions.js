export function getLimitedWords(string, stringLength) {
  if (typeof string === 'string' && typeof stringLength === 'number') {
    return string.slice(0, stringLength);
  }
}
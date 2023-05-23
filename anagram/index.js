function areAnagrams(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  const charCount = {};
  for (let char of str1) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  for (let char of str2) {
    if (!charCount[char]) {
      return false;
    } else {
      charCount[char] -= 1;
    }
  }

  return true;
}

const string1 = 'debit crade';
const string2 = 'badds credt';

if (areAnagrams(string1, string2)) {
  console.log(`${string1} and ${string2} are anagrams.`);
} else {
  console.log(`${string1} and ${string2} are not anagrams.`);
}

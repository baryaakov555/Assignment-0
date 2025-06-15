function isPalindrome(word)
{
  let reversed = word.split('').reverse().join('');

  if (word == reversed)
  {
    return true
  }
  if (word != reversed)
  {
    return false
  }
}

// Do not edit this line;
module.exports = isPalindrome;
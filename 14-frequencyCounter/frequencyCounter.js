function frequencyCounter(word)
{
  let counter = {};

  for (let i = 0; i < word.length; i++)
  {
    let letter = word[i];

    if (counter[letter] == undefined)
      {
        counter[letter] = 1;
      }
    else
    {
      counter[letter]++;
    }
  }
  return counter;
}

// Do not edit this line;
module.exports = frequencyCounter;
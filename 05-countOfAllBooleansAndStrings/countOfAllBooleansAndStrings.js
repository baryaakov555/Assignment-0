function countOfAllBooleansAndStrings(arr)
{
  let num = 0;

  for(let i = 0; i < arr.length; i++)
  {
    if (typeof arr[i] === 'boolean' || typeof arr[i] === 'string')
    {
      num++
    } 
  }
  return num;
}

// Do not edit this line;
module.exports = countOfAllBooleansAndStrings;
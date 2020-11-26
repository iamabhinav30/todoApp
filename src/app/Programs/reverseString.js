function reverseWord(str) {
  var val = str.split('');
  var newStr = '';
  for (var i = val.length - 1; i >= 0; i--) {
    newStr = newStr + val[i];
  }
  console.log(newStr);
}
reverseWord('Abhinav is an Indian');
// Output: naidnI na si vanihbA

// -----------------------------------------------------------------------------

function reverseString(str) {
  var newStr = str.split(' ');
  var finalStr = ''
  for (var i = 0; i < newStr.length; i++) {
    var val = newStr[i].split('');
    var wordVal = '';
    for (var j = val.length - 1; j >= 0; j--) {
      wordVal = wordVal + val[j];
    }
    finalStr += wordVal + ' ';
  }
  console.log(finalStr);
}
reverseString('Abhinav is an Indian and lives in Bangalore')
//Output :  vanihbA si na naidnI dna sevil ni erolagnaB

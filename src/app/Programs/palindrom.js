function palindrom(strng) {
  debugger;
  var str = strng.split('');
  for (var i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return "it is not palindrom";
    }
  }
  return 'it is palindrom';
}

palindrom('aaavaaa');


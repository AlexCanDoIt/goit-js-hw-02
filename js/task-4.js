const formatString = function (string) {
  const charactersFromString = string.split('');

  if (charactersFromString.length > 40) {
    const charactersFromStringSplice = charactersFromString.splice(40);
    charactersFromString.push('...');
  }

  return charactersFromString.join('');
};

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// вернется оригинальная строка

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// вернется форматированная строка

console.log(formatString('Curabitur ligula sapien.'));
// вернется оригинальная строка

console.log(
  formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
  ),
);
// вернется форматированная строка

function isPangram(string){
  const lowerString = [...string].map(el => el.toLowerCase()).join('');

  for (let i = 97; i < 123; i++) {
    if (!lowerString.includes(String.fromCharCode(i))) {
      return false;
    }
  }

  return true;
}
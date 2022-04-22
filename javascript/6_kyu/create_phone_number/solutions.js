function createPhoneNumber(numbers){
    const [f, s, ...r ] = numbers.join('').match(/\d{1,3}/g);
    return `(${f}) ${s}-${r.join('')}`;
}

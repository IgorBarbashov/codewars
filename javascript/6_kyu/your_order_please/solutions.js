const order = words => words.split(' ').sort((a, b) => a.match(/\d/g) > b.match(/\d/g) ? 1 : -1).join(' ');

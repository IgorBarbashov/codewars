/** @returns string */
function alienCalendar(inputString) {
    const matches = inputString.match(/ta'(So|Ko|Ta|Qa|Goo) \d+/i);
    return matches === null ? '0' : matches[0].slice(3).toLowerCase();
}

// Tests
console.log(alienCalendar("DUN 'Ej QAD Je pAtLh TLhOQ Ta'tA 494 PuS WoVBe' SICh HuD,")); // ta 494
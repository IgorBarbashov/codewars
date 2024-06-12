function createCountdown(n) {
    let state = n >= 0 && (n | 0) === n ? n : 0;
    return () => state === 0 ? state : state--;
}

module.exports = createCountdown;

// Tests
const countdownFrom2 = createCountdown(2)
console.log(countdownFrom2()); // 2
console.log(countdownFrom2()); // 1
console.log(countdownFrom2()); // 0
console.log(countdownFrom2()); // 0
const noteIds = [
    '1.do', '1.re-b', '1.re', '1.mi-b', '1.mi', '1.fa', '1.sol-b', '1.sol', '1.la-b', '1.la', '1.si-b', '1.si',
    '2.do', '2.re-b', '2.re', '2.mi-b', '2.mi', '2.fa', '2.sol-b', '2.sol', '2.la-b', '2.la', '2.si-b', '2.si'
];

const song = [
    '1.sol', '1.sol', '1.sol', '1.mi-b', '1.si-b', '1.sol', '1.mi-b', '1.si-b', '1.sol',
    '2.re', '2.re', '2.re', '2.mi-b', '1.si-b', '1.sol-b', '1.mi-b', '1.si-b', '1.sol'
];

const keys = document.querySelectorAll('.key');
const map = new Map();
keys.forEach((k, i) => map.set(noteIds[i], k));

const play = (i) => {
    if (i < song.length) {
        setTimeout(() => {
            const key = map.get(song[i]);
            key.click();
            play(++i);
        }, 100);
    }
};

play(0);
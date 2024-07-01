/**
 * Нужно сделать эффект постепенного вывода текста.
 * Пример: https://yastatic.net/s3/taxi-front/tasks/task-matrix.html
 *
 * Напишите функцию typeWriter(delay, outputChar), возвращающую функцию writeText(text).
 *
 * writeText(text) далее вызывается несколько раз в разные моменты времени и должна
 * вызывать outputChar поочерёдно для каждого символа строки text с задержкой в delay миллисекунд.
 *
 *  writeText('ab')
 *  writeText('CD')     writeText('ef')               writeText('xy')
 *             │                   │                             │
 *             ▼         250ms     ▼            750ms            ▼
 *             ├───────┬───────┬───┴───┬───────┬───────┬─────────┼───────┐
 *             ▲ 100ms ▲ 100ms ▲ 100ms ▲ 100ms ▲ 100ms ▲  500ms  ▲ 100ms ▲
 *             │       │       │       │       │       │         │       │
 * outputChar('a')    'b'     'C'     'D'     'e'     'f'       'x'     'y'
 *
 *
 * type OutputChar = (char: string) => void;
 * type WriteText = (text: string) => void;
 * function typeWriter(delay: number, outputText: OutputChar): WriteText;
 *
 * Дополнительно:
 * Решение должно быть линейным по сложности и «отпускать» ссылку на строку сразу же после того,
 * как последний символ строки был выведен.
 */

function typeWriter(delay, outputChar) {
    // your code here
    let current = 0;
    const queue = [];

    const type = () => {
        setTimeout(() => {
            outputChar(queue[0][current]);

            if (current === queue[0].length - 1) {
                queue.shift();
                current = 0;
            } else {
                current++;
            }

            if (queue.length) {
                type();
            }
        }, delay);
    }

    const writeText = (str) => {
        if (!str.length) {
            return;
        }

        if (queue.length) {
            queue.push(str);
            return;
        }

        outputChar(str[0]);

        if (str.length > 1) {
            current = 1;
            queue.push(str)
            type();
        }
    };

    return writeText;
}

function runTest() {
    console.clear();

    let start = Date.now();

    function outputChar(char) {
        console.log(`${Date.now() - start}: ${char}`);
    }

    const writeText = typeWriter(100, outputChar);
    writeText('ab');
    writeText('CD');
    setTimeout(() => writeText('ef'), 250);
    setTimeout(() => writeText('xy'), 1000);
}

runTest();

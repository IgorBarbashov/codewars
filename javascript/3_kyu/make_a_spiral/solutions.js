function spiralize (n) {
    const fieldMarker = 0;
    const spiraleMarker = 1;

    let p = [0, 0];
    let d = 'right';
    let lastAction = 'move';
    const result = Array(n).fill(fieldMarker).map(a => Array(n).fill(fieldMarker));

    const direction = {
        right: { index: 1, step: 1, border: n - 1, next: 'down' },
        down: { index: 0, step: 1, border: n - 1, next: 'left' },
        left: { index: 1, step: -1, border: 0, next: 'up' },
        up: { index: 0, step: -1, border: 0, next: 'right' }
    };

    const isBorder = (p, d) => p[direction[d].index] === direction[d].border;

    const getNextP = (p, d) => {
        const nextP = [...p];
        nextP[direction[d].index] += direction[d].step
        return nextP;
    };

    const isThreeInLine = (p, d) => {
        const prevP = [...p];
        prevP[direction[d].index] -= direction[d].step;
        const prevPevP = [...prevP];
        prevPevP[direction[d].index] -= direction[d].step;
        return result[p[0]][p[1]] === spiraleMarker && result[prevP[0]][prevP[1]] === spiraleMarker && result[prevPevP[0]][prevPevP[1]] === spiraleMarker;
    };

    const isNextTouchItself = (p, d) => {
        const nextP = getNextP(p, d);

        if (isBorder(nextP, d)) {
            return false;
        }

        nextP[direction[d].index] += direction[d].step;
        return result[nextP[0]][nextP[1]] === spiraleMarker;
    }


    while(true) {
        result[p[0]][p[1]] = spiraleMarker;

        if (lastAction === 'change' && isNextTouchItself(p, d)) {
            break;
        }

        if (isBorder(p, d) || isNextTouchItself(p, d)) {
            if (!isThreeInLine(p, d)) {
                break;
            }

            d = direction[d].next;
            lastAction = 'change';
            continue;
        }

        p = getNextP(p, d);
        lastAction = 'move';
    }

    return result;
}

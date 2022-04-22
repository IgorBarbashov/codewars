function shouldIBeTired(dailyShedule){
    const mapToMinute = time => {
        const [hour, minute] = time.split(':');
        return Number(hour) * 60 + Number(minute);
    };

    const totalTime = dailyShedule.reduce((acc, [time, activity]) => {
        if (activity !== 'Drive') {
            return acc;
        }
        const [start, end] = time.split('-');
        const period = mapToMinute(end) - mapToMinute(start);
        return acc + period;
    }, 0);

    return totalTime > 9 * 60;
}

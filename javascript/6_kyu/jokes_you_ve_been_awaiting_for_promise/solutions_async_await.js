async function sayJoke(apiUrl, jokeId){
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        const isValidShape = (data) => Array.isArray(data.jokes);

        if (!isValidShape(data)) {
            throw new Error(`No jokes at url: ${apiUrl}`);
        }

        const joke = data.jokes.find(({ id }) => id === jokeId);
        if (!joke) {
            throw new Error(`No jokes found id: ${jokeId}`);
        }

        return {
            ...joke,
            saySetup: function() {
                return this.setup;
            },
            sayPunchLine: function() {
                return this.punchLine;
            }
        };
    } catch(error) {
        throw error;
    }
}
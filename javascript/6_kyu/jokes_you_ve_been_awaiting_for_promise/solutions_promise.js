function sayJoke(apiUrl, jokeId){
    return new Promise((resolve, reject) => {
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                if (!Array.isArray(data.jokes)) {
                    reject(new Error(`No jokes at url: ${apiUrl}`));
                }

                const joke = data.jokes.find(({ id }) => id === jokeId);
                if (!joke) {
                    reject(new Error(`No jokes found id: ${jokeId}`));
                }

                resolve({
                    saySetup: () => joke.setup,
                    sayPunchLine: () => joke.punchLine
                });
            })
            .catch(error => reject(error));
    });
}
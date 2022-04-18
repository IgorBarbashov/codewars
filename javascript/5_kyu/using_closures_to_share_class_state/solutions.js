// Let's make a Cat constructor!
var Cat = (function () {
    const cats = {};

    function catsConstructor(name, weight) {
        if (!name || !weight) {
            throw new Error('Name or Weight not specified');
        }

        Object.defineProperty(this, 'weight', {
            get: function() { return this._weight; },
            set: function(weight) { this._weight = weight; },
        });
        this.name = name;
        this.weight = weight;

        cats[name] = this;
    }

    catsConstructor.averageWeight = function() {
        let sum = 0;
        let count = 0;
        for (const cat in cats) {
            sum += cats[cat].weight;
            count++;
        }
        return sum / count;
    };

    return catsConstructor;
}());

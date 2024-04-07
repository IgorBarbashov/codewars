var Singleton = function() {
    if (this.singletoneObj) {
        return this.singletoneObj;
    }

    this.__proto__.singletoneObj = this;
};

// var Singleton = function(){
//     if(Singleton.__instance) {
//         return Singleton.__instance;
//     }
//
//     Singleton.__instance = this;
// };
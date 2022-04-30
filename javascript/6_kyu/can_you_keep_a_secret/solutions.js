function createSecretHolder(secret) {
    let _secret = secret;
    return (function(){
        return {
            setSecret: function(secret) { _secret = secret; },
            getSecret: function() { return _secret; }
        };
    })();
}

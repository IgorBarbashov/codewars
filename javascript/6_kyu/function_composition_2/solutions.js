const compose = (...funcs) => x => funcs.reduceRight((acc, func) => func(acc), x);

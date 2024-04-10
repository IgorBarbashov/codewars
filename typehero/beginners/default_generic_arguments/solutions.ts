type ApiRequest<D, M = 'GET'> = {
    data: D;
    method: M;
};

type TSConfig<T = {strict: true}> = T;
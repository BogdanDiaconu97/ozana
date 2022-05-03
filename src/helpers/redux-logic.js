export const reducer = f => (agg, _) => {
  f(agg, _);
  return agg;
};

export const actionReducer =
  (initialState, typeMap) =>
  (state = initialState, action) =>
    typeMap[action.type] ? typeMap[action.type](state, action) : state;

export const defaultSetHandler = (state, action) => ({ ...state, ...action });

export const defaultReducer = (initialState, types, typeMap = {}) => {
  const _typeMap = types.reduce(
    reducer((typeMap, type) => {
      typeMap[type] = defaultSetHandler;
    }),
    {}
  );

  return actionReducer(initialState, Object.assign(_typeMap, typeMap));
};

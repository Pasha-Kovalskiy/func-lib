const compose = (...funcs) => {
  return (initVar) => {
    return funcs.reduce((acc, func, index) => {
      if (typeof func != 'function') {
        throw new Error(`An argument with index ${index} is not a function.`);
      }
      return func(acc);
    }, initVar);
  };
};

module.exports = compose;

// export default compose;

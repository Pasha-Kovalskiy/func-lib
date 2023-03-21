const camelCase = (str = '') => {
  if (typeof str !== 'string') throw new Error('An argument must be a string.');
  return str
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+(.)/g, (_, chr) => chr.toUpperCase());
};

module.exports = camelCase;

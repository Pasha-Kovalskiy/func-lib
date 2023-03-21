const words = (str = '') => {
  if (typeof str !== 'string') throw new Error('An argument must be a string.');
  return str.split(/[^a-zA-Z0-9]/g).filter((word) => word !== '');
};

module.exports = words;

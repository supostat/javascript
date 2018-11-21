module.exports = {
  parser: 'babel-eslint',
  extends: ['airbnb-base', 'prettier', 'prettier/react'],
  plugins: ['prettier'],
  rules: require('./rules'),
};

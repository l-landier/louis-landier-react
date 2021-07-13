const alias = require('./alias').webpack;

// This might seems stupid but eslint is easily confused by some new
// syntaxes, we need a simple file, just with aliases for it to work
module.exports = {
  entry: {},
  output: {},
  resolve: {
    alias,
    extensions: ['.js', '.jsx'],
  },
};

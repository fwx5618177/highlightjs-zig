const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.js', // 你的主入口文件
  output: {
    filename: 'zig.min.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'commonjs2',
  },
};

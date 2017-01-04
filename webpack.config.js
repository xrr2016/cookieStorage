module.exports = {
  entry:'./index.js',
  output:{
    filename:'build.js',
    path:'./dist'
  },
  module:{
    loaders:[
      {
        test:/\.js$/,
        exclude:/(node_modules|bower_components)/,
        loader:'babel-loader',
        query:{
          presets:['es2015']
        }
      },
      {
        test:/\.css$/,
        loader:'style!css'
      }
    ]
  }
}
module.exports = {
     entry: './intro.js',
     output: {
         path: './bin',
         filename: 'bundle.js'
     },   module: {
        loaders: [
            { test: /\.css$/, loader: "style-loader!css-loader" },
            { test: /\.gif$/, loader: "url-loader" }
        ]
    }

 }
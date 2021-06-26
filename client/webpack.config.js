const { resolve } = require("path/posix");

module.exports = {
    mode: "production",
    entry: {
        script: "./js/script.js",
        champions: "./js/champions.js",
        
    },
    output: {
        path: path.resolve(__dirname, "bundle"),
        filename:'bundle.js'
    },
    module: {
        rules: [
            {
                test:/\.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    }
}
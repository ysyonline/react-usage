var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	devtool: "eval-source-map",
	entry: __dirname + "/app/main.js",
	output: {
		path: __dirname + "/build",
		filename: "[name]-[hash].js"
	},

	module:{
		loaders: [
			{
				test: /\.json$/,
				loader: "json-loader"
			},
			{
				test: /\.js$/,
				loader: "babel-loader",
				include: /app/
			},
			{
				test: /\.css$/,
				loader: "style-loader!css-loader?modules",
			}
		]
	},

	devServer: {
		historyApiFallback: true,
		inline: true,
		hot: true
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: __dirname + "/app/index.tmpl.html"
		}),
		new webpack.HotModuleReplacementPlugin()
	]

}
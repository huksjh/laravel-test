const path = require("path");
const fs = require("fs-extra");
const mix = require("laravel-mix");

const VuetifyLoaderPlugin = require("vuetify-loader/lib/plugin");
const CaseSensitivePathsPlugin = require("case-sensitive-paths-webpack-plugin");

var webpackConfig = {
    plugins: [
        new VuetifyLoaderPlugin(),
        new CaseSensitivePathsPlugin()
        // other plugins ...
    ]
    // other webpack config ...
};
mix.webpackConfig(webpackConfig);

require("laravel-mix-polyfill");

const TargetsPlugin = require("targets-webpack-plugin");
mix.webpackConfig({
    plugins: [
        new TargetsPlugin({
            browsers: ["last 2 versions", "chrome >= 41", "IE 11"]
        })
    ]
});
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js("resources/js/app.js", "public/dist/js")
    .sass("resources/sass/app.scss", "public/dist/css")
    .polyfill({
        useBuiltIns: "entry"
    })
    .options({
        watchOptions: {
            ignored: /node_modules/
        }
    });

mix.webpackConfig({
    plugins: [
        // new BundleAnalyzerPlugin()
    ],
    resolve: {
        extensions: [".js", ".json", ".vue"],
        alias: {
            "~": path.join(__dirname, "./resources/js")
        }
    },
    output: {
        chunkFilename: "dist/js/[chunkhash].js",
        path: mix.config.hmr ? "/" : path.resolve(__dirname, "./public/build")
    }
});

mix.then(() => {
    if (!mix.config.hmr) {
        process.nextTick(() => publishAseets());
    }
});

function publishAseets() {
    const publicDir = path.resolve(__dirname, "./public");

    if (mix.inProduction()) {
        fs.removeSync(path.join(publicDir, "dist"));
    }

    fs.copySync(
        path.join(publicDir, "build", "dist"),
        path.join(publicDir, "dist")
    );
    fs.removeSync(path.join(publicDir, "build"));
}

mix.browserSync("laravel-project.test");

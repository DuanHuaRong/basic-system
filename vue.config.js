const vueConfig = {
    publicPath: "./",
    // 加上以下的配置
    chainWebpack: (config) => {
        const oneOfsMap = config.module.rule("less").oneOfs.store;
        oneOfsMap.forEach(item => {
            item
                .use("style-resources-loader")
                .loader("style-resources-loader")
                .options({
                    // or an array : ["./path/to/vars.less", "./path/to/mixins.less"] 这里的路径不能使用@，否则会报错
                    patterns: "./src/styles/mixin.less"
                })
                .end()
        })
    }
}
module.exports = vueConfig
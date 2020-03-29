module.exports = {
    devServer: {
        proxy: {
            //碰到college路由就会起作用了
            "/api": {
                target: "http://localhost:9898/",
                changeOrigin: true,
                //重定向，一般可以不用写，或者值写出空''
                pathRewrite: {
                    '^/api': '/'
                }
            }
        },
    }
}
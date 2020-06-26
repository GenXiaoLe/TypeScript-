# TypeScript
记录TypeScript学习

## 初识TS
> 编写第一个ts文件

## vue+ts 项目改造 wiki大纲

1. 初识ts

   1. ts学习资源

      1. https://www.tslang.cn/docs/home.html 中文文档API
      2. https://www.typescriptlang.org/play/index.html 调试窗口，可把 ts编译为js，测试ts属性

   2. ts的环境搭建

      1. 安装typescript并初始化配置

         ```bash
         npm i typescript
         ```

      2. 新建ts配置文件

         ```bash
         tsc --init
         ```

      3. 新建package.json

         ```bash
         npm init -y
         ```

      4. 编译ts为js

         ```bash
         tsc .index.js
         ```

         

   3. ts的配置文件详解

       https://www.tslang.cn/docs/handbook/compiler-options.html

   4. ts+js demo编写，工程化以及调试

      1. 下载相关工程化工具即组件

         ```bash
         npm i webpack webpack-cli webpack-dev-server ts-loader typescript html-webpack-plugin
         ```

      2. 编写webpack.config.js 配置文件 以及创建模板文件html

    5. 具体项目见ts_webpack

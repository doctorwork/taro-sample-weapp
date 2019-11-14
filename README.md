# taro-sample-weapp

## 说明

Taro 与小程序原生融合的示例项目，包括：

- wxParse 示例
- echarts-for-weixin 示例
- 混写原生页面示例

## 安装与运行

首先需要全局安装 cli 开发工具 `@tarojs/cli`

```bash
$ npm i -g @tarojs/cli
$ yarn global add @tarojs/cli
```

然后执行如下命令，运行完后打开微信开发者工具，选择项目根目录进行预览

```bash
$ taro build --type weapp --watch
```

## 前端监控接入

安装小程序 SDK

```
npm i @doctorwork/wx-report-sdk
```

全局接入统计

```
import report from "@doctorwork/wx-report-sdk";

report({
  appId: "wxcf2979fb96ee5a39"
});
```

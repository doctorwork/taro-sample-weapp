import Taro, { Component } from "@tarojs/taro";
import report from "@doctorwork/wx-report-sdk";
import Index from "./pages/index";
import "./app.less";

report({
  // domain 为开发配置，正式环境省略即可
  domain: "http://webmonitor.developer.doctorwork.com/api/v1/wx/report/wx",
  appId: "wxcf2979fb96ee5a39"
});

class App extends Component {
  config = {
    pages: [
      "pages/index/index",
      "pages/wxParse/wxParse",
      "pages/echarts/echarts",
      "pages/native/native"
    ],
    window: {
      backgroundTextStyle: "light",
      navigationBarBackgroundColor: "#fff",
      navigationBarTitleText: "WeChat",
      navigationBarTextStyle: "black"
    }
  };

  componentCatchError() {}

  render() {
    return <Index />;
  }
}

Taro.render(<App />, document.getElementById("app"));

const presets = [
  ["@babel/env", {
    targets: {
      edge: "17",
      firefox: "60",
      chrome: "67",
      safari: "11.1"
    },
    useBuiltIns: "usage" // 只应用你需要的polyfills
  }],
  ["@babel/flow", {
    
  }]
];

module.exports = { presets };
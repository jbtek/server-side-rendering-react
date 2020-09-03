require("ignore-styles");
require("@babel/register")({
  ignore: [/(node_modules)/],
  preset: ["@bable-preset", "@babel-preset-react"]
});

require("./server");

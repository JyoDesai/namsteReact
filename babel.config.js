const presets = [
  [
    "@babel/preset-env",
    {
      targets: {
        node: "current",
      },
    },
  ],

  [
    "@babel/preset-react",
    {
      targets: {
        runtime: "automatic",
      },
    },
  ],
];
module.exports = { presets };

module.exports = function(api) {
  api.cache(false);
  return {
    presets: ['babel-preset-expo'],
    plugins: [     
      'react-native-reanimated/plugin',
      'tailwindcss-react-native/babel'

    ],
    
  };
};

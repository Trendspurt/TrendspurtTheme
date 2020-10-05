const path = require('path')
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/
})

module.exports = withMDX({
  //---
  // Page extensions
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  //---
  // Config Webpack
  webpack: config => {
    // Use custom alias to prevent path navigation (../../../)
    config.resolve.alias['@@'] = path.resolve(path.join(__dirname));
    config.resolve.alias['@@components'] = path.resolve(path.join(__dirname, 'components'));
    config.resolve.alias['@@layouts'] = path.resolve(path.join(__dirname, 'components', 'layouts'));
    
    // For theme demo only (no local react and react-dom allowed in the theme demo scenario)
    config.resolve.alias['@trendspurt/trendspurt-theme'] = path.resolve(path.join(__dirname, '..'));
    return config;
  }  
})
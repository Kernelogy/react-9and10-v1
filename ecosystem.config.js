module.exports = {
    apps: [
      {
        name: 'firstsite',
        // exec_mode: 'cluster',
        instances: '1', // Or a number of instances
        interpreter : '/home/ubuntu/.nvm/versions/node/v16.18.1/bin/node',
        script: './dist/ssr/index.js',
        args: 'start',
        port: '6060'
      }
    ]
  }
var update = require('./update-fetch')

module.exports = function unbrick(opts, connection){
  return new Promise(function(resolve, reject){
    if (opts.openwrt){
      logs.info('Proceeding with updating OpenWrt...')

      //download images

      //copy images


      return resolve()
    }

    reject(new Error('You need to specify --openwrt to proceed.'))
  })
}
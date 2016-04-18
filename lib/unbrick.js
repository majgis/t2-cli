var update = require('./update-fetch');
var logs = require('./logs');

module.exports = function unbrick(opts, connection){
  return new Promise(function(resolve, reject){
    if (opts.openwrt){
      logs.info('Proceeding with updating OpenWrt...');

      //download images
      return update.fetchUnbrick().then(function(result){
        console.log(result);

        //copy images
        resolve();
      })
    }

    reject(new Error('You need to specify --openwrt to proceed.'));
  })
}
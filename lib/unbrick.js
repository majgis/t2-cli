var update = require('./update-fetch');
var logs = require('./logs');

module.exports = function unbrick (opts, tessel) {
  return new Promise(function (resolve, reject) {
    if (opts.openwrt) {
      logs.info('Proceeding with updating OpenWrt...');

      //download images
      return update.fetchUnbrick()
        .then(function (result) {
          console.log(result);

          //copy images
          //https://github.com/tessel/t2-firmware/blob/master/scripts/flash.py
          //connection.device.open()
          //transaction([0x9f], 3)

          resolve();
        })
        .catch((e)=>{
          logs.error(e)
        })

    }

    reject(new Error('You need to specify --openwrt to proceed.'));
  })
}
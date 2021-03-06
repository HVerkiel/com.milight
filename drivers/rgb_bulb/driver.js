'use strict';

const Driver = require('../../lib/GenericDriver');
const { ZONE_TYPE } = require('../../lib/constants');

class MilightRGBDriver extends Driver {
  onInit() {
    super.onInit({
      driverType: ZONE_TYPE.RGB,
    });
  }
}

module.exports = MilightRGBDriver;

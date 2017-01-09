/*
 * Code generated by Microsoft (R) AutoRest Code Generator 0.17.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var models = require('./index');

var util = require('util');

/**
 * @class
 * Initializes a new instance of the EventCountPerDevice class.
 * @constructor
 * @member {number} [avgCountPerDevice]
 * 
 * @member {number} [previousAvgCountPerDevice]
 * 
 * @member {array} [countPerDevice]
 * 
 */
function EventCountPerDevice() {
}

/**
 * Defines the metadata of EventCountPerDevice
 *
 * @returns {object} metadata of EventCountPerDevice
 *
 */
EventCountPerDevice.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'EventCountPerDevice',
    type: {
      name: 'Composite',
      className: 'EventCountPerDevice',
      modelProperties: {
        avgCountPerDevice: {
          required: false,
          serializedName: 'avg_count_per_device',
          type: {
            name: 'Number'
          }
        },
        previousAvgCountPerDevice: {
          required: false,
          serializedName: 'previous_avg_count_per_device',
          type: {
            name: 'Number'
          }
        },
        countPerDevice: {
          required: false,
          serializedName: 'count_per_device',
          type: {
            name: 'Sequence',
            element: {
                required: false,
                serializedName: 'DateTimeDecimalCountsElementType',
                type: {
                  name: 'Composite',
                  className: 'DateTimeDecimalCounts'
                }
            }
          }
        }
      }
    }
  };
};

module.exports = EventCountPerDevice;
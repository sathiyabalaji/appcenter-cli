/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Class representing a DeviceDetailsBadRequestResponse.
 */
class DeviceDetailsBadRequestResponse {
  /**
   * Create a DeviceDetailsBadRequestResponse.
   * @property {string} code Possible values include: 'BadRequest', 'Conflict',
   * 'NotAcceptable', 'NotFound', 'InternalServerError', 'Unauthorized',
   * 'TooManyRequests'
   * @property {string} message
   */
  constructor() {
  }

  /**
   * Defines the metadata of DeviceDetailsBadRequestResponse
   *
   * @returns {object} metadata of DeviceDetailsBadRequestResponse
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'DeviceDetailsBadRequestResponse',
      type: {
        name: 'Composite',
        className: 'DeviceDetailsBadRequestResponse',
        modelProperties: {
          code: {
            required: true,
            serializedName: 'code',
            type: {
              name: 'String'
            }
          },
          message: {
            required: true,
            serializedName: 'message',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = DeviceDetailsBadRequestResponse;
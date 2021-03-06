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
 * Class representing a GetOKResponseItemModelModel.
 */
class GetOKResponseItemModelModel {
  /**
   * Create a GetOKResponseItemModelModel.
   * @property {string} label
   * @property {number} active
   * @property {number} [downloaded]
   * @property {number} [failed]
   * @property {number} [installed]
   */
  constructor() {
  }

  /**
   * Defines the metadata of GetOKResponseItemModelModel
   *
   * @returns {object} metadata of GetOKResponseItemModelModel
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'GetOKResponseItem',
      type: {
        name: 'Composite',
        className: 'GetOKResponseItemModelModel',
        modelProperties: {
          label: {
            required: true,
            serializedName: 'label',
            type: {
              name: 'String'
            }
          },
          active: {
            required: true,
            serializedName: 'active',
            type: {
              name: 'Number'
            }
          },
          downloaded: {
            required: false,
            serializedName: 'downloaded',
            type: {
              name: 'Number'
            }
          },
          failed: {
            required: false,
            serializedName: 'failed',
            type: {
              name: 'Number'
            }
          },
          installed: {
            required: false,
            serializedName: 'installed',
            type: {
              name: 'Number'
            }
          }
        }
      }
    };
  }
}

module.exports = GetOKResponseItemModelModel;

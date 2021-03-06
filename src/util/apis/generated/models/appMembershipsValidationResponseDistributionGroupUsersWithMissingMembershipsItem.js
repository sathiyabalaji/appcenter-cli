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
 * Class representing a AppMembershipsValidationResponseDistributionGroupUsersWithMissingMembershipsItem.
 */
class AppMembershipsValidationResponseDistributionGroupUsersWithMissingMembershipsItem {
  /**
   * Create a AppMembershipsValidationResponseDistributionGroupUsersWithMissingMembershipsItem.
   * @property {string} [distributionGroupId]
   * @property {string} [userId]
   * @property {string} [origin]
   */
  constructor() {
  }

  /**
   * Defines the metadata of AppMembershipsValidationResponseDistributionGroupUsersWithMissingMembershipsItem
   *
   * @returns {object} metadata of AppMembershipsValidationResponseDistributionGroupUsersWithMissingMembershipsItem
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'AppMembershipsValidationResponse_distribution_group_users_with_missing_membershipsItem',
      type: {
        name: 'Composite',
        className: 'AppMembershipsValidationResponseDistributionGroupUsersWithMissingMembershipsItem',
        modelProperties: {
          distributionGroupId: {
            required: false,
            serializedName: 'distribution_group_id',
            type: {
              name: 'String'
            }
          },
          userId: {
            required: false,
            serializedName: 'user_id',
            type: {
              name: 'String'
            }
          },
          origin: {
            required: false,
            serializedName: 'origin',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = AppMembershipsValidationResponseDistributionGroupUsersWithMissingMembershipsItem;

'use strict';

/**
 * death-approver service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::death-approver.death-approver');

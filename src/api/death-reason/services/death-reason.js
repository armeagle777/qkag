'use strict';

/**
 * death-reason service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::death-reason.death-reason');

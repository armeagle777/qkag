'use strict';

/**
 * extra-act service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::extra-act.extra-act');

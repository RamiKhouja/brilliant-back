'use strict';

/**
 * main-about service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::main-about.main-about');

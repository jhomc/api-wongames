'use strict';

/**
 * game service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::game.game', ({ strapi }) => ({
  async populate(params) {
    const category = await strapi.service('api::category.category').find({ name: "Action" })

    console.log(category)
  }
}));

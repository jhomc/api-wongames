'use strict';

/**
 *  game controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::game.game', ({ strapi }) => ({
  async populate(ctx) {
    try {
      console.log('Starting to populate...')
      const options = {
        sort: "popularity",
        page: "1",
        ...ctx.query
      }

      await strapi.service('api::game.game').populate(options);

      ctx.send("Finished populating!")
    } catch (err) {
      ctx.send({ err: err })
      console.log(err)
    }
  }
}));

'use strict';

/**
 *  game controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::game.game', ({ strapi }) => ({
  async populate(ctx) {
    try {
      console.log('initialize')
      ctx.send({ ok: true })
    } catch (err) {
      ctx.send({ err: err })
    }
  }
}));

'use strict';

/**
 * game service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

const axios = require("axios");

async function getGameInfo(slug) {
  const jsdom = require('jsdom');
  const { JSDOM } = jsdom
  const body = await axios.get(`https://www.gog.com/en/game/${slug}`)
  const dom = new JSDOM(body.data)

  const description = dom.window.document.querySelector(".description")

  return {
    rating: 'BR0',
    short_description: description.textContent.slice(0, 160),
    description: description.innerHTML

  }
}

module.exports = createCoreService('api::game.game', ({ strapi }) => ({
  async populate(params) {
    const gogApiUrl = `https://www.gog.com/games/ajax/filtered?mediaType=game&search=Witcher`

    const { data: { products } } = await axios.get(gogApiUrl)

    console.log(await getGameInfo(products[1].slug))
  }
}));

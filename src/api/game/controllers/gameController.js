'use strict';

module.exports = {
  populate: (ctx) => {
    console.log('initialize')
    ctx.send({ ok: true })
  }
};
'use strict';

/**
 * Novosti.js controller
 *
 * @description: A set of functions called "actions" for managing `Novosti`.
 */

module.exports = {

  /**
   * Retrieve novosti records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.novosti.search(ctx.query);
    } else {
      return strapi.services.novosti.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a novosti record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.novosti.fetch(ctx.params);
  },

  /**
   * Count novosti records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.novosti.count(ctx.query);
  },

  /**
   * Create a/an novosti record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.novosti.add(ctx.request.body);
  },

  /**
   * Update a/an novosti record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.novosti.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an novosti record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.novosti.remove(ctx.params);
  }
};

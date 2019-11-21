'use strict';

/**
 * Menutabs.js controller
 *
 * @description: A set of functions called "actions" for managing `Menutabs`.
 */

module.exports = {

  /**
   * Retrieve menutabs records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.menutabs.search(ctx.query);
    } else {
      return strapi.services.menutabs.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a menutabs record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.menutabs.fetch(ctx.params);
  },

  /**
   * Count menutabs records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.menutabs.count(ctx.query);
  },

  /**
   * Create a/an menutabs record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.menutabs.add(ctx.request.body);
  },

  /**
   * Update a/an menutabs record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.menutabs.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an menutabs record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.menutabs.remove(ctx.params);
  }
};

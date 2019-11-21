'use strict';

/**
 * Menubars.js controller
 *
 * @description: A set of functions called "actions" for managing `Menubars`.
 */

module.exports = {

  /**
   * Retrieve menubars records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.menubars.search(ctx.query);
    } else {
      return strapi.services.menubars.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a menubars record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.menubars.fetch(ctx.params);
  },

  /**
   * Count menubars records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.menubars.count(ctx.query, populate);
  },

  /**
   * Create a/an menubars record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.menubars.add(ctx.request.body);
  },

  /**
   * Update a/an menubars record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.menubars.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an menubars record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.menubars.remove(ctx.params);
  }
};

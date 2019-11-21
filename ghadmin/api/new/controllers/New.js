'use strict';

/**
 * New.js controller
 *
 * @description: A set of functions called "actions" for managing `New`.
 */

module.exports = {

  /**
   * Retrieve new records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.new.search(ctx.query);
    } else {
      return strapi.services.new.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a new record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.new.fetch(ctx.params);
  },

  /**
   * Count new records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.new.count(ctx.query);
  },

  /**
   * Create a/an new record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.new.add(ctx.request.body);
  },

  /**
   * Update a/an new record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.new.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an new record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.new.remove(ctx.params);
  }
};

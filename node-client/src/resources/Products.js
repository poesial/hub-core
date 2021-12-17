'use strict';

import CandyResource from '../CandyResource'

import ProductFamilies from './ProductFamilies'
import ProductVariants from './ProductVariants'
export default class Products extends CandyResource {
    constructor (candy) {
        super (candy)
        this.families = new ProductFamilies(candy)
        this.variants = new ProductVariants(candy)
    }
    get (params) {
        return this.$get('products', params)
    }
    find (id, params) {
        return this.$get(`products/${id}`, params)
    }
    update(id, params) {
        return this.$put(`products/${id}`, params)
    }
    create (data, params) {
        return this.$post(`products`, data, params)
    }
    createDraft (id, data, params) {
        return this.$post(`products/${id}/drafts`, data, params)
    }
    publish (id, data, params) {
        return this.$post(`products/${id}/publish`, data, params)
    }
    destroy (id) {
        return this.$delete(`products/${id}`);
    }
    updateChannels (id, data, params) {
        return this.$post(`products/${id}/channels`, data, params)
    }
    updateCustomerGroups (id, data, params) {
        return this.$post(`products/${id}/customer-groups`, data, params)
    }
    updateProductAssociations (id, associations, params) {
        return this.$post(`products/${id}/associations`, {
            relations: associations
        }, params)
    }
    associateBlogs(id, blogs, params) {
      return this.$post(`products/${id}/blogs`, {
        blogs
      }, params)
    }
    associateCategories(id, categories, params) {
        return this.$post(`products/${id}/categories`, {
            categories
        }, params)
    }
    addRoute(id, data, params) {
        return this.$post(`/products/${id}/urls`, data, params)
    }
    attachAsset(id, assetId, position) {
        return this.$put(`/products/${id}/assets`, {
            asset_id: assetId,
            position: position || null
        })
    }
}

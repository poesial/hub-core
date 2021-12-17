'use strict';

import {
    ActivityLog,
    Addresses,
    Assets,
    Associations,
    AttributeGroups,
    Attributes,
    Categories,
    Channels,
    Collections,
    Currencies,
    CustomerGroups,
    Customers,
    Languages,
    Layouts,
    Orders,
    Generic,
    Payments,
    Products,
    ProductVariants,
    ProductFamilies,
    Reports,
    Root,
    Search,
    Settings,
    ShippingMethods,
    ShippingZones,
    Taxes,
    Users,
    Discounts,
    RecycleBin,
    Routes,
    Versions,
    Blogs,
    BlogFamilies,
    OtherContents
} from './resources'

import CandyResource from './CandyResource.js'

export {
    CandyResource
}

export default class GetCandy {
  constructor(token, url) {
    this.token = token;
    this.url = url;
    this._prepResources();
  }
  setToken(token) {
    this.token = token;
    this._prepResources();
    return this;
  }
  setHttp(http) {
    this.$http = http;
    this._prepResources();
  }
  getToken() {
    return this.token;
  }
  getUrl() {
    return this.url;
  }
  addResource (handle, resource) {
     this[handle] = new  resource(this);
  }
  _prepResources() {
    this.activityLog = new ActivityLog(this)
    this.addresses = new Addresses(this)
    this.assets = new Assets(this)
    this.associations = new Associations(this)
    this.attributeGroups = new AttributeGroups(this)
    this.attributes = new Attributes(this)
    this.categories = new Categories(this)
    this.channels = new Channels(this)
    this.collections = new Collections(this)
    this.currencies = new Currencies(this)
    this.customerGroups = new CustomerGroups(this)
    this.customers = new Customers(this)
    this.discounts = new Discounts(this);
    this.generic = new Generic(this);
    this.languages = new Languages(this)
    this.layouts = new Layouts(this)
    this.orders = new Orders(this)
    this.payments = new Payments(this)
    this.products = new Products(this)
    this.productFamilies = new ProductFamilies(this)
    this.productVariants = new ProductVariants(this)
    this.reports = new Reports(this)
    this.recycleBin = new RecycleBin(this)
    this.root = new Root(this);
    this.routes = new Routes(this);
    this.search = new Search(this)
    this.settings = new Settings(this)
    this.shippingMethods = new ShippingMethods(this)
    this.shippingZones = new ShippingZones(this)
    this.taxes = new Taxes(this)
    this.users = new Users(this)
    this.versions = new Versions(this)
    this.blogs = new Blogs(this)
    this.blogFamilies = new BlogFamilies(this)
    this.otherContents = new OtherContents(this)
  }
}
// const utils = require('./utils');

// const resources = require('./resources');

// GetCandy.CandyResource = require('./CandyResource');
// GetCandy.resources = resources

// function GetCandy(token, url) {
//     if (!(this instanceof GetCandy)) {
//         return new GetCandy(token, url);
//     }
//     this.token = token;
//     this.url = url;
//     this._prepResources();
// }

// GetCandy.prototype = {
//     setToken(token) {
//         this.token = token;
//         this._prepResources();
//         return this;
//     },
//     setHttp(http) {
//         this.$http = http;
//         this._prepResources();
//     },
//     getToken() {
//         return this.token;
//     },
//     getUrl() {
//         return this.url;
//     },
//     _prepResources() {
//         this['root'] = new resources['root'](this);
//         this['orders'] = new resources['orders'](this);
//         this['products'] = new resources['products'](this);
//         this['settings'] = new resources['settings'](this);
//         this['languages'] = new resources['languages'](this);
//         this['assets'] = new resources['assets'](this);
//         this['search'] = new resources['search'](this);
//         this['channels'] = new resources['channels'](this);
//         this['taxes'] = new resources['taxes'](this);
//         this['customerGroups'] = new resources['customerGroups'](this);
//         this['categories'] = new resources['categories'](this);
//     },
// }

// GetCandy.GetCandy = GetCandy;
// // export default GetCandy;

// // export default GetCandy;
// module.exports = GetCandy;

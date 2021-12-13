import path from 'path'

export default function (moduleOptions) {
  const templates = [
    'mixins/HasGroups.js',
    'components/EditStock.vue',
    'components/BlogSettings.vue',

    // VueX Store
    'store/blog.js',
    'store/blog-family.js',
    'store/listing.js',

    // Pages
    'pages/BlogIndex.vue',
    'pages/edit/BlogDetails.vue',
    'pages/edit/BlogMedia.vue',
    'pages/edit/BlogAvailability.vue',
    'pages/edit/BlogAssociations.vue',
    'pages/edit/BlogUrls.vue',
    'pages/families/BlogFamilyIndex.vue',
    'pages/families/BlogFamilyEdit.vue',
    'pages/families/BlogFamilyAttributes.vue',
    'pages/families/BlogFamilyBlogs.vue',
    // 'pages/reports/BlogStockReport.vue',

    // New components
    'components/variants/VariantManager.vue',
    'components/variants/VariantTiers.vue',
    'components/variants/VariantOptions.vue',
    'components/variants/CreateVariant.vue',
    'components/variants/VariantCustomerGroupPricing.vue',
    'components/BlogAssociation.vue',
    'components/BlogTable.vue',
    'components/BlogCreate.vue',
    'components/BlogFamilyCreate.vue',
    'components/BlogFamilyAttributeManager.vue',
    'components/BlogFamilyBlogsManager.vue',

    // Locales!
    'locales/en.json',
    'locales/fr.json'
  ]

  templates.forEach((template) => {
    this.addTemplate({
      src: path.resolve(__dirname, template),
      fileName: 'blogs/' + template
    })
  })

  this.addLayout(path.resolve(__dirname, 'layouts/BlogFamilyLayout.vue'), 'blog-family')
  this.addLayout(path.resolve(__dirname, 'layouts/BlogLayout.vue'), 'blog')

  this.addPlugin({
    src: path.resolve(__dirname, 'plugin.js'),
    options: moduleOptions
  })
}

module.exports.meta = require('../package.json')

import { defineType } from 'sanity'

// This is a reusable object type that can be added to other schemas
export default defineType({
  name: 'seoMetadata',
  title: 'SEO Metadata',
  type: 'object',
  description: 'Search engine optimization settings',
  fields: [
    {
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string',
      description: 'Title for search engines (50-60 characters recommended)',
      validation: (Rule) =>
        Rule.max(60).warning('Meta titles should be 50-60 characters for optimal display'),
    },
    {
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      rows: 3,
      description: 'Description for search engines (150-160 characters recommended)',
      validation: (Rule) =>
        Rule.max(160).warning('Meta descriptions should be 150-160 characters for optimal display'),
    },
    {
      name: 'metaKeywords',
      title: 'Meta Keywords',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Keywords for SEO (add one per tag)',
      options: {
        layout: 'tags',
      },
    },
    {
      name: 'ogImage',
      title: 'Social Share Image',
      type: 'image',
      description: 'Image shown when shared on social media (1200x630px recommended)',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'ogTitle',
      title: 'Social Share Title',
      type: 'string',
      description: 'Title for social media shares (defaults to Meta Title if empty)',
    },
    {
      name: 'ogDescription',
      title: 'Social Share Description',
      type: 'text',
      rows: 2,
      description: 'Description for social media shares (defaults to Meta Description if empty)',
    },
    {
      name: 'noIndex',
      title: 'No Index',
      type: 'boolean',
      description: 'Prevent search engines from indexing this page',
      initialValue: false,
    },
    {
      name: 'canonicalUrl',
      title: 'Canonical URL',
      type: 'url',
      description: 'Override the canonical URL for this page (optional)',
    },
  ],
  options: {
    collapsible: true,
    collapsed: false,
  },
})

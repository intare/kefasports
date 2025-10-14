import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'service',
  title: 'Services',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Service Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Short Description',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'content',
      title: 'Full Content',
      type: 'array',
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'string',
      description: 'Icon name or class for this service',
    }),
    defineField({
      name: 'benefits',
      title: 'Benefits',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Benefit Title',
              type: 'string',
            },
            {
              name: 'description',
              title: 'Benefit Description',
              type: 'text',
              rows: 2,
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'process',
      title: 'Process Steps',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'step',
              title: 'Step Number',
              type: 'number',
            },
            {
              name: 'title',
              title: 'Step Title',
              type: 'string',
            },
            {
              name: 'description',
              title: 'Step Description',
              type: 'text',
              rows: 2,
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order in which this service should appear',
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seoMetadata',
      description: 'Search engine optimization settings for this service page',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
      description: 'description',
    },
    prepare(selection) {
      const { title, media, description } = selection
      return {
        title,
        subtitle: description,
        media,
      }
    },
  },
})

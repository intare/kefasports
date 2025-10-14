import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'about',
  title: 'About Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Page Subtitle',
      type: 'string',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'story',
      title: 'Our Story',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Section Title',
          type: 'string',
        },
        {
          name: 'subtitle',
          title: 'Section Subtitle',
          type: 'string',
        },
        {
          name: 'content',
          title: 'Story Content',
          type: 'array',
          of: [
            {
              type: 'block',
            },
          ],
        },
        {
          name: 'image',
          title: 'Story Image',
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    }),
    defineField({
      name: 'mission',
      title: 'Mission Statement',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'vision',
      title: 'Vision Statement',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'values',
      title: 'Company Values',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Value Title',
              type: 'string',
            },
            {
              name: 'description',
              title: 'Value Description',
              type: 'text',
              rows: 3,
            },
            {
              name: 'icon',
              title: 'Icon',
              type: 'string',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'stats',
      title: 'Company Statistics',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'number',
              title: 'Number',
              type: 'string',
            },
            {
              name: 'label',
              title: 'Label',
              type: 'string',
            },
            {
              name: 'description',
              title: 'Description',
              type: 'string',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seoMetadata',
      description: 'Search engine optimization settings for the about page',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'About Page',
      }
    },
  },
})

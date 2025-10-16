import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'howWeWorkItem',
  title: 'How We Work Items',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Main title (e.g., "Basketball Court Design and Planning")',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
      description: 'Descriptive text that appears below the title',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Background Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Background image for the left side',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'accordionItems',
      title: 'Accordion Items',
      type: 'array',
      description: 'Expandable items that appear on the right side',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Item Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'content',
              title: 'Expanded Content',
              type: 'text',
              rows: 3,
              description: 'Content that shows when the accordion is expanded',
              validation: (Rule) => Rule.required(),
            },
          ],
          preview: {
            select: {
              title: 'title',
              content: 'content',
            },
            prepare({ title, content }) {
              return {
                title: title,
                subtitle: content?.substring(0, 50) + '...',
              }
            },
          },
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order in which this item should appear',
      validation: (Rule) => Rule.required(),
    }),
  ],
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
      description: 'description',
      order: 'order',
    },
    prepare(selection) {
      const { title, media, description, order } = selection
      return {
        title: `${order}. ${title}`,
        subtitle: description,
        media,
      }
    },
  },
})

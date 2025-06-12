import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'testimonial',
  title: 'Testimonials',
  type: 'document',
  fields: [
    defineField({
      name: 'quote',
      title: 'Quote',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'author',
      title: 'Author Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Author Title',
      type: 'string',
    }),
    defineField({
      name: 'company',
      title: 'Company',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Author Photo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'featured',
      title: 'Featured Testimonial',
      type: 'boolean',
      description: 'Show this testimonial on the homepage',
      initialValue: false,
    }),
    defineField({
      name: 'service',
      title: 'Related Service',
      type: 'reference',
      to: { type: 'service' },
    }),
    defineField({
      name: 'project',
      title: 'Related Project',
      type: 'reference',
      to: { type: 'project' },
    }),
    defineField({
      name: 'rating',
      title: 'Rating',
      type: 'number',
      validation: (Rule) => Rule.min(1).max(5),
      description: 'Rating out of 5 stars',
    }),
  ],
  preview: {
    select: {
      title: 'author',
      subtitle: 'company',
      media: 'image',
      quote: 'quote',
    },
    prepare(selection) {
      const { title, subtitle, media, quote } = selection
      return {
        title,
        subtitle: subtitle || quote?.substring(0, 50) + '...',
        media,
      }
    },
  },
})

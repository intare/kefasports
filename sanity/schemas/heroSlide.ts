import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'heroSlide',
  title: 'Hero Slides',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Slide Title (Internal)',
      type: 'string',
      description: 'For internal reference only',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'headline',
      title: 'Headline',
      type: 'string',
      description: 'Main headline text shown on the slide',
      validation: (Rule) => Rule.required().max(100),
    }),
    defineField({
      name: 'subheadline',
      title: 'Subheadline',
      type: 'text',
      rows: 3,
      description: 'Supporting text below the headline',
      validation: (Rule) => Rule.required().max(250),
    }),
    defineField({
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'primaryCTA',
      title: 'Primary Call-to-Action',
      type: 'object',
      fields: [
        {
          name: 'text',
          title: 'Button Text',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'href',
          title: 'Link URL',
          type: 'string',
          description: 'Can be internal (/contact) or external (https://...)',
          validation: (Rule) => Rule.required(),
        },
      ],
    }),
    defineField({
      name: 'secondaryCTA',
      title: 'Secondary Call-to-Action',
      type: 'object',
      fields: [
        {
          name: 'text',
          title: 'Button Text',
          type: 'string',
        },
        {
          name: 'href',
          title: 'Link URL',
          type: 'string',
          description: 'Can be internal (/projects) or external (https://...)',
        },
      ],
    }),
    defineField({
      name: 'trustSignal',
      title: 'Trust Signal',
      type: 'string',
      description: 'Optional trust indicator (e.g., "Trusted by 200+ organizations")',
    }),
    defineField({
      name: 'active',
      title: 'Active',
      type: 'boolean',
      description: 'Only active slides will be shown on the website',
      initialValue: true,
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order in which this slide should appear (lower numbers first)',
      validation: (Rule) => Rule.required().min(0),
      initialValue: 0,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      headline: 'headline',
      media: 'backgroundImage',
      order: 'order',
      active: 'active',
    },
    prepare(selection) {
      const { title, headline, media, order, active } = selection
      return {
        title: title || headline,
        subtitle: `Order: ${order} ${active ? '✓ Active' : '✗ Inactive'}`,
        media,
      }
    },
  },
})

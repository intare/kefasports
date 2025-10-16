import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'servicesHero',
  title: 'Services Hero Section',
  type: 'document',
  fields: [
    defineField({
      name: 'label',
      title: 'Small Label (e.g., CONSTRUCTION)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'mainHeading',
      title: 'Main Heading (Blue Part)',
      type: 'string',
      description: 'e.g., "Basketball Court Construction"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subHeading',
      title: 'Sub Heading (Black Part)',
      type: 'string',
      description: 'e.g., "in Florida"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description Text',
      type: 'text',
      rows: 5,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'ctaText',
      title: 'CTA Button Text',
      type: 'string',
      initialValue: 'REQUEST A QUOTE',
    }),
    defineField({
      name: 'ctaLink',
      title: 'CTA Button Link',
      type: 'string',
      initialValue: '/contact',
    }),
  ],
  preview: {
    select: {
      title: 'mainHeading',
      subtitle: 'subHeading',
      media: 'heroImage',
    },
  },
})

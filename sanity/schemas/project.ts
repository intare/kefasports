import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'project',
  title: 'Projects',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Project Title',
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
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: { type: 'projectCategory' },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'featured',
      title: 'Featured Project',
      type: 'boolean',
      description: 'Show this project on the homepage',
      initialValue: false,
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
      name: 'images',
      title: 'Project Gallery',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    }),
    defineField({
      name: 'client',
      title: 'Client',
      type: 'string',
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
    }),
    defineField({
      name: 'year',
      title: 'Year Completed',
      type: 'number',
      validation: (Rule) => Rule.min(1990).max(new Date().getFullYear() + 5),
    }),
    defineField({
      name: 'description',
      title: 'Project Description',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'challenge',
      title: 'Challenge',
      type: 'text',
      rows: 3,
      description: 'What challenges did this project present?',
    }),
    defineField({
      name: 'solution',
      title: 'Solution',
      type: 'text',
      rows: 3,
      description: 'How did you solve the challenges?',
    }),
    defineField({
      name: 'results',
      title: 'Results',
      type: 'text',
      rows: 3,
      description: 'What were the outcomes and results?',
    }),
    defineField({
      name: 'testimonial',
      title: 'Client Testimonial',
      type: 'reference',
      to: { type: 'testimonial' },
    }),
    defineField({
      name: 'services',
      title: 'Services Provided',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: { type: 'service' },
        },
      ],
    }),
    defineField({
      name: 'projectDetails',
      title: 'Project Details',
      type: 'object',
      fields: [
        {
          name: 'duration',
          title: 'Project Duration',
          type: 'string',
        },
        {
          name: 'budget',
          title: 'Budget Range',
          type: 'string',
        },
        {
          name: 'teamSize',
          title: 'Team Size',
          type: 'number',
        },
        {
          name: 'area',
          title: 'Area (sq ft/m)',
          type: 'string',
        },
      ],
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seoMetadata',
      description: 'Search engine optimization settings for this project page',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
      category: 'category.name',
      year: 'year',
    },
    prepare(selection) {
      const { title, media, category, year } = selection
      return {
        title,
        subtitle: `${category} ${year ? `• ${year}` : ''}`,
        media,
      }
    },
  },
})

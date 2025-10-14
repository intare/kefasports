import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'teamMember',
  title: 'Team Members',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Full Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Job Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'bio',
      title: 'Biography',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'image',
      title: 'Profile Photo',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule) => Rule.email(),
    }),
    defineField({
      name: 'phone',
      title: 'Phone',
      type: 'string',
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Links',
      type: 'object',
      fields: [
        {
          name: 'linkedin',
          title: 'LinkedIn',
          type: 'url',
        },
        {
          name: 'twitter',
          title: 'Twitter',
          type: 'url',
        },
        {
          name: 'facebook',
          title: 'Facebook',
          type: 'url',
        },
      ],
    }),
    defineField({
      name: 'specialties',
      title: 'Specialties',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Areas of expertise',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order in which this team member should appear',
    }),
    defineField({
      name: 'accentColor',
      title: 'Accent Color',
      type: 'string',
      description: 'Hex color code for this team member (e.g., #e74c3c)',
      validation: (Rule) => Rule.regex(/^#[0-9A-Fa-f]{6}$/, {
        name: 'hex color',
        invert: false,
      }),
      initialValue: '#e74c3c',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'title',
      media: 'image',
    },
  },
})

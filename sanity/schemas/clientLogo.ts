import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'clientLogo',
  title: 'Client Logos',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Client Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'website',
      title: 'Website URL',
      type: 'url',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 2,
      description: 'Brief description of the client or project',
    }),
    defineField({
      name: 'featured',
      title: 'Featured Client',
      type: 'boolean',
      description: 'Show this client prominently',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'logo',
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

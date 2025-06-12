import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'whyChooseUsItem',
  title: 'Why Choose Us Items',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'string',
      description: 'Icon name or class for this item',
    }),
    defineField({
      name: 'proofPoint',
      title: 'Proof Point',
      type: 'string',
      description: 'Supporting statistic or proof point (e.g., "500+ Projects")',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order in which this item should appear',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
      proofPoint: 'proofPoint',
    },
    prepare(selection) {
      const { title, subtitle, proofPoint } = selection
      return {
        title,
        subtitle: proofPoint ? `${proofPoint} • ${subtitle}` : subtitle,
      }
    },
  },
})

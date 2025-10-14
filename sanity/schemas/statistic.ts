import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'statistic',
  title: 'Statistics',
  type: 'document',
  description: 'Homepage statistics/achievements section (e.g., "200+ Projects Completed")',
  fields: [
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
      description: 'The text describing the statistic (e.g., "Projects Completed")',
      validation: (Rule) => Rule.required().max(50),
    }),
    defineField({
      name: 'number',
      title: 'Number Value',
      type: 'number',
      description: 'The numeric value to display',
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: 'suffix',
      title: 'Suffix',
      type: 'string',
      description: 'Symbol after the number (e.g., "+", "%", "K", "M")',
      initialValue: '+',
    }),
    defineField({
      name: 'prefix',
      title: 'Prefix',
      type: 'string',
      description: 'Symbol before the number (e.g., "$", "€", "#")',
    }),
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'string',
      description: 'Optional icon name or emoji to display with the stat',
    }),
    defineField({
      name: 'color',
      title: 'Accent Color',
      type: 'string',
      description: 'Optional custom color for this statistic (hex code)',
      validation: (Rule) => Rule.regex(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/).warning('Please use a valid hex color (e.g., #FF5733)'),
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order in which this statistic should appear',
      validation: (Rule) => Rule.required().min(0),
      initialValue: 0,
    }),
    defineField({
      name: 'active',
      title: 'Active',
      type: 'boolean',
      description: 'Show/hide this statistic on the website',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      label: 'label',
      number: 'number',
      suffix: 'suffix',
      prefix: 'prefix',
      order: 'order',
      active: 'active',
    },
    prepare(selection) {
      const { label, number, suffix, prefix, order, active } = selection
      const displayValue = `${prefix || ''}${number}${suffix || ''}`
      return {
        title: label,
        subtitle: `${displayValue} • Order: ${order} ${active ? '✓' : '✗'}`,
      }
    },
  },
})

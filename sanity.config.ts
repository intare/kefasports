import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './sanity/schemas'

export default defineConfig({
  name: 'default',
  title: 'KefaSports CMS',

  projectId: 'ri3g78rr',
  dataset: 'production',
  basePath: '/studio',
  
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            // Site Settings (singleton)
            S.listItem()
              .title('Site Settings')
              .id('siteSettings')
              .child(
                S.document()
                  .schemaType('siteSettings')
                  .documentId('siteSettings')
              ),
            
            // About Page (singleton)
            S.listItem()
              .title('About Page')
              .id('about')
              .child(
                S.document()
                  .schemaType('about')
                  .documentId('about')
              ),
            
            S.divider(),
            
            // Main content types
            S.listItem()
              .title('Projects')
              .child(
                S.documentTypeList('project')
                  .title('Projects')
              ),
            
            S.listItem()
              .title('Project Categories')
              .child(
                S.documentTypeList('projectCategory')
                  .title('Project Categories')
              ),
            
            S.listItem()
              .title('Services')
              .child(
                S.documentTypeList('service')
                  .title('Services')
              ),
            
            S.listItem()
              .title('Testimonials')
              .child(
                S.documentTypeList('testimonial')
                  .title('Testimonials')
              ),
            
            S.listItem()
              .title('Team Members')
              .child(
                S.documentTypeList('teamMember')
                  .title('Team Members')
              ),
            
            S.divider(),

            // Homepage content
            S.listItem()
              .title('Hero Slides')
              .child(
                S.documentTypeList('heroSlide')
                  .title('Hero Slides')
              ),

            S.listItem()
              .title('Statistics')
              .child(
                S.documentTypeList('statistic')
                  .title('Statistics')
              ),

            S.listItem()
              .title('How We Work')
              .child(
                S.documentTypeList('howWeWorkItem')
                  .title('How We Work Items')
              ),

            S.listItem()
              .title('Services Hero')
              .child(
                S.document()
                  .schemaType('servicesHero')
                  .documentId('servicesHero')
              ),

            S.divider(),

            // Supporting content
            S.listItem()
              .title('Client Logos')
              .child(
                S.documentTypeList('clientLogo')
                  .title('Client Logos')
              ),

            S.listItem()
              .title('Why Choose Us')
              .child(
                S.documentTypeList('whyChooseUsItem')
                  .title('Why Choose Us Items')
              ),
          ])
    }),
    visionTool(),
  ],
  
  schema: {
    types: schemaTypes,
  },
})

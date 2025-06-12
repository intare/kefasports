import project from './project'
import projectCategory from './projectCategory'
import service from './service'
import testimonial from './testimonial'
import teamMember from './teamMember'
import clientLogo from './clientLogo'
import whyChooseUsItem from './whyChooseUsItem'
import siteSettings from './siteSettings'
import about from './about'

export const schemaTypes = [
  // Main content types
  project,
  projectCategory,
  service,
  testimonial,
  teamMember,
  
  // Supporting content types
  clientLogo,
  whyChooseUsItem,
  
  // Site configuration
  siteSettings,
  about,
]

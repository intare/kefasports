import project from './project'
import projectCategory from './projectCategory'
import service from './service'
import testimonial from './testimonial'
import teamMember from './teamMember'
import clientLogo from './clientLogo'
import whyChooseUsItem from './whyChooseUsItem'
import siteSettings from './siteSettings'
import about from './about'
import heroSlide from './heroSlide'
import statistic from './statistic'
import seoMetadata from './seoMetadata'

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
  heroSlide,
  statistic,

  // Site configuration
  siteSettings,
  about,

  // Object types (reusable)
  seoMetadata,
]

# How We Work Section - Content Guide

## Overview
The "How We Work" section has been successfully added to your homepage. It displays after the Services section and features an accordion-style layout with background images.

## Adding Content in Sanity CMS

### Step 1: Access Sanity Studio
1. Navigate to your Sanity Studio (typically at `http://localhost:3333` or your deployed studio URL)
2. Log in with your credentials

### Step 2: Create a New "How We Work" Item
1. In the Sanity Studio sidebar, look for **"How We Work Items"**
2. Click the **"+ Create"** button
3. Fill in the following fields:

#### Required Fields:

**Title** (String)
- Example: "Basketball Court Design and Planning"
- This appears as the main heading on the left side

**Description** (Text)
- Example: "Kefa Sports takes a meticulous approach to tennis court design and planning, ensuring that every element contributes to an optimal playing experience, especially in tennis court installation Florida..."
- This appears below the title on the left side

**Background Image** (Image)
- Upload an image that represents the service/process
- This image will be displayed on the left side with a blue overlay
- Recommended size: 1200x800px or larger

**Accordion Items** (Array)
- Click **"+ Add item"** to add expandable sections
- For each accordion item, provide:
  - **Item Title**: The clickable heading (e.g., "Customized Court Design")
  - **Expanded Content**: The text that appears when the user clicks (detailed description)

**Display Order** (Number)
- Enter a number to control the order of items (1, 2, 3, etc.)
- Lower numbers appear first

### Step 3: Save and Publish
1. Click **"Publish"** in the bottom right corner
2. The content will automatically appear on your homepage

## Example Content Structure

```
Title: Basketball Court Design and Planning

Description: Kefa Sports takes a meticulous approach to basketball court design and planning, ensuring that every element contributes to an optimal playing experience.

Accordion Items:
1. Customized Court Design
   - We work closely with you to understand your specific needs...

2. Surface Options and Selection
   - Our team helps you choose the best surface material...

3. Court Size and Dimensions
   - We ensure all courts meet official regulations...

4. Hoop Placement and Backboard Options
   - Professional-grade equipment placement for optimal gameplay...

Display Order: 1
```

## Design Features

### Layout
- **Mobile**: Image on top, text below, accordion items in a white card
- **Desktop**: Split layout - image/text on left (50%), accordion on right (50%)

### Colors
- Background image has a blue gradient overlay (from blue-900 to blue-700)
- Text on image is white
- Accordion buttons are orange (#ed6631)
- Section background is light gray (#f9fafb)

### Interactions
- Clicking accordion items expands/collapses content
- Orange circular buttons rotate 45° when expanded
- Smooth transitions and animations

## Tips for Best Results

1. **Images**: Use high-quality images that showcase the actual work or facilities
2. **Titles**: Keep titles concise and descriptive (3-8 words)
3. **Descriptions**: 2-4 sentences explaining the approach or process
4. **Accordion Items**: 3-5 items per section works best
5. **Content Length**: Keep accordion content to 2-3 sentences for readability

## Multiple Sections

You can create multiple "How We Work" items to showcase different services:
- Basketball Court Design
- Swimming Pool Construction
- Soccer Field Installation
- Playground Development

Each will appear as a separate card on the homepage, stacked vertically.

## Technical Details

### Schema Location
- File: `/sanity/schemas/howWeWorkItem.ts`

### Component Location
- File: `/src/components/ui/HowWeWorkSection.tsx`

### Homepage Integration
- File: `/src/app/page.tsx` (appears after Services section, before Statistics)

### Query Location
- File: `/src/lib/queries.ts` (added to `homePageQuery`)

## Need Help?

If you need to modify the design or functionality, the main component file is:
`/src/components/ui/HowWeWorkSection.tsx`

The section uses:
- Tailwind CSS for styling
- Next.js Image for optimized images
- React state management for accordion functionality

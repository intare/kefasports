# Sanity CMS Services Management Guide

This guide explains how to manage your service content (images, titles, descriptions, and icons) through the Sanity CMS.

## Accessing Sanity Studio

1. **Start your development server** (if not already running):
   ```bash
   npm run dev
   ```

2. **Open Sanity Studio** in your browser:
   - URL: `http://localhost:54112/studio`
   - Or: `http://localhost:3000/studio` (depending on your port)

3. **Log in** with your Sanity account credentials

## Managing Services

### Finding Services Section

1. In the Sanity Studio sidebar, click on **"Services"**
2. You'll see a list of all your services

### Creating a New Service

1. Click the **"+ Create"** button (or **"New Service"**)
2. Fill in the following fields:

#### Required Fields:

- **Service Title**: The name of the service (e.g., "TENNIS COURTS", "BASKETBALL COURTS")
  - Use UPPERCASE for consistency with the design

- **Slug**: Auto-generated from the title
  - Click "Generate" to create from title
  - This creates the URL: `/services/tennis-courts`

- **Short Description**: Brief description (2-3 sentences)
  - Example: "Professional tennis court construction with premium surfaces and precision installation."

- **Main Image**: The court/facility photo that appears on the service card
  - Click "Upload" to add an image
  - Recommended size: 800x600px or larger
  - Supports: JPG, PNG, WebP

#### Optional Fields:

- **Icon**: Icon name for the service
  - Available icons: `tennis`, `pickleball`, `basketball`, `bocce`, `equipment`, `construction`, `kefasports`, `installation`
  - If left empty, defaults to `tennis`

- **Full Content**: Rich text editor for detailed service information
  - Add paragraphs, headings, images
  - Used on individual service detail pages

- **Benefits**: List of service benefits
  - Click "Add item" to add multiple benefits
  - Each benefit has a title and description

- **Process Steps**: Construction process steps
  - Add numbered steps showing your workflow
  - Each step has: number, title, and description

- **Display Order**: Number determining display order
  - Lower numbers appear first
  - Example: 1, 2, 3, 4...

- **SEO**: Search engine optimization settings
  - Meta title, description, keywords
  - Open Graph image for social sharing

### Editing Existing Services

1. Click on any service from the list
2. Update the fields you want to change
3. The most important fields for the homepage/services page display:
   - **Service Title** (appears on cards)
   - **Main Image** (the court photo)
   - **Icon** (the orange badge icon)
   - **Short Description** (brief text under title)
   - **Display Order** (controls position)

### Changing Service Images

1. Open the service you want to edit
2. Find the **"Main Image"** field
3. Click on the current image
4. Options:
   - **Replace**: Upload a new image
   - **Edit**: Adjust hotspot/crop
   - **Remove**: Delete the image

5. Click **"Publish"** to save changes

### Updating Service Icons

The icon determines which sport icon appears in the orange badge on each card:

- `tennis` → Tennis ball with lines
- `pickleball` → Ball with holes
- `basketball` → Basketball with lines
- `bocce` → Bocce ball
- `equipment` → Equipment/gear icon
- `construction` → Building/construction icon
- `kefasports` → "K" logo
- `installation` → Tools icon

**To change an icon:**
1. Edit the service
2. Find the **"Icon"** field
3. Type one of the icon names above
4. Click **"Publish"**

### Reordering Services

Services appear in the order specified by the **"Display Order"** field:

1. Edit each service
2. Set the **"Display Order"** number
   - Service with order "1" appears first
   - Service with order "2" appears second, etc.
3. **Publish** each service after updating

## Current Services Setup

Your website currently displays these 8 services (in order):

1. **TENNIS COURTS** - Icon: `tennis`
2. **PICKLEBALL COURTS** - Icon: `pickleball`
3. **BASKETBALL COURTS** - Icon: `basketball`
4. **BOCCE COURTS** - Icon: `bocce`
5. **SPORTS EQUIPMENT & GEAR** - Icon: `equipment`
6. **CONSTRUCTION & DESIGN** - Icon: `construction`
7. **KEFASPORTS** - Icon: `kefasports`
8. **INSTALLATION & MAINTENANCE** - Icon: `installation`

## Where Services Appear

Your services content appears in two locations:

1. **Home Page** - "Our Services" section
   - Shows all services in 4-column grid (2 rows)
   - Displays: Image, Icon, Title, "SEE OUR WORK" button

2. **Services Page** (`/services`)
   - Shows all services in 4-column grid
   - Same display as home page
   - Plus full services details below

## Publishing Changes

**Important**: Changes are NOT live until you publish!

1. After editing any service, click the **"Publish"** button (green button at bottom)
2. Your changes will appear on the website within a few seconds
3. Refresh your browser to see the updates

## Fallback Behavior

If no services are found in Sanity CMS, the website will display fallback services with default images from the `/gallery/centralafrica/` folder. To ensure your custom content shows:

1. Create at least one service in Sanity
2. Add a "Main Image" to each service
3. Publish each service

## Tips for Best Results

### Images:
- Use high-quality photos (minimum 800x600px)
- Landscape orientation works best
- Show actual courts/facilities
- Ensure good lighting and clarity

### Titles:
- Use UPPERCASE for consistency
- Keep them short and clear
- Example: "TENNIS COURTS" not "Professional Tennis Court Construction Services"

### Descriptions:
- 1-2 sentences maximum
- Focus on key benefits
- Use action words

### Icons:
- Match the icon to the service type
- Use consistent naming (all lowercase)
- Test that the icon displays correctly

## Need Help?

If you encounter issues:

1. Check that you clicked **"Publish"** after making changes
2. Refresh your browser (Ctrl+F5 or Cmd+Shift+R)
3. Verify the image uploaded successfully
4. Check that the icon name is spelled correctly
5. Ensure "Display Order" numbers are set

## Technical Details

- **Schema Location**: `sanity/schemas/service.ts`
- **Queries**: `src/lib/queries.ts`
- **Home Page**: `src/app/page.tsx`
- **Services Page**: `src/app/services/page.tsx`
- **Service Card Component**: `src/components/ui/ServiceCard.tsx`

---

**Questions?** Contact your development team for assistance with the Sanity CMS setup.

# KefaSports CMS Setup Guide

## Accessing the CMS

You now have two ways to access the Sanity CMS:

### Option 1: Custom Login Page (Recommended for Users)
- Navigate to: **`/cms`**
- This presents a branded login interface
- Click "Sign in to CMS" or "Sanity Studio Login" button
- You'll be redirected to the Sanity Studio with authentication

### Option 2: Direct Studio Access (For Developers)
- Navigate to: **`/studio`**
- This takes you directly to the Sanity Studio interface
- Sanity will prompt you to authenticate with your Sanity account

## CMS Routes

| Route | Description |
|-------|-------------|
| `/cms` | Custom branded login page |
| `/studio` | Direct access to Sanity Studio |
| `/api/check-auth` | Authentication check endpoint |

## Authentication

The CMS uses **Sanity's built-in authentication system**, which means:

1. **No separate login credentials needed** - Uses your Sanity account
2. **Secure by default** - Managed by Sanity's infrastructure
3. **Project-based access** - Only users with access to project `ri3g78rr` can log in
4. **SSO supported** - Google, GitHub, and email authentication available

## Managing CMS Users

To add or remove CMS users:

1. Go to [Sanity Management Console](https://www.sanity.io/manage)
2. Select your project: **KefaSports CMS** (Project ID: `ri3g78rr`)
3. Navigate to **Team** or **Members**
4. Add users by email or remove existing users
5. Assign appropriate roles:
   - **Administrator** - Full access to all content and settings
   - **Editor** - Can create, edit, and publish content
   - **Viewer** - Read-only access

## Content Structure

The CMS manages the following content types:

### Singleton Pages
- **Site Settings** - Global site configuration
- **About Page** - About page content

### Content Collections
- **Projects** - Portfolio projects with images and details
- **Project Categories** - Categorization for projects
- **Services** - Services offered by KefaSports
- **Testimonials** - Client testimonials
- **Team Members** - Team and leadership information

### Homepage Elements
- **Hero Slides** - Homepage hero carousel slides
- **Statistics** - Homepage statistics display
- **Client Logos** - Trusted client logos
- **Why Choose Us** - Feature highlights

## Development URLs

### Local Development
```bash
npm run dev
```
- Website: `http://localhost:3000`
- CMS Login: `http://localhost:3000/cms`
- Sanity Studio: `http://localhost:3000/studio`

### Production
- Website: Your production domain
- CMS Login: `https://yourdomain.com/cms`
- Sanity Studio: `https://yourdomain.com/studio`

## Sanity Studio Features

Once logged in, you can:

- **Create/Edit Content** - All content types are editable
- **Upload Media** - Drag and drop images and files
- **Preview Changes** - See changes before publishing
- **Version History** - Track content changes over time
- **GROQ Queries** - Use Vision tool to test queries
- **Real-time Collaboration** - Multiple editors can work simultaneously

## Security Best Practices

1. **Limit Access** - Only add users who need CMS access
2. **Use Strong Passwords** - For Sanity account authentication
3. **Regular Audits** - Review user access periodically
4. **Two-Factor Authentication** - Enable 2FA on Sanity accounts
5. **Monitor Activity** - Check audit logs in Sanity dashboard

## Troubleshooting

### Cannot Access CMS
- Ensure you're added to the Sanity project
- Check that you're logged into your Sanity account
- Clear browser cache and cookies
- Try incognito/private browsing mode

### Changes Not Appearing
- Content is fetched dynamically on every request
- Refresh the webpage to see updates
- Check that content is published (not in draft mode)

### Permission Errors
- Contact project administrator to verify your role
- Ensure you have Editor or Administrator permissions
- Check project access in Sanity Management Console

## Support

For technical support:
- **Sanity Documentation**: https://www.sanity.io/docs
- **Sanity Community**: https://www.sanity.io/community
- **Project Issues**: Contact your development team

## Configuration Files

Key files for CMS configuration:

- `sanity.config.ts` - Main Sanity configuration
- `src/lib/sanity.ts` - Sanity client setup
- `src/lib/queries.ts` - Content queries
- `sanity/schemas/` - Content type definitions
- `src/app/cms/page.tsx` - Custom login page
- `src/app/studio/[[...tool]]/page.tsx` - Studio integration

---

**Last Updated**: January 2025
**CMS Version**: Sanity Studio v4.10.2
**Project ID**: ri3g78rr
**Dataset**: production

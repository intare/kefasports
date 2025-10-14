# How to Add CMS Users to KefaSports

## Quick Start: Adding Users via Sanity.io

### Step 1: Access Sanity Management Console

The management console should now be open in your browser at:
**https://www.sanity.io/manage/project/ri3g78rr**

If not, you can access it by:
1. Going to https://www.sanity.io/manage
2. Or running: `npx sanity manage`

### Step 2: Navigate to Team/Members

1. In the Sanity Management Console, look for the **"Members"** or **"Team"** tab in the left sidebar
2. Click on it to see the current project members

### Step 3: Add Admin Account

1. Click the **"Invite member"** or **"Add member"** button
2. Enter the admin's email address (e.g., `admin@kefasports.com`)
3. Select the role: **"Administrator"**
4. Click **"Send invite"** or **"Add"**
5. The admin will receive an email invitation

**Administrator Role Permissions:**
- Full access to all content
- Can create, edit, delete, and publish
- Can manage project settings
- Can add/remove other users
- Can configure schemas and plugins

### Step 4: Add User Account

1. Click **"Invite member"** or **"Add member"** again
2. Enter the user's email address (e.g., `user@kefasports.com`)
3. Select the role: **"Editor"**
4. Click **"Send invite"** or **"Add"**
5. The user will receive an email invitation

**Editor Role Permissions:**
- Can create, edit, and publish content
- Can upload media files
- Cannot manage project settings
- Cannot add/remove users
- Cannot modify schemas

---

## Alternative Method: Using Sanity CLI

If you prefer using the command line:

### Check Current Members
```bash
npx sanity users list
```

### Invite New Member
```bash
npx sanity users invite admin@kefasports.com --role administrator
npx sanity users invite user@kefasports.com --role editor
```

---

## Available Sanity Roles

### 1. Administrator
- **Full access** to everything
- Can manage team members
- Can configure project settings
- Can deploy studio
- **Recommended for**: Site owners, lead developers

### 2. Editor
- Can **create, edit, and publish** all content
- Can **upload and manage** media
- Cannot manage users or project settings
- **Recommended for**: Content managers, marketing team

### 3. Viewer (Custom Role)
- **Read-only access** to all content
- Cannot edit or publish
- Cannot upload media
- **Recommended for**: Stakeholders, reviewers

---

## Custom Role Configuration (Advanced)

If you need more granular permissions, you can create custom roles:

### Create a Custom Role File

Create: `sanity/roles/customRole.ts`

```typescript
import { defineRole } from '@sanity/access'

export const contentEditorRole = defineRole({
  name: 'contentEditor',
  title: 'Content Editor',
  description: 'Can edit specific content types only',
  permissions: {
    // Define custom permissions here
    read: true,
    create: ['project', 'testimonial', 'service'],
    update: ['project', 'testimonial', 'service'],
    publish: ['project', 'testimonial', 'service'],
    delete: false,
  },
})
```

### Update Sanity Config

Update `sanity.config.ts`:

```typescript
import { defineConfig } from 'sanity'
import { contentEditorRole } from './sanity/roles/customRole'

export default defineConfig({
  // ... existing config

  // Add custom roles
  roles: [contentEditorRole],
})
```

---

## User Invitation Process

### What Happens When You Invite a User:

1. **Invitation Email Sent**
   - User receives email from Sanity
   - Contains a secure invitation link
   - Link expires in 7 days

2. **User Accepts Invitation**
   - Clicks link in email
   - Creates Sanity account (if new) or logs in
   - Accepts project invitation

3. **User Gets Access**
   - Can immediately access CMS at `/cms` or `/studio`
   - Sees only content they have permission to edit
   - Cannot see administrative functions (if Editor)

---

## Managing Existing Users

### Change User Role
1. Go to Sanity Management Console
2. Navigate to Members
3. Click on the user
4. Change their role from dropdown
5. Save changes

### Remove User Access
1. Go to Sanity Management Console
2. Navigate to Members
3. Click on the user
4. Click "Remove from project"
5. Confirm removal

### Resend Invitation
1. Go to Sanity Management Console
2. Navigate to Members
3. Find pending invitation
4. Click "Resend invitation"

---

## Testing User Access

### Test Admin Account
1. Log out of current Sanity account
2. Go to http://localhost:3000/cms
3. Click "Sanity Studio Login"
4. Log in with admin credentials
5. Verify full access to all features

### Test User Account
1. Log out of admin account
2. Go to http://localhost:3000/cms
3. Click "Sanity Studio Login"
4. Log in with user credentials
5. Verify Editor-level access (no settings/admin features)

---

## Recommended User Setup for KefaSports

### Admin Account
- **Email**: admin@kefasports.com (or owner's email)
- **Role**: Administrator
- **Purpose**: Full project management
- **Who**: Site owner, lead developer

### Content Manager Account
- **Email**: content@kefasports.com
- **Role**: Editor
- **Purpose**: Day-to-day content updates
- **Who**: Marketing team, content writers

### Optional: Developer Account
- **Email**: dev@kefasports.com
- **Role**: Administrator
- **Purpose**: Technical changes, schema updates
- **Who**: Development team

---

## Security Best Practices

### For All Users:
1. ✓ **Use strong passwords** (12+ characters, mixed case, numbers, symbols)
2. ✓ **Enable 2FA** (Two-Factor Authentication) on Sanity accounts
3. ✓ **Use work email addresses** (not personal emails)
4. ✓ **Don't share credentials** (each person should have their own account)
5. ✓ **Regular access reviews** (quarterly review of who has access)

### For Administrators:
1. ✓ **Limit admin accounts** (only essential personnel)
2. ✓ **Monitor activity logs** (check audit logs regularly)
3. ✓ **Remove inactive users** (offboarded employees)
4. ✓ **Use role-based access** (don't give everyone admin)
5. ✓ **Document access policies** (who can access what)

---

## Troubleshooting

### User Didn't Receive Invitation Email
- Check spam/junk folder
- Verify email address is correct
- Resend invitation from Sanity console
- Check if email provider blocks Sanity emails

### User Can't Log In
- Verify they accepted invitation
- Check they're using correct email
- Try password reset
- Verify they're not blocked from project

### User Has Wrong Permissions
- Check their assigned role in Members section
- Role changes take effect immediately
- Have user log out and back in
- Verify custom role configuration (if using)

### "Access Denied" Error
- User may not be added to project
- Check project ID is correct (ri3g78rr)
- Verify invitation was accepted
- Check dataset access permissions

---

## Quick Commands Reference

```bash
# Open project management
npx sanity manage

# List all members
npx sanity users list

# Invite administrator
npx sanity users invite admin@example.com --role administrator

# Invite editor
npx sanity users invite user@example.com --role editor

# Check current user
npx sanity whoami

# Login to Sanity CLI
npx sanity login
```

---

## Support Resources

- **Sanity Documentation**: https://www.sanity.io/docs/access-control
- **Sanity Community**: https://www.sanity.io/community
- **Project Management**: https://www.sanity.io/manage/project/ri3g78rr
- **Sanity Support**: support@sanity.io

---

**Project Details:**
- **Project ID**: ri3g78rr
- **Project Name**: KefaSports CMS
- **Dataset**: production
- **CMS URLs**:
  - Login: http://localhost:3000/cms (dev) or https://yourdomain.com/cms (prod)
  - Studio: http://localhost:3000/studio (dev) or https://yourdomain.com/studio (prod)

**Last Updated**: January 2025

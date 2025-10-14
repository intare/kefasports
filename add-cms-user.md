# Quick Guide: Add CMS Users

## Current Members
You currently have 2 administrators:
- Richard kaitare (administrator)
- Richard Kaitare (administrator)

---

## Method 1: Using Sanity CLI (Recommended)

### Add Admin Account
```bash
npx sanity users invite admin@kefasports.com --role administrator
```

### Add Editor/User Account
```bash
npx sanity users invite editor@kefasports.com --role editor
```

### Interactive Mode (Will Prompt for Details)
```bash
npx sanity users invite
```

---

## Method 2: Using Sanity.io Web Interface

### Step-by-Step:

1. **Open Management Console** (already opened for you)
   - URL: https://www.sanity.io/manage/project/ri3g78rr
   - Or run: `npx sanity manage`

2. **Click "Members" or "Team"** in the left sidebar

3. **Click "Invite member"** button

4. **For Admin Account:**
   - Email: `admin@kefasports.com` (or your admin email)
   - Role: Select **"Administrator"**
   - Click "Send invite"

5. **For User/Editor Account:**
   - Email: `user@kefasports.com` (or your user email)
   - Role: Select **"Editor"**
   - Click "Send invite"

6. **User Receives Email**
   - They'll get an invitation email from Sanity
   - They click the link to accept
   - They create/login to their Sanity account
   - They immediately get access to the CMS

---

## What Happens Next?

### After Invitation is Sent:
1. User receives email from `noreply@sanity.io`
2. Email subject: "You've been invited to join [Project Name]"
3. User clicks "Accept invitation" link
4. User creates Sanity account or logs in with existing account
5. User can immediately access CMS at:
   - http://localhost:3000/cms (local)
   - http://localhost:3000/studio (local)

---

## Quick Commands

```bash
# View current members
npx sanity users list

# Invite administrator
npx sanity users invite admin@kefasports.com --role administrator

# Invite editor
npx sanity users invite editor@kefasports.com --role editor

# Open web management (to manage users via browser)
npx sanity manage

# Check who you're logged in as
npx sanity whoami
```

---

## Available Roles

### Administrator
- ✓ Full access to all content
- ✓ Can edit, create, delete, publish
- ✓ Can manage users (add/remove)
- ✓ Can change project settings
- ✓ Can deploy studio
- **Use for**: Site owners, senior managers

### Editor
- ✓ Can edit, create, publish content
- ✓ Can upload images and files
- ✗ Cannot manage users
- ✗ Cannot change project settings
- ✗ Cannot deploy studio
- **Use for**: Content managers, marketing team

---

## Example: Adding Both Accounts Now

### Option A: Command Line
```bash
# Add admin account
npx sanity users invite admin@kefasports.com --role administrator

# Add user/editor account
npx sanity users invite contentmanager@kefasports.com --role editor
```

### Option B: Web Interface
1. Go to: https://www.sanity.io/manage/project/ri3g78rr
2. Click "Members" → "Invite member"
3. Add both accounts with appropriate roles

---

## Testing Access

### Test as Admin:
1. Open http://localhost:3000/cms
2. Click "Sanity Studio Login"
3. Login with admin email
4. Verify you can:
   - See all content types
   - See "Settings" menu
   - See "Manage" options

### Test as Editor:
1. Logout from admin
2. Open http://localhost:3000/cms
3. Login with editor email
4. Verify you can:
   - Edit content
   - Upload images
   - But NO access to Settings/Manage

---

## Need Help?

Run these commands to get started:

```bash
# List current users
npx sanity users list

# Invite new user (interactive)
npx sanity users invite

# Open management console in browser
npx sanity manage
```

**Your Dev Server is Running:**
- Website: http://localhost:3000
- CMS Login: http://localhost:3000/cms
- Studio: http://localhost:3000/studio

**Ready to add users? Use one of the methods above!**

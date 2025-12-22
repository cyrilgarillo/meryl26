# Password Protection Setup

This wedding website is protected with a simple password authentication system.

## Files Created

1. **src/app/login/page.tsx** - Login page with password form
2. **src/app/login/page.module.css** - Login page styling
3. **src/app/api/auth/route.ts** - Authentication endpoint
4. **src/app/api/logout/route.ts** - Logout endpoint
5. **src/middleware.ts** - Middleware to protect all routes

## Environment Variable Setup

### Local Development

1. Create a `.env.local` file in the root directory:
   ```bash
   cp .env.local.example .env.local
   ```

2. Edit `.env.local` and set your password:
   ```env
   WEDDING_SITE_PASSWORD=MallorcaWedding2026
   ```

3. Restart the development server:
   ```bash
   npm run dev
   ```

### Vercel Deployment

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add a new environment variable:
   - **Name:** `WEDDING_SITE_PASSWORD`
   - **Value:** Your chosen password (e.g., `MallorcaWedding2026`)
   - **Environment:** Production, Preview, Development (select all)
4. Click **Save**
5. Redeploy your application for changes to take effect

## How It Works

1. **Unauthenticated Access:**
   - All routes redirect to `/login`
   - User enters the password
   - Password is verified against `WEDDING_SITE_PASSWORD`

2. **Successful Authentication:**
   - HttpOnly cookie `wedding_auth` is set
   - Cookie is valid for 7 days
   - User is redirected to home page

3. **Authenticated Access:**
   - Middleware checks for valid cookie on every request
   - If valid, user can access all pages
   - If invalid/missing, user is redirected to `/login`

4. **Logout:**
   - Click "Abmelden" button in navbar
   - Cookie is cleared
   - User is redirected to `/login`

## Security Features

- ✅ **HttpOnly cookies** - JavaScript cannot access the auth cookie
- ✅ **Secure flag** - Cookie only sent over HTTPS in production
- ✅ **SameSite=Lax** - Protection against CSRF attacks
- ✅ **Path=/** - Cookie applies to entire site
- ✅ **7-day expiration** - Automatic logout after 7 days
- ✅ **Server-side verification** - Password never exposed to client
- ✅ **Edge runtime compatible** - Works on Vercel Edge network

## Testing Checklist

### Local Testing

1. **Start the server:**
   ```bash
   npm run dev
   ```

2. **Test login flow:**
   - [ ] Navigate to http://localhost:3000
   - [ ] Should redirect to http://localhost:3000/login
   - [ ] Enter wrong password → Should show error message
   - [ ] Enter correct password → Should redirect to home page
   - [ ] Home page should load normally

3. **Test authenticated access:**
   - [ ] Navigate to different sections (Story, RSVP, etc.)
   - [ ] All sections should load without redirect

4. **Test logout:**
   - [ ] Click "Abmelden" in navbar
   - [ ] Should redirect to login page
   - [ ] Navigate to home → Should redirect to login

5. **Test static assets:**
   - [ ] Images should load on login page
   - [ ] Favicon should be visible
   - [ ] CSS styles should apply correctly

### Production Testing (Vercel)

1. **Deploy to Vercel:**
   ```bash
   git push origin main
   ```

2. **Set environment variable** (see above)

3. **Test deployment:**
   - [ ] Visit your Vercel URL
   - [ ] Should redirect to `/login`
   - [ ] Test login with correct password
   - [ ] Verify all pages are accessible
   - [ ] Test logout functionality
   - [ ] Verify cookie security (check DevTools → Application → Cookies)

4. **Cookie validation:**
   - Open DevTools → Application → Cookies
   - Find `wedding_auth` cookie
   - Verify properties:
     - [ ] HttpOnly: ✓
     - [ ] Secure: ✓ (in production)
     - [ ] SameSite: Lax
     - [ ] Path: /
     - [ ] Expires: ~7 days from now

## Sharing the Password

Send the password to your guests via:
- Email invitation
- Physical invitation card
- WhatsApp/SMS message
- Wedding website QR code with password hint

**Example message:**
```
Hallo!

Hier ist der Link zu unserer Hochzeitsseite:
https://melanie-cyril.vercel.app

Passwort: MallorcaWedding2026

Wir freuen uns auf dich! 💍
Melanie & Cyril
```

## Troubleshooting

**Problem:** "Server configuration error" message
- **Solution:** Make sure `WEDDING_SITE_PASSWORD` is set in environment variables

**Problem:** Infinite redirect loop
- **Solution:** Clear browser cookies and try again

**Problem:** Login works locally but not on Vercel
- **Solution:** Check that environment variable is set in Vercel dashboard

**Problem:** Users logged out too quickly
- **Solution:** Increase cookie `maxAge` in `src/app/api/auth/route.ts`

## Customization

### Change Password Hint Text

Edit `src/app/login/page.tsx` line 58:
```tsx
<p className={styles.hint}>
  Your custom hint text here
</p>
```

### Change Cookie Expiration

Edit `src/app/api/auth/route.ts` line 41:
```tsx
maxAge: 60 * 60 * 24 * 30, // 30 days instead of 7
```

### Change Login Page Title

Edit `src/app/login/page.tsx` lines 39-40:
```tsx
<h1 className={styles.title}>Your Custom Title</h1>
<p className={styles.subtitle}>Your Custom Subtitle</p>
```

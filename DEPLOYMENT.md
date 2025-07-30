# Deployment Guide

## Vercel Deployment

This project is configured for optimal deployment on Vercel with the following features:

### ✅ Fixed Issues

1. **404 Error on Page Refresh**: 
   - Added `vercel.json` with rewrite rules
   - Created `public/_redirects` for SPA routing
   - All routes now properly serve `index.html`

2. **Favicon Updated**:
   - Changed from `favicon.ico` to `batman-logo.png`
   - Added proper meta tags for different devices

3. **Build Optimization**:
   - Enhanced Vite configuration
   - Added manual chunk splitting
   - Optimized for production builds

### 🚀 Deployment Steps

1. **Connect to Vercel**:
   ```bash
   # Install Vercel CLI (if not already installed)
   npm i -g vercel
   
   # Login to Vercel
   vercel login
   
   # Deploy
   vercel --prod
   ```

2. **Environment Variables** (if needed):
   - Add any required environment variables in Vercel dashboard
   - No sensitive data is currently required

3. **Build Settings**:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

### 🔧 Configuration Files

- `vercel.json`: Handles SPA routing
- `public/_redirects`: Fallback for routing
- `vite.config.ts`: Optimized build configuration

### 🧪 Testing

After deployment, test these scenarios:
1. ✅ Direct navigation to any route (e.g., `/about`, `/projects`)
2. ✅ Page refresh on any route
3. ✅ Browser back/forward navigation
4. ✅ Favicon displays correctly
5. ✅ All links work properly

### 🐛 Troubleshooting

If you encounter issues:

1. **404 Errors**: Ensure `vercel.json` is in the root directory
2. **Favicon Not Showing**: Clear browser cache or check file path
3. **Build Failures**: Check Node.js version (recommend 18+)

### 📱 Mobile Testing

- Test responsive design on various screen sizes
- Verify touch interactions work properly
- Check performance on slower connections

### 🔄 Updates

To update the deployment:
```bash
vercel --prod
```

The site should now work perfectly on Vercel with no 404 errors on refresh! 
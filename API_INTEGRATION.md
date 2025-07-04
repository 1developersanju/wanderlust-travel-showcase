# API Integration Documentation

This document describes the integration of the backend API endpoints with the Wanderlust Travel Showcase application.

## Base URL
```
https://leetravels.cbe.taxi/api
```

## API Endpoints

### 1. GetUser - `/GetUser`
**Method:** GET  
**Headers:** Authorization (Firebase ID token)  
**Request Body:** None  
**Response:** JSON with Email, Storage, and Domain fields

**Response Format:**
```json
{
  "Email": "string",
  "Storage": "number",
  "Domain": "string"
}
```

**Error Responses:**
- 401 (Invalid token)
- 404 (User not found)
- 500 (Database error)

### 2. FetchDocs - `/FetchDocs`
**Method:** GET  
**Headers:** Origin (required)  
**Request Body:** None  
**Response:** JSON array with FileName objects

**Response Format:**
```json
[
  {
    "FileName": "string"
  }
]
```

**Error Responses:**
- 400 (Origin header missing)
- 405 (Wrong method)
- 500 (Database error)

### 3. Upload - `/Upload`
**Method:** POST  
**Headers:** Authorization (Firebase ID token), Origin  
**Request Body:** Multipart form data with file field (max 100MB)  
**Response:** JSON with success message and document URL

**Response Format:**
```json
{
  "message": "string",
  "documentUrl": "string"
}
```

**Error Responses:**
- 400 (File too big, missing origin)
- 401 (Invalid token)
- 405 (Wrong method)
- 500 (Database/file errors)

### 4. DeleteDoc - `/DeleteDoc`
**Method:** POST  
**Headers:** Authorization (Firebase ID token)  
**Request Body:** JSON with FileName field

**Request Format:**
```json
{
  "FileName": "string"
}
```

**Response:** JSON with success message

**Error Responses:**
- 400 (Invalid body, missing filename)
- 401 (Invalid token)
- 404 (No document found)
- 405 (Wrong method)
- 500 (Database/file errors)

## Implementation Details

### Files Created/Modified

1. **`src/lib/api.ts`** - Main API service layer
   - Handles all API calls with proper authentication
   - Includes error handling and debugging
   - Provides TypeScript interfaces for all data types

2. **`src/hooks/use-api.ts`** - Custom React hook
   - Manages API state and operations
   - Provides storage usage formatting
   - Handles loading states and error management

3. **`src/pages/Admin.tsx`** - Updated admin panel
   - Uses new API endpoints instead of Firebase directly
   - Shows user storage usage with progress bar
   - Displays uploaded files with delete functionality

4. **`src/pages/Gallery.tsx`** - Updated gallery page
   - Fetches images from API instead of Firebase
   - Falls back to default images if no uploads exist
   - Handles image loading errors gracefully

5. **`src/components/ApiTest.tsx`** - API testing component
   - Available at `/api-test` route for debugging
   - Tests GetUser and FetchDocs endpoints
   - Shows detailed error messages and responses

### Key Features

#### Storage Management
- Real-time storage usage display (out of 1GB total)
- Visual progress bar showing usage percentage
- Automatic updates after upload/delete operations

#### File Operations
- **Upload:** Support for multiple image files with progress indication
- **View:** Grid display of uploaded images in admin panel
- **Delete:** Confirmation dialog with immediate removal from storage

#### Error Handling
- Comprehensive error messages for all API failures
- Graceful fallbacks for network issues
- User-friendly toast notifications

#### Authentication
- Firebase ID token authentication for protected endpoints
- Automatic token refresh handling
- Secure file operations

## Usage Instructions

### For Administrators

1. **Access Admin Panel:**
   - Navigate to `/admin`
   - Sign in with Google account
   - View user information and storage usage

2. **Upload Images:**
   - Select one or multiple image files
   - Click "Upload Images" button
   - Monitor upload progress
   - View success/error notifications

3. **Manage Gallery:**
   - View all uploaded images in grid format
   - Delete unwanted images with confirmation
   - Monitor storage usage updates

### For Visitors

1. **View Gallery:**
   - Navigate to `/gallery`
   - Browse uploaded travel images
   - Enjoy responsive grid layout with hover effects

2. **Fallback Experience:**
   - If no images are uploaded, default travel images are shown
   - Ensures visitors always see content

### For Developers

1. **API Testing:**
   - Navigate to `/api-test`
   - Test individual endpoints
   - View detailed responses and errors
   - Debug authentication issues

2. **Console Debugging:**
   - All API calls are logged to browser console
   - Includes request URLs, response status, and data
   - Helps with troubleshooting

## Storage Limits

- **Total Storage:** 1GB per user
- **File Size Limit:** 100MB per file
- **Supported Formats:** All image formats (JPG, PNG, WebP, etc.)
- **Usage Display:** Shows current usage in MB/GB with percentage

## Error Handling

The application handles various error scenarios:

1. **Network Errors:** Graceful fallbacks with user notifications
2. **Authentication Errors:** Automatic redirect to login
3. **File Upload Errors:** Detailed error messages with retry options
4. **API Errors:** User-friendly messages with technical details in console

## Security Features

1. **Firebase Authentication:** Secure user authentication
2. **Token-based API Access:** All protected endpoints require valid tokens
3. **Origin Validation:** API endpoints validate request origins
4. **File Type Validation:** Server-side file type checking
5. **Size Limits:** Prevents abuse through file size restrictions

## Future Enhancements

Potential improvements for the API integration:

1. **Batch Operations:** Upload/delete multiple files at once
2. **Image Optimization:** Automatic compression and resizing
3. **Metadata Management:** Add titles, descriptions, and tags to images
4. **Sharing Features:** Public/private image visibility
5. **Analytics:** Track image views and downloads
6. **CDN Integration:** Faster image delivery worldwide

## Troubleshooting

### Common Issues

1. **Authentication Errors:**
   - Ensure user is signed in with Google
   - Check Firebase configuration
   - Verify token expiration

2. **Upload Failures:**
   - Check file size (max 100MB)
   - Verify file format is supported
   - Ensure sufficient storage space

3. **Gallery Not Loading:**
   - Check network connectivity
   - Verify API endpoint accessibility
   - Review browser console for errors

### Debug Steps

1. Open browser developer tools
2. Navigate to `/api-test` route
3. Test individual endpoints
4. Check console for detailed logs
5. Verify Firebase authentication status

## Support

For technical support or questions about the API integration:

1. Check the browser console for error logs
2. Use the `/api-test` route for endpoint testing
3. Review this documentation for common solutions
4. Contact the development team for additional assistance 
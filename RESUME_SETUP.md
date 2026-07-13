# Resume Setup Guide

## How to Add Your Resume

### Option 1: Add a PDF Resume (Recommended)

1. **Prepare your resume** as a PDF file
2. **Place it in the `public` folder**:
   - File location: `public/resume.pdf`
3. **Done!** The Resume button will now:
   - Open your resume in a new browser tab when clicked

### Option 2: Download Resume on Click

To make the Resume button **download** instead of opening in a new tab:

Edit `src/components/Navbar.tsx` and uncomment the download code:

```typescript
const handleResumeClick = () => {
  // Uncomment this section for download behavior:
  const link = document.createElement("a");
  link.href = "/resume.pdf";
  link.download = "Resume.pdf";
  link.click();
};
```

### Option 3: Custom Resume Page

Create a new resume page at `src/app/resume/page.tsx` and update the handler:

```typescript
const handleResumeClick = () => {
  window.location.href = "/resume";
};
```

## File Structure

```
portfolio/
├── public/
│   └── resume.pdf          ← Place your resume here
├── src/
│   ├── components/
│   │   └── Navbar.tsx      ← Resume button logic
│   └── app/
│       ├── page.tsx
│       └── layout.tsx
└── ...
```

## Testing

1. Click the **Resume** button in the navbar
2. Your resume should open in a new tab (or download, depending on Option 1 or 2)

## Tips

- Optimize your PDF size (keep under 5MB)
- Ensure your resume is readable on mobile devices
- Consider having multiple versions (e.g., full, short)
- Update regularly with new projects and experience

That's it! 🎉

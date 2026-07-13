# Portfolio Website - Development Guide

## Project Setup

This is a professional portfolio website built with Next.js 14, TypeScript, and Tailwind CSS.

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

### Development

Start the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the portfolio.

### Build & Production

Build for production:
```bash
npm run build
npm start
```

### Project Structure

- `src/app/` - Next.js App Router pages and layouts
- `src/components/` - Reusable React components
- `public/` - Static assets (images, fonts, etc.)
- `tailwind.config.js` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration

### Features

- ⚡ Fast and optimized with Next.js
- 🎨 Beautiful UI with Tailwind CSS
- ✨ Smooth animations with Framer Motion
- 📱 Fully responsive design
- ♿ Accessible components
- 🔧 TypeScript support

### Customization

1. **Update Personal Info**: Edit sections in component files to add your name, bio, and links
2. **Add Projects**: Modify the projects array in `src/components/Projects.tsx`
3. **Update Skills**: Edit skill categories in `src/components/Skills.tsx`
4. **Change Colors**: Update theme in `tailwind.config.js`
5. **Add Images**: Place images in `public/` folder and reference them

### Deployment

Deploy to Vercel (recommended for Next.js):

```bash
npm install -g vercel
vercel
```

Or deploy to any Node.js hosting platform.

### Performance Optimization

The project is already optimized with:
- Image optimization
- CSS minification
- JavaScript tree-shaking
- Automatic code splitting

### License

This project is open source and available under the MIT License.

### Support

For questions or issues, refer to the [Next.js documentation](https://nextjs.org/docs)

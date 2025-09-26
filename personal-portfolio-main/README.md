<div align="center">
  <img alt="Logo" src="https://raw.githubusercontent.com/bchiang7/v4/main/src/images/logo.png" width="100" />
</div>
<h1 align="center">
  M Mohan S S N Vivek - Personal Portfolio
</h1>
<p align="center">
  A modern, responsive portfolio website built with <a href="https://www.gatsbyjs.com/" target="_blank">Gatsby v5</a> and hosted with <a href="https://www.netlify.com/" target="_blank">Netlify</a>
</p>
<p align="center">
  <a href="https://app.netlify.com/sites/mohanvivek/deploys" target="_blank">
    <img src="https://api.netlify.com/api/v1/badges/YOUR-SITE-ID/deploy-status" alt="Netlify Status" />
  </a>
</p>

![demo](https://raw.githubusercontent.com/bchiang7/v4/main/src/images/demo.png)

## 🚀 Features

- **Modern Stack**: Built with Gatsby 5, React 18, and styled-components
- **Responsive Design**: Fully responsive across all devices
- **Performance Optimized**: Lazy loading, image optimization, and code splitting
- **Smooth Animations**: Powered by Anime.js and ScrollReveal
- **Dark Theme**: Professional dark color scheme with accent colors
- **SEO Ready**: Meta tags, Open Graph, and structured data
- **Accessibility**: WCAG compliant with proper ARIA labels

## 🛠 Tech Stack

### Core Technologies
- **Framework**: Gatsby v5.15.0
- **UI Library**: React v18.3.1
- **Styling**: Styled Components v6.1.19 + TailwindCSS v3.4.17
- **Language**: JavaScript (ES6+)
- **Build Tool**: Webpack (via Gatsby)
- **Package Manager**: Yarn

### Key Libraries
- **Animations**:
  - Anime.js v3.2.2 - Complex animations
  - ScrollReveal v4.0.9 - Scroll-triggered reveals
  - React Transition Group v4.4.5 - Component transitions

- **Routing**: React Router v6.28.2
- **SEO**: React Helmet v6.1.0
- **Code Highlighting**: PrismJS v1.29.0
- **Utilities**: Lodash v4.17.21

### Development Tools
- **Linting**: ESLint v8.57.0
- **Formatting**: Prettier v3.4.2
- **Git Hooks**: Husky v9.1.7
- **Staged Files**: Lint-staged v15.3.0

## 📁 Project Structure

```
personal-portfolio/
├── content/           # Markdown content for dynamic sections
│   ├── featured/      # Featured projects
│   ├── jobs/          # Work experience
│   └── projects/      # Other projects
├── src/
│   ├── components/    # React components
│   │   ├── sections/  # Page sections (Hero, About, etc.)
│   │   ├── icons/     # SVG icon components
│   │   └── ...        # Layout, Nav, Footer, etc.
│   ├── hooks/         # Custom React hooks
│   ├── pages/         # Gatsby pages
│   ├── styles/        # Global styles and theme
│   └── utils/         # Utility functions
├── static/            # Static assets
│   └── fonts/         # Custom fonts
└── gatsby-config.js   # Gatsby configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js v20.17.0 or higher
- Yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/personal-portfolio.git
   cd personal-portfolio
   ```

2. **Install dependencies**
   ```bash
   yarn install
   ```

3. **Start development server**
   ```bash
   yarn develop
   ```
   The site will be running at `http://localhost:8000`

### Available Scripts

| Command | Description |
|---------|-------------|
| `yarn develop` | Start development server on port 8000 |
| `yarn build` | Build production-ready site |
| `yarn serve` | Serve production build locally |
| `yarn clean` | Clear Gatsby cache and public folder |
| `yarn format` | Format code with Prettier |
| `yarn lint-staged` | Run linting on staged files |

## 🎨 Customization

### Colors

The color palette is defined in `tailwind.config.js`:

| Color | Hex | Usage |
|-------|-----|-------|
| Navy | `#0a192f` | Primary background |
| Light Navy | `#112240` | Secondary background |
| Lightest Navy | `#233554` | Tertiary background |
| Slate | `#8892b0` | Body text |
| Light Slate | `#a8b2d1` | Headings |
| Lightest Slate | `#ccd6f6` | Emphasized text |
| White | `#e6f1ff` | Primary text |
| Green | `#64ffda` | Accent color |

### Content

Update your information in the following locations:

1. **Site metadata**: `gatsby-config.js`
2. **Personal info**: `src/config.js`
3. **Work experience**: `content/jobs/`
4. **Projects**: `content/featured/` and `content/projects/`
5. **Resume**: Replace `static/resume.pdf`

## 📦 Recent Updates (v2.0.0)

### Breaking Changes
- ⚡ **Gatsby v3 → v5**: Major version upgrade with performance improvements
- ⚛️ **React v17 → v18**: Updated to React 18 with concurrent features
- 🎨 **Styled Components v5 → v6**: Latest styled-components with better TypeScript support
- 🚦 **React Router v5 → v6**: Updated routing with new API

### Improvements
- ✅ Fixed all version incompatibilities
- ✅ Updated all dependencies to latest stable versions
- ✅ Improved build performance and bundle size
- ✅ Enhanced development experience with better hot reloading
- ✅ Better TypeScript support (ready for migration)
- ✅ Improved accessibility features

### Bug Fixes
- 🐛 Fixed SSR issues with ScrollReveal and Anime.js
- 🐛 Resolved Gatsby plugin compatibility issues
- 🐛 Fixed deprecated webpack configurations
- 🐛 Corrected React Router breaking changes

## 🚀 Deployment

### Netlify (Recommended)

1. **Connect to GitHub**
   - Link your repository to Netlify
   - Set build command: `yarn build`
   - Set publish directory: `public`

2. **Environment Variables**
   - Node version: `20.17.0`
   - Yarn version: `1.22.19`

3. **Deploy Settings** (`netlify.toml`)
   ```toml
   [build]
     command = "yarn build"
     publish = "public"

   [build.environment]
     NODE_VERSION = "20.17.0"
   ```

### Vercel

```bash
# Install Vercel CLI
yarn global add vercel

# Deploy
vercel --prod
```

### GitHub Pages

```bash
# Install gh-pages
yarn add --dev gh-pages

# Add deploy script to package.json
"deploy": "gatsby build && gh-pages -d public"

# Deploy
yarn deploy
```

## 🐛 Troubleshooting

### Common Issues

1. **Build fails with module errors**
   ```bash
   yarn clean
   rm -rf node_modules yarn.lock
   yarn install
   yarn build
   ```

2. **Development server crashes**
   - Check Node version: `node --version` (should be v20+)
   - Clear cache: `yarn clean`
   - Reinstall dependencies: `yarn install`

3. **Styling issues**
   - Ensure TailwindCSS is properly configured
   - Check styled-components theme provider
   - Verify PostCSS configuration

4. **Animation issues**
   - ScrollReveal and Anime.js are wrapped for SSR compatibility
   - Check browser console for errors
   - Ensure animations are initialized after component mount

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/your-username/personal-portfolio/issues).

## 👏 Acknowledgments

This portfolio is built upon the excellent foundation created by [Brittany Chiang](https://github.com/bchiang7). Her [v4 portfolio design](https://github.com/bchiang7/v4) served as the inspiration and base for this project.

**Original Design Credits:**
- **Designer & Original Developer**: [Brittany Chiang](https://github.com/bchiang7)
- **Original Project**: [v4 Portfolio](https://github.com/bchiang7/v4)
- **License**: MIT (allows modification and redistribution)

**Additional Credits:**
- Icons from [Font Awesome](https://fontawesome.com/)
- Fonts from [Google Fonts](https://fonts.google.com/)
- Animations by [Anime.js](https://animejs.com/) and [ScrollReveal](https://scrollrevealjs.org/)

**Modifications & Enhancements by M Mohan S S N Vivek:**
- Updated to modern tech stack (Gatsby v5, React 18)
- Personalized content and branding
- Enhanced performance optimizations
- Improved accessibility features
- Added new project showcases
- Netlify deployment optimizations

## 📧 Contact

**M Mohan S S N Vivek**
- Email: mohanvivek2421@gmail.com
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/your-profile)
- GitHub: [@your-username](https://github.com/your-username)

---

<div align="center">
  Made with ❤️ by M Mohan S S N Vivek
</div>
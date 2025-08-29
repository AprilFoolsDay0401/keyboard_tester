# ⌨️ Keyboard Tester

[![Live Demo](https://img.shields.io/badge/Live_Demo-www.keyboardtest.pro-blue?style=for-the-badge&logo=vercel)](https://www.keyboardtest.pro)
[![Next.js](https://img.shields.io/badge/Next.js-15.3.1-black?style=flat&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18.2.0-blue?style=flat&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.1-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/)

**Live Demo: [https://www.keyboardtest.pro](https://www.keyboardtest.pro)**

A modern, responsive web application for testing keyboard functionality. Built with Next.js 15, React 18, TypeScript, and Tailwind CSS. Perfect for developers, IT professionals, and anyone who needs to verify their keyboard is working correctly.

## ✨ Features

- **🔍 Complete Keyboard Testing**: Test every key on your keyboard including function keys, arrow keys, and special characters
- **📱 Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **🎵 Mechanical Keyboard Sound**: Authentic mechanical keyboard sound effects for better user experience
- **📊 Real-time Feedback**: Visual feedback showing which keys have been pressed
- **⌨️ NumPad Support**: Optional numeric keypad for extended testing
- **🌐 No Installation Required**: Runs entirely in your web browser
- **⚡ Fast & Lightweight**: Built with modern web technologies for optimal performance
- **🎨 Beautiful UI**: Modern, clean interface with smooth animations and transitions

## 🚀 Live Demo

**Try it now:** [https://www.keyboardtest.pro](https://www.keyboardtest.pro)

## 🛠️ Tech Stack

- **Frontend Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **UI Library**: [React 18](https://reactjs.org/)
- **Language**: [TypeScript 5](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 3.4](https://tailwindcss.com/)
- **Deployment**: [Vercel](https://vercel.com/)
- **Analytics**: [Vercel Analytics](https://vercel.com/analytics)
- **Build Tool**: Next.js built-in bundler
- **Package Manager**: npm

## 📱 Features Preview

### ✨ **Interactive Keyboard Testing**

- **Real-time Key Detection**: Press any key and see instant visual feedback
- **Complete Key Coverage**: Test all keys from A-Z, 0-9, function keys, and special characters
- **Visual Feedback**: Keys light up in green when pressed, with smooth animations
- **Key History**: Track which keys have been tested during your session

### 🎵 **Audio Experience**

- **Mechanical Keyboard Sounds**: Authentic click sounds for every key press
- **Web Audio API**: High-quality audio feedback using modern browser technologies
- **Customizable Audio**: Easy to enable/disable sound effects

### 📱 **Responsive Design**

- **Mobile-First Approach**: Optimized for all device sizes
- **Landscape Detection**: Automatic orientation handling for mobile devices
- **Touch-Friendly Interface**: Works perfectly on touchscreens and desktop
- **Adaptive Layouts**: Automatically adjusts to different screen resolutions

### 🎨 **Modern UI/UX**

- **Clean Design**: Minimalist interface with professional aesthetics
- **Smooth Animations**: CSS transitions and hover effects
- **Accessible Colors**: High contrast and readable typography
- **Professional Branding**: Consistent design language throughout

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/keyboard-tester.git
   cd keyboard-tester
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Building for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
keyboard-tester/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── about/             # About page
│   │   ├── contact/           # Contact page
│   │   ├── keyboard/          # Main keyboard testing page
│   │   ├── privacy/           # Privacy policy page
│   │   ├── terms/             # Terms of service page
│   │   ├── globals.css        # Global styles
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Landing page
│   ├── components/             # React components
│   │   ├── AdComponent.tsx    # Advertisement component
│   │   ├── Footer.tsx         # Footer component
│   │   ├── GoogleConsent.tsx  # Google consent banner
│   │   ├── Key.tsx            # Individual key component
│   │   ├── Keyboard.tsx       # Main keyboard component
│   │   └── NumPad.tsx         # Numeric keypad component
│   └── types/                  # TypeScript type definitions
├── public/                     # Static assets
│   ├── sounds/                 # Audio files
│   │   └── mech-key.wav       # Mechanical keyboard sound
│   └── ...                     # Other static files
├── package.json                # Dependencies and scripts
├── tailwind.config.js          # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
└── README.md                   # This file
```

## 🎯 Key Features Explained

### 1. Complete Keyboard Testing

- Tests all standard keyboard keys (A-Z, 0-9, function keys, arrow keys)
- Special key support (Ctrl, Shift, Alt, Win, etc.)
- Visual feedback for pressed keys
- Key press history tracking

### 2. Responsive Design

- Mobile-first approach
- Landscape orientation detection for mobile devices
- Adaptive layouts for different screen sizes
- Touch-friendly interface

### 3. Audio Feedback

- Mechanical keyboard sound effects
- Web Audio API integration
- Customizable audio settings

### 4. Modern UI/UX

- Clean, minimalist design
- Smooth animations and transitions
- Accessible color schemes
- Professional typography

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file in the root directory:

```env
# Analytics (optional)
NEXT_PUBLIC_ANALYTICS_ID=your_analytics_id

# Other configurations
NEXT_PUBLIC_APP_NAME=Keyboard Tester
```

### Tailwind CSS Customization

Modify `tailwind.config.js` to customize colors, fonts, and other design tokens:

```javascript
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2563eb",
        // Add your custom colors
      },
    },
  },
  plugins: [],
};
```

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🌐 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Other Platforms

The app can be deployed to any platform that supports Next.js:

- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Self-hosted servers

## 🤝 Contributing

We welcome contributions! Please feel free to submit a Pull Request.

### Development Guidelines

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Style

- Use TypeScript for all new code
- Follow ESLint configuration
- Use Prettier for code formatting
- Write meaningful commit messages

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) team for the amazing framework
- [React](https://reactjs.org/) team for the UI library
- [Tailwind CSS](https://tailwindcss.com/) team for the utility-first CSS framework
- [Vercel](https://vercel.com/) for hosting and deployment

## 📞 Support

- **Website**: [https://www.keyboardtest.pro](https://www.keyboardtest.pro)
- **Issues**: [GitHub Issues](https://github.com/yourusername/keyboard-tester/issues)
- **Contact**: [Contact Page](https://www.keyboardtest.pro/contact)

## 🔮 Roadmap

- [ ] Customizable key layouts
- [ ] Multiple language support
- [ ] Keyboard shortcuts testing
- [ ] Performance metrics
- [ ] PWA support
- [ ] Dark mode toggle
- [ ] Custom sound effects
- [ ] Export test results

---

**Made with ❤️ using Next.js, React, and TypeScript**

⭐ **Star this repository if you found it helpful!**

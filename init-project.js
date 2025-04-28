#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🚀 Initializing Metaforce project...');

// Create necessary directories if they don't exist
const directories = [
  'public/images',
  'public/models',
  'public/sounds',
  'public/fonts',
];

directories.forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(`📁 Created directory: ${dir}`);
  }
});

// Generate placeholder images using Base64 data from placeholders.ts
// This is a quick way to get started without real images
try {
  const placeholdersContent = fs.readFileSync('./app/lib/placeholders.ts', 'utf8');
  
  // Extract Base64 data using regex
  const base64Regex = /['"]data:image\/svg\+xml;base64,([^'"]+)['"]/g;
  let match;
  const images = [];
  
  while ((match = base64Regex.exec(placeholdersContent)) !== null) {
    images.push(match[1]);
  }
  
  // Create some placeholder images
  const imageNames = [
    'turbocharger.png',
    'ecu-chip.png',
    'air-intake.png',
    'wheels.png',
    'brakes.png',
    'exhaust.png',
    'led-kit.png',
    'suspension.png',
    'carbon-hood.png',
    'turbocharger-angle1.png',
    'turbocharger-angle2.png',
    'turbocharger-angle3.png',
  ];
  
  imageNames.forEach((imageName, index) => {
    const targetPath = path.join('public/images', imageName);
    
    // If file doesn't exist, create it with placeholder data
    if (!fs.existsSync(targetPath)) {
      // Use the matching image data or the first one as fallback
      const imageData = images[index % images.length];
      const buffer = Buffer.from(imageData, 'base64');
      
      fs.writeFileSync(targetPath, buffer);
      console.log(`🖼️  Created placeholder image: ${imageName}`);
    }
  });
  
  // Create a simple placeholder 3D model file
  const modelPath = path.join('public/models', 'turbo.glb');
  if (!fs.existsSync(modelPath)) {
    // Create an empty file as a placeholder
    // In a real project, you would download or create actual GLB files
    fs.writeFileSync(modelPath, '');
    console.log(`🧩 Created placeholder 3D model: turbo.glb`);
  }
  
  // Create a simple placeholder sound file
  const soundPath = path.join('public/sounds', 'hover.mp3');
  if (!fs.existsSync(soundPath)) {
    // Create an empty file as a placeholder
    fs.writeFileSync(soundPath, '');
    console.log(`🔊 Created placeholder sound: hover.mp3`);
  }
  
  console.log('✅ Placeholder assets created successfully');
  
} catch (error) {
  console.error('❌ Error creating placeholder assets:', error.message);
}

// Install dependencies if needed
try {
  if (!fs.existsSync('node_modules')) {
    console.log('📦 Installing dependencies...');
    execSync('npm install', { stdio: 'inherit' });
  }
} catch (error) {
  console.error('❌ Error installing dependencies:', error.message);
}

console.log(`
✨ Metaforce project initialized successfully! ✨

To start the development server, run:
npm run dev

Visit http://localhost:3000 in your browser to see the site.
`); 
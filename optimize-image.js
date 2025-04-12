const sharp = require('sharp');
sharp('dist/assets/Notification-B5x4MBpa.png')
  .resize({ width: 1200 }) // Resize to a smaller width
  .toFile('dist/assets/Notification-optimized.png', (err, info) => {
    if (err) console.error(err);
    else console.log('Image optimized:', info);
  });
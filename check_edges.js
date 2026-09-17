const fs = require('fs');
const { execSync } = require('child_process');

const html = `<!DOCTYPE html>
<html>
<body style="margin:0;padding:0;background:white;">
<canvas id="c"></canvas>
<script>
const img = new Image();
img.onload = () => {
  const c = document.getElementById('c');
  c.width = img.naturalWidth;
  c.height = img.naturalHeight;
  const ctx = c.getContext('2d');
  ctx.drawImage(img, 0, 0);
  
  // Check top 10 rows
  const topData = ctx.getImageData(0, 0, c.width, 10).data;
  let nonWhiteTop = 0;
  for (let i = 0; i < topData.length; i += 4) {
    if (topData[i] < 240 || topData[i+1] < 240 || topData[i+2] < 240) nonWhiteTop++;
  }
  
  // Check bottom 10 rows
  const bottomData = ctx.getImageData(0, c.height - 10, c.width, 10).data;
  let nonWhiteBottom = 0;
  for (let i = 0; i < bottomData.length; i += 4) {
    if (bottomData[i] < 240 || bottomData[i+1] < 240 || bottomData[i+2] < 240) nonWhiteBottom++;
  }
  
  console.log('WIDTH:', c.width, 'HEIGHT:', c.height);
  console.log('Non-white pixels in top 10 rows:', nonWhiteTop);
  console.log('Non-white pixels in bottom 10 rows:', nonWhiteBottom);
  
  // Let's check row by row for first 20 rows
  for (let y = 0; y < 20; y++) {
    const row = ctx.getImageData(0, y, c.width, 1).data;
    let count = 0;
    for (let x = 0; x < c.width; x++) {
      if (row[x*4] < 240) count++;
    }
    if (count > 0) console.log('Row ' + y + ' has ' + count + ' dark pixels');
  }
  
  // Let's check row by row for bottom 20 rows
  for (let y = c.height - 20; y < c.height; y++) {
    const row = ctx.getImageData(0, y, c.width, 1).data;
    let count = 0;
    for (let x = 0; x < c.width; x++) {
      if (row[x*4] < 240) count++;
    }
    if (count > 0) console.log('Bottom row ' + y + ' has ' + count + ' dark pixels');
  }
};
img.src = 'BVU-Yatay-JPG.jpg';
</script>
</body>
</html>`;

fs.writeFileSync('check.html', html);
const res = execSync(`/Applications/Google\\ Chrome.app/Contents/MacOS/Google\\ Chrome --headless --dump-dom --enable-logging=stderr --virtual-time-budget=2000 "file://${process.cwd()}/check.html" 2>&1`);
console.log(res.toString());

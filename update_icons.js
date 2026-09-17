const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const rootDir = '/Users/ahmetdogankuday/Downloads/E-mail Signature';
const scratchDir = '/Users/ahmetdogankuday/.gemini/antigravity-ide/brain/eebc4053-362d-4afe-9fda-732aa6ffe3e9/scratch';

// Scopus path from wikimedia official vector
const scopusSvgContent = fs.readFileSync(path.join(scratchDir, 'wikimedia_scopus.svg'), 'utf8');
const scopusPathMatch = scopusSvgContent.match(/<path[\s\S]*?d="([\s\S]*?)"/);
const scopusSubpaths = scopusPathMatch[1].trim().split(/(?=[Mm]\s*[\d\.\-])/);
// Subpaths 2 and 3 form the official "Sc"
const scopusScPath = scopusSubpaths[2] + " " + scopusSubpaths[3];

// Official ORCID iD path
const orcidIdPath = `M 173.66372,365.51268 H 144.27546 V 160.1481 h 29.38826 z M 158.94954,138.69619 c -11.13935,0 -20.21208,-9.01056 -20.21208,-20.21208 0,-11.11841 9.05183,-20.191181 20.21208,-20.191181 11.18058,0 20.23244,9.051831 20.23244,20.191181 -0.0219,11.22184 -9.05186,20.21208 -20.23244,20.21208 z m 241.3866,163.59715 c -5.29051,12.54475 -12.83407,23.58066 -22.65053,33.08742 -9.98203,9.83734 -21.59659,17.19443 -34.84378,22.19616 -7.74983,3.01709 -14.83852,5.06335 -21.30725,6.11726 -6.4891,1.01267 -18.82759,1.50883 -37.07593,1.50883 H 219.5033 V 160.1481 h 69.23318 c 27.96195,0 50.03378,4.1541 66.31951,12.54476 16.26485,8.36977 29.18144,20.72859 38.79164,36.97254 9.61013,16.26483 14.4254,34.01757 14.4254,53.19607 0.0227,13.76426 -2.66619,26.90802 -7.93576,39.43187 z M 336.6206,194.53756 c -7.12991,-3.32734 -13.8671,-5.55949 -20.25334,-6.61343 -6.36534,-1.09517 -16.57451,-1.61223 -30.71059,-1.61223 h -36.70409 v 152.74712 h 37.63425 c 14.6735,0 26.08126,-1.01267 34.22385,-3.01709 8.14259,-2.00442 14.92159,-4.52592 20.35674,-7.62608 5.43519,-3.07925 10.416,-6.8615 14.94192,-11.38742 14.4876,-14.71475 21.74129,-33.27334 21.74129,-55.7176 0,-22.05151 -7.44016,-40.05177 -22.34085,-53.98159 -5.49732,-5.16674 -11.82143,-9.44459 -18.88918,-12.79281 z`;

// Official ResearchGate R^G path
const rgSvgPath = "M19.586 0c-.818 0-1.508.19-2.073.565-.563.377-.97.936-1.213 1.68a3.193 3.193 0 0 0-.112.437 8.365 8.365 0 0 0-.078.53 9 9 0 0 0-.05.727c-.01.282-.013.621-.013 1.016a31.121 31.123 0 0 0 .014 1.017 9 9 0 0 0 .05.727 7.946 7.946 0 0 0 .077.53h-.005a3.334 3.334 0 0 0 .113.438c.245.743.65 1.303 1.214 1.68.565.376 1.256.564 2.075.564.8 0 1.536-.213 2.105-.603.57-.39.94-.916 1.175-1.65.076-.235.135-.558.177-.93a10.9 10.9 0 0 0 .043-1.207v-.82c0-.095-.047-.142-.14-.142h-3.064c-.094 0-.14.047-.14.141v.956c0 .094.046.14.14.14h1.666c.056 0 .084.03.084.086 0 .36 0 .62-.036.865-.038.244-.1.447-.147.606-.108.385-.348.664-.638.876-.29.212-.738.35-1.227.35-.545 0-.901-.15-1.21-.353-.306-.203-.517-.454-.67-.915a3.136 3.136 0 0 1-.147-.762 17.366 17.367 0 0 1-.034-.656c-.01-.26-.014-.572-.014-.939a26.401 26.403 0 0 1 .014-.938 15.821 15.822 0 0 1 .035-.656 3.19 3.19 0 0 1 .148-.76 1.89 1.89 0 0 1 .742-1.01c.344-.244.593-.352 1.137-.352.508 0 .815.096 1.144.303.33.207.528.492.764.925.047.094.111.118.198.07l1.044-.43c.075-.048.09-.115.042-.199a3.549 3.549 0 0 0-.466-.742 3 3 0 0 0-.679-.607 3.313 3.313 0 0 0-.903-.41A4.068 4.068 0 0 0 19.586 0zM8.217 5.836c-1.69 0-3.036.086-4.297.086-1.146 0-2.291 0-3.007-.029v.831l1.088.2c.744.144 1.174.488 1.174 2.264v11.288c0 1.777-.43 2.12-1.174 2.263l-1.088.2v.832c.773-.029 2.12-.086 3.465-.086 1.29 0 2.951.057 3.667.086v-.831l-1.49-.2c-.773-.115-1.174-.487-1.174-2.264v-4.784c.688.057 1.29.057 2.206.057 1.748 3.123 3.41 5.472 4.355 6.56.86 1.032 2.177 1.691 3.839 1.691.487 0 1.003-.086 1.318-.23v-.744c-1.031 0-2.063-.716-2.808-1.518-1.26-1.376-2.95-3.582-4.355-6.074 2.32-.545 4.04-2.722 4.04-4.9 0-3.208-2.492-4.698-5.758-4.698zm-.515 1.29c2.406 0 3.839 1.26 3.839 3.552 0 2.263-1.547 3.782-4.097 3.782-.974 0-1.404-.03-2.063-.086v-7.19c.66-.059 1.547-.059 2.32-.059z";

// Official Clarivate / Web of Science path
const clarivateInner = `
  <g transform="translate(14, 14) scale(1.55)">
    <path fill="#ffffff" d="m 6.8536446,19.269801 c 0.3934,1.0499 0.8711,2.0763 1.4429,3.0667 0.4108,0.7115 0.8647,1.3934 1.3545,2.0457 4.8382004,-1.1875 9.1421004,-3.7346 12.4819004,-7.215 -0.7737,-1.8074 -1.8021,-3.4807 -3.0404,-4.9742 -3.0408,3.6674 -7.3452,6.2506 -12.2389004,7.0768 z" />
    <path fill="#ffffff" opacity="0.88" d="m 9.6363446,0 c -1.1627,1.5495 -2.1025,3.2671 -2.7861,5.1156 4.8951004,0.825599 9.2008004,3.409101 12.2423004,7.077401 1.2383,-1.4935 2.2667,-3.1668 3.0404,-4.9742 C 18.789745,3.7348 14.480545,1.186 9.6363446,0 Z" />
    <path fill="#ffffff" opacity="0.96" d="m 6.8536446,19.269801 c -1.4714,-3.9269 -1.6917,-8.2023 -0.5846,-12.3341 0.166,-0.619502 0.3615,-1.226002 0.5812,-1.820102 -1.1013,-0.185799 -2.2323,-0.283299 -3.3856,-0.283299 -0.8245,0 -1.6373,0.0507 -2.4363,0.1467 -1.34470002,4.636101 -1.39730002,9.640701 0,14.427601 0.7999,0.0962 1.6136,0.147 2.439,0.147 1.1546,0 2.2866,-0.0977 3.389,-0.2838 z" />
  </g>
`;

function getSvg(name, shape) {
  const rx = shape === 'circle' ? '32' : '14';
  if (name === 'scopus') {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
      <rect width="64" height="64" rx="${rx}" fill="#EB680B" />
      <g transform="translate(32, 33) scale(0.40) translate(-67, -54)">
        <path fill="#ffffff" d="${scopusScPath}" />
      </g>
    </svg>`;
  }
  if (name === 'orcid') {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
      <rect width="64" height="64" rx="${rx}" fill="#A6CE39" />
      <g transform="translate(32, 32) scale(0.12) translate(-276, -232)">
        <path fill="#ffffff" d="${orcidIdPath}" />
      </g>
    </svg>`;
  }
  if (name === 'researchgate') {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
      <rect width="64" height="64" rx="${rx}" fill="#00CCBB" />
      <g transform="translate(32, 32) scale(1.7) translate(-12, -12)">
        <path fill="#ffffff" d="${rgSvgPath}" />
      </g>
    </svg>`;
  }
  if (name === 'publons') {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
      <rect width="64" height="64" rx="${rx}" fill="#5E33BF" />
      ${clarivateInner}
    </svg>`;
  }
  throw new Error(`Unknown icon: ${name}`);
}

const targets = ['scopus', 'orcid', 'researchgate', 'publons'];

for (const name of targets) {
  // Square
  const squareSvg = getSvg(name, 'square');
  const squareSvgPath = path.join(scratchDir, `final_${name}_square.svg`);
  const squarePngPath = path.join(rootDir, 'assets/icons', `${name}.png`);
  fs.writeFileSync(squareSvgPath, squareSvg);
  execSync(`"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless --screenshot="${squarePngPath}" --window-size=64,64 --default-background-color=00000000 "file://${squareSvgPath}" 2>/dev/null`);
  console.log(`Updated assets/icons/${name}.png`);

  // Circle
  const circleSvg = getSvg(name, 'circle');
  const circleSvgPath = path.join(scratchDir, `final_${name}_circle.svg`);
  const circlePngPath = path.join(rootDir, 'assets/icons_circle', `${name}.png`);
  fs.writeFileSync(circleSvgPath, circleSvg);
  execSync(`"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless --screenshot="${circlePngPath}" --window-size=64,64 --default-background-color=00000000 "file://${circleSvgPath}" 2>/dev/null`);
  console.log(`Updated assets/icons_circle/${name}.png`);
}

// Update data_uris.json
console.log('Updating assets/data_uris.json...');
function toBase64(filePath) {
  const bitmap = fs.readFileSync(path.join(rootDir, filePath));
  const ext = filePath.endsWith('.png') ? 'png' : 'jpeg';
  return `data:image/${ext};base64,${bitmap.toString('base64')}`;
}

const dataJsonPath = path.join(rootDir, 'assets/data_uris.json');
const currentData = JSON.parse(fs.readFileSync(dataJsonPath, 'utf8'));

for (const name of targets) {
  currentData.iconsSquare[name] = toBase64(`assets/icons/${name}.png`);
  currentData.iconsCircle[name] = toBase64(`assets/icons_circle/${name}.png`);
}

fs.writeFileSync(dataJsonPath, JSON.stringify(currentData, null, 2));
console.log('data_uris.json updated successfully!');

// Rebuild signatures
console.log('Rebuilding HTML signatures...');
execSync(`node "${path.join(rootDir, 'build_signatures.js')}"`, { stdio: 'inherit', cwd: rootDir });
console.log('All signatures updated successfully!');

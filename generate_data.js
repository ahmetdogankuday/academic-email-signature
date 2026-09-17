const fs = require('fs');

function toBase64(filePath) {
  const bitmap = fs.readFileSync(filePath);
  const ext = filePath.endsWith('.png') ? 'png' : 'jpeg';
  return `data:image/${ext};base64,${bitmap.toString('base64')}`;
}

const data = {
  logos: {
    bvuYuvarlak: toBase64('assets/bvu-yuvarlak-opt.png'),
    bvuYatay: toBase64('assets/bvu-yatay-opt.png'),
    cochraneYatay: toBase64('assets/cochrane-yatay-opt.png'),
    cochraneStacked: toBase64('assets/cochrane-stacked-opt.png'),
    cochraneCircle: toBase64('assets/cochrane-circle-opt.png'),
  },
  iconsSquare: {
    scholar: toBase64('assets/icons/scholar.png'),
    orcid: toBase64('assets/icons/orcid.png'),
    scopus: toBase64('assets/icons/scopus.png'),
    researchgate: toBase64('assets/icons/researchgate.png'),
    publons: toBase64('assets/icons/publons.png'),
    linkedin: toBase64('assets/icons/linkedin.png'),
    instagram: toBase64('assets/icons/instagram.png'),
  },
  iconsCircle: {
    scholar: toBase64('assets/icons_circle/scholar.png'),
    orcid: toBase64('assets/icons_circle/orcid.png'),
    scopus: toBase64('assets/icons_circle/scopus.png'),
    researchgate: toBase64('assets/icons_circle/researchgate.png'),
    publons: toBase64('assets/icons_circle/publons.png'),
    linkedin: toBase64('assets/icons_circle/linkedin.png'),
    instagram: toBase64('assets/icons_circle/instagram.png'),
  },
  contactIcons: {
    mail: toBase64('assets/icons/mail.png'),
    phone: toBase64('assets/icons/phone.png'),
    mailMinimal: toBase64('assets/icons/mail_minimal.png'),
    phoneMinimal: toBase64('assets/icons/phone_minimal.png'),
  }
};

fs.writeFileSync('assets/data_uris.json', JSON.stringify(data, null, 2));
console.log('Base64 data updated with contact icons!');

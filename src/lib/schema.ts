export function generateMusicSchemaJSON() {
  return {
    '@context': 'https://schema.org',
    '@type': 'MusicSchool',
    name: 'Centro Musical LB',
    description: 'Escola de música com aulas individualizadas em Porto Alegre',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Av. José Gertun',
      addressLocality: 'Porto Alegre',
      addressRegion: 'RS',
      addressCountry: 'BR'
    },
    telephone: '+55 (51) 81027996',
    url: 'https://centromusicallb.com.br',
    openingHours: ['Tu-Fr 09:00-20:00', 'Sa 09:00-17:00'],
    priceRange: 'R$'
  }
}

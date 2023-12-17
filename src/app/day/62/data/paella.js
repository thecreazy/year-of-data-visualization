const paellaData = [
  { id: 'ESP', value: 100, name: 'Spain' },
  { id: 'USA', value: 9, name: 'America' },
  { id: 'FRA', value: 33, name: 'France' },
  { id: 'BEL', value: 29, name: 'Belgium' },
  { id: 'NCL', value: 28, name: 'New Caledonia' },
  { id: 'PRI', value: 24, name: 'Puerto Rico' },
  { id: 'GBR', value: 24, name: 'United Kingdom' },
  { id: 'URY', value: 23, name: 'Uruguay' },
  { id: 'LUX', value: 22, name: 'Luxembourg' },
  { id: 'AUS', value: 22, name: 'Australia' },
  { id: 'ITA', value: 22, name: 'Italy' },
  { id: 'CHE', value: 20, name: 'Switzerland' },
  { id: 'JPN', value: 20, name: 'Japan' },
  { id: 'PRY', value: 19, name: 'Paraguay' },
  { id: 'CHL', value: 18, name: 'Chile' },
  { id: 'CUB', value: 18, name: 'Cuba' },
  { id: 'COL', value: 18, name: 'Colombia' },
  { id: 'NLD', value: 17, name: 'Netherlands' },
  { id: 'SWE', value: 17, name: 'Sweden' },
  { id: 'PRT', value: 17, name: 'Portugal' },
  { id: 'ARG', value: 17, name: 'Argentina' },
  { id: 'SEN', value: 17, name: 'Senegal' },
  { id: 'IRL', value: 16, name: 'Ireland' },
  { id: 'PAN', value: 16, name: 'Panama' },
  { id: 'DOM', value: 15, name: 'Dominican Republic' },
  { id: 'FIN', value: 14, name: 'Finland' },
  { id: 'MDG', value: 14, name: 'Madagascar' },
  { id: 'VEN', value: 14, name: 'Venezuela' },
  { id: 'NZL', value: 14, name: 'New Zealand' },
  { id: 'MEX', value: 13, name: 'Mexico' },
  { id: 'AUT', value: 13, name: 'Austria' },
  { id: 'ZAF', value: 13, name: 'South Africa' },
  { id: 'ISL', value: 13, name: 'Iceland' },
  { id: 'DNK', value: 12, name: 'Denmark' },
  { id: 'NOR', value: 12, name: 'Norway' },
  { id: 'GAB', value: 12, name: 'Gabon' },
  { id: 'CRI', value: 11, name: 'Costa Rica' },
  { id: 'LBN', value: 11, name: 'Lebanon' },
  { id: 'GTM', value: 11, name: 'Guatemala' },
  { id: 'PHL', value: 11, name: 'Philippines' },
  { id: 'MAR', value: 11, name: 'Morocco' },
  { id: 'CAN', value: 11, name: 'Canada' },
  { id: 'DEU', value: 11, name: 'Germany' },
  { id: 'SLV', value: 11, name: 'El Salvador' },
  { id: 'NIC', value: 10, name: 'Nicaragua' },
  { id: 'EST', value: 10, name: 'Estonia' },
  { id: 'ECU', value: 10, name: 'Ecuador' },
  { id: 'CZE', value: 10, name: 'Czechia' },
  { id: 'HND', value: 10, name: 'Honduras' },
  { id: 'TUN', value: 10, name: 'Tunisia' },
  { id: 'BOL', value: 10, name: 'Bolivia' },
  { id: 'ROU', value: 10, name: 'Romania' },
  { id: 'LTU', value: 9, name: 'Lithuania' },
  { id: 'DZA', value: 9, name: 'Algeria' },
  { id: 'CYP', value: 9, name: 'Cyprus' },
  { id: 'BGR', value: 9, name: 'Bulgaria' },
  { id: 'NAM', value: 9, name: 'Namibia' },
  { id: 'SVN', value: 9, name: 'Slovenia' },
  { id: 'BRA', value: 9, name: 'Brazil' },
  { id: 'LVA', value: 9, name: 'Latvia' },
  { id: 'HUN', value: 8, name: 'Hungary' },
  { id: 'SVK', value: 8, name: 'Slovakia' },
  { id: 'ISR', value: 7, name: 'Israel' },
  { id: 'ARE', value: 7, name: 'United Arab Emirates' },
  { id: 'PER', value: 6, name: 'Peru' },
  { id: 'BHS', value: 6, name: 'Bahamas' },
  { id: 'QAT', value: 6, name: 'Qatar' },
  { id: 'GRC', value: 6, name: 'Greece' },
  { id: 'POL', value: 6, name: 'Poland' },
  { id: 'RUS', value: 5, name: 'Russia' },
  { id: 'UKR', value: 5, name: 'Ukraine' },
  { id: 'HRV', value: 5, name: 'Croatia' },
  { id: 'BLR', value: 5, name: 'Belarus' },
  { id: 'HTI', value: 4, name: 'Haiti' },
  { id: 'JAM', value: 4, name: 'Jamaica' },
  { id: 'TWN', value: 4, name: 'Taiwan' },
  { id: 'MDA', value: 4, name: 'Moldova' },
  { id: 'MNE', value: 4, name: 'Montenegro' },
  { id: 'MRT', value: 4, name: 'Mauritania' },
  { id: 'ALB', value: 4, name: 'Albania' },
  { id: 'BEN', value: 4, name: 'Benin' },
  { id: 'AGO', value: 4, name: 'Angola' },
  { id: 'MYS', value: 3, name: 'Malaysia' },
  { id: 'SRB', value: 3, name: 'Serbia' },
  { id: 'ARM', value: 3, name: 'Armenia' },
  { id: 'KWT', value: 3, name: 'Kuwait' },
  { id: 'CMR', value: 3, name: 'Cameroon' },
  { id: 'OMN', value: 3, name: 'Oman' },
  { id: 'UZB', value: 3, name: 'Uzbekistan' },
  { id: 'MOZ', value: 3, name: 'Mozambique' },
  { id: 'JOR', value: 3, name: 'Jordan' },
  { id: 'GEO', value: 2, name: 'Georgia' },
  { id: 'LAO', value: 2, name: 'Laos' },
  { id: 'SAU', value: 2, name: 'Saudi Arabia' },
  { id: 'KHM', value: 2, name: 'Cambodia' },
  { id: 'KAZ', value: 2, name: 'Kazakhstan' },
  { id: 'BIH', value: 2, name: 'Bosnia & Herzegovina' },
  { id: 'THA', value: 2, name: 'Thailand' },
  { id: 'LBY', value: 2, name: 'Libya' },
  { id: 'LKA', value: 2, name: 'Sri Lanka' },
  { id: 'GHA', value: 2, name: 'Ghana' },
  { id: 'OSA', value: 2, name: 'Kosovo' },
  { id: 'AZE', value: 2, name: 'Azerbaijan' },
  { id: 'MNG', value: 1, name: 'Mongolia' },
  { id: 'KGZ', value: 1, name: 'Kyrgyzstan' },
  { id: 'KEN', value: 1, name: 'Kenya' },
  { id: 'EGY', value: 1, name: 'Egypt' },
  { id: 'NPL', value: 1, name: 'Nepal' },
  { id: 'NGA', value: 1, name: 'Nigeria' },
  { id: 'SYR', value: 1, name: 'Syria' },
  { id: 'IDN', value: 1, name: 'Indonesia' },
  { id: 'CHN', value: 1, name: 'China' },
  { id: 'BGD', value: 1, name: 'Bangladesh' },
  { id: 'VNM', value: 1, name: 'Vietnam' },
  { id: 'IRQ', value: 1, name: 'Iraq' },
  { id: 'PAK', value: 1, name: 'Pakistan' },
  { id: 'IND', value: 1, name: 'India' },
  { id: 'YEM', value: 1, name: 'Yemen' },
  { id: 'ETH', value: 1, name: 'Ethiopia' },
  { id: 'SDN', value: 1, name: 'Sudan' },
  { id: 'IRN', value: 0, name: 'Iran' },
];
export default paellaData;
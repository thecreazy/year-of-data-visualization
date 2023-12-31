const elonMuskData = [
  { id: 'ZAF', value: 100, name: 'South Africa' },
  { id: 'USA', value: 79, name: 'America' },
  { id: 'MNG', value: 97, name: 'Mongolia' },
  { id: 'NGA', value: 96, name: 'Nigeria' },
  { id: 'TKM', value: 89, name: 'Turkmenistan' },
  { id: 'NPL', value: 88, name: 'Nepal' },
  { id: 'ZWE', value: 82, name: 'Zimbabwe' },
  { id: 'NAM', value: 81, name: 'Namibia' },
  { id: 'BWA', value: 80, name: 'Botswana' },
  { id: 'CAN', value: 80, name: 'Canada' },
  { id: 'BTN', value: 80, name: 'Bhutan' },
  { id: 'UZB', value: 75, name: 'Uzbekistan' },
  { id: 'GHA', value: 73, name: 'Ghana' },
  { id: 'PNG', value: 73, name: 'Papua New Guinea' },
  { id: 'NZL', value: 70, name: 'New Zealand' },
  { id: 'GNQ', value: 70, name: 'Equatorial Guinea' },
  { id: 'AUS', value: 69, name: 'Australia' },
  { id: 'MWI', value: 66, name: 'Malawi' },
  { id: 'ISL', value: 66, name: 'Iceland' },
  { id: 'LSO', value: 64, name: 'Lesotho' },
  { id: 'BEN', value: 63, name: 'Benin' },
  { id: 'IRL', value: 63, name: 'Ireland' },
  { id: 'UGA', value: 61, name: 'Uganda' },
  { id: 'KGZ', value: 61, name: 'Kyrgyzstan' },
  { id: 'NOR', value: 60, name: 'Norway' },
  { id: 'AFG', value: 60, name: 'Afghanistan' },
  { id: 'GRL', value: 59, name: 'Greenland' },
  { id: 'CYP', value: 59, name: 'Cyprus' },
  { id: 'GEO', value: 59, name: 'Georgia' },
  { id: 'SWE', value: 58, name: 'Sweden' },
  { id: 'RWA', value: 57, name: 'Rwanda' },
  { id: 'KAZ', value: 57, name: 'Kazakhstan' },
  { id: 'KEN', value: 57, name: 'Kenya' },
  { id: 'ZMB', value: 56, name: 'Zambia' },
  { id: 'SLE', value: 56, name: 'Sierra Leone' },
  { id: 'EST', value: 56, name: 'Estonia' },
  { id: 'TGO', value: 56, name: 'Togo' },
  { id: 'CUB', value: 55, name: 'Cuba' },
  { id: 'ARE', value: 55, name: 'United Arab Emirates' },
  { id: 'OSA', value: 55, name: 'Kosovo' },
  { id: 'LBN', value: 54, name: 'Lebanon' },
  { id: 'SOM', value: 53, name: 'Somalia' },
  { id: 'ALB', value: 53, name: 'Albania' },
  { id: 'IND', value: 52, name: 'India' },
  { id: 'LBR', value: 52, name: 'Liberia' },
  { id: 'UKR', value: 51, name: 'Ukraine' },
  { id: 'TJK', value: 51, name: 'Tajikistan' },
  { id: 'GBR', value: 50, name: 'United Kingdom' },
  { id: 'BDI', value: 50, name: 'Burundi' },
  { id: 'GMB', value: 50, name: 'Gambia' },
  { id: 'LKA', value: 49, name: 'Sri Lanka' },
  { id: 'LUX', value: 49, name: 'Luxembourg' },
  { id: 'ETH', value: 49, name: 'Ethiopia' },
  { id: 'CHE', value: 48, name: 'Switzerland' },
  { id: 'BHS', value: 48, name: 'Bahamas' },
  { id: 'GUY', value: 48, name: 'Guyana' },
  { id: 'PAK', value: 48, name: 'Pakistan' },
  { id: 'CZE', value: 47, name: 'Czechia' },
  { id: 'BLZ', value: 46, name: 'Belize' },
  { id: 'CMR', value: 46, name: 'Cameroon' },
  { id: 'DNK', value: 45, name: 'Denmark' },
  { id: 'BRN', value: 45, name: 'Brunei' },
  { id: 'JAM', value: 44, name: 'Jamaica' },
  { id: 'MDA', value: 44, name: 'Moldova' },
  { id: 'ARM', value: 44, name: 'Armenia' },
  { id: 'BGD', value: 44, name: 'Bangladesh' },
  { id: 'AUT', value: 44, name: 'Austria' },
  { id: 'ISR', value: 44, name: 'Israel' },
  { id: 'LVA', value: 44, name: 'Latvia' },
  { id: 'RUS', value: 43, name: 'Russia' },
  { id: 'DEU', value: 43, name: 'Germany' },
  { id: 'HTI', value: 43, name: 'Haiti' },
  { id: 'NLD', value: 43, name: 'Netherlands' },
  { id: 'IRN', value: 43, name: 'Iran' },
  { id: 'BGR', value: 43, name: 'Bulgaria' },
  { id: 'SVN', value: 43, name: 'Slovenia' },
  { id: 'TZA', value: 42, name: 'Tanzania' },
  { id: 'PHL', value: 42, name: 'Philippines' },
  { id: 'BLR', value: 42, name: 'Belarus' },
  { id: 'AZE', value: 42, name: 'Azerbaijan' },
  { id: 'NER', value: 42, name: 'Niger' },
  { id: 'ROU', value: 42, name: 'Romania' },
  { id: 'QAT', value: 42, name: 'Qatar' },
  { id: 'FJI', value: 42, name: 'Fiji' },
  { id: 'ESH', value: 42, name: 'Western Sahara' },
  { id: 'AGO', value: 41, name: 'Angola' },
  { id: 'VUT', value: 41, name: 'Vanuatu' },
  { id: 'FIN', value: 41, name: 'Finland' },
  { id: 'SLB', value: 40, name: 'Solomon Islands' },
  { id: 'PRT', value: 40, name: 'Portugal' },
  { id: 'PRI', value: 39, name: 'Puerto Rico' },
  { id: 'KHM', value: 39, name: 'Cambodia' },
  { id: 'MOZ', value: 39, name: 'Mozambique' },
  { id: 'TCD', value: 39, name: 'Chad' },
  { id: 'HRV', value: 38, name: 'Croatia' },
  { id: 'CAF', value: 38, name: 'Central African Republic' },
  { id: 'MNE', value: 37, name: 'Montenegro' },
  { id: 'BEL', value: 37, name: 'Belgium' },
  { id: 'BFA', value: 36, name: 'Burkina Faso' },
  { id: 'GIN', value: 36, name: 'Guinea' },
  { id: 'MYS', value: 36, name: 'Malaysia' },
  { id: 'MDG', value: 36, name: 'Madagascar' },
  { id: 'PRY', value: 36, name: 'Paraguay' },
  { id: 'LTU', value: 35, name: 'Lithuania' },
  { id: 'PAN', value: 35, name: 'Panama' },
  { id: 'DJI', value: 35, name: 'Djibouti' },
  { id: 'OMN', value: 34, name: 'Oman' },
  { id: 'SRB', value: 33, name: 'Serbia' },
  { id: 'SUR', value: 33, name: 'Suriname' },
  { id: 'MLI', value: 33, name: 'Mali' },
  { id: 'HND', value: 33, name: 'Honduras' },
  { id: 'CRI', value: 33, name: 'Costa Rica' },
  { id: 'GAB', value: 33, name: 'Gabon' },
  { id: 'MRT', value: 33, name: 'Mauritania' },
  { id: 'KWT', value: 32, name: 'Kuwait' },
  { id: 'SVK', value: 32, name: 'Slovakia' },
  { id: 'POL', value: 32, name: 'Poland' },
  { id: 'SDS', value: 31, name: 'South Sudan' },
  { id: 'ITA', value: 31, name: 'Italy' },
  { id: 'GRC', value: 30, name: 'Greece' },
  { id: 'MAR', value: 30, name: 'Morocco' },
  { id: 'MEX', value: 30, name: 'Mexico' },
  { id: 'FRA', value: 30, name: 'France' },
  { id: 'TUN', value: 30, name: 'Tunisia' },
  { id: 'URY', value: 30, name: 'Uruguay' },
  { id: 'BIH', value: 29, name: 'Bosnia & Herzegovina' },
  { id: 'DOM', value: 29, name: 'Dominican Republic' },
  { id: 'NIC', value: 28, name: 'Nicaragua' },
  { id: 'BRA', value: 28, name: 'Brazil' },
  { id: 'SEN', value: 28, name: 'Senegal' },
  { id: 'JOR', value: 27, name: 'Jordan' },
  { id: 'ESP', value: 27, name: 'Spain' },
  { id: 'CHL', value: 27, name: 'Chile' },
  { id: 'IRQ', value: 27, name: 'Iraq' },
  { id: 'EGY', value: 25, name: 'Egypt' },
  { id: 'ARG', value: 25, name: 'Argentina' },
  { id: 'SLV', value: 25, name: 'El Salvador' },
  { id: 'LAO', value: 24, name: 'Laos' },
  { id: 'IDN', value: 24, name: 'Indonesia' },
  { id: 'GTM', value: 24, name: 'Guatemala' },
  { id: 'TWN', value: 24, name: 'Taiwan' },
  { id: 'COL', value: 23, name: 'Colombia' },
  { id: 'LBY', value: 23, name: 'Libya' },
  { id: 'PER', value: 22, name: 'Peru' },
  { id: 'NCL', value: 22, name: 'New Caledonia' },
  { id: 'HUN', value: 22, name: 'Hungary' },
  { id: 'BOL', value: 21, name: 'Bolivia' },
  { id: 'ECU', value: 21, name: 'Ecuador' },
  { id: 'SAU', value: 21, name: 'Saudi Arabia' },
  { id: 'DZA', value: 20, name: 'Algeria' },
  { id: 'SYR', value: 18, name: 'Syria' },
  { id: 'YEM', value: 16, name: 'Yemen' },
  { id: 'VEN', value: 15, name: 'Venezuela' },
  { id: 'SDN', value: 15, name: 'Sudan' },
  { id: 'VNM', value: 15, name: 'Vietnam' },
  { id: 'THA', value: 12, name: 'Thailand' },
  { id: 'JPN', value: 12, name: 'Japan' },
  { id: 'CHN', value: 10, name: 'China' },
];
export default elonMuskData;

const topDomains = [
  'com', 'net', 'org', 'gov', 'mil', 'edu', 'biz', 'info', 'pro', 'name', 'coop', 'travel', 'xxx', 'idv', 'aero',
  'museum', 'mobi', 'asia', 'tel', 'int', 'post', 'jobs', 'cat', 'ac', 'ad', 'ae', 'af', 'ag', 'ai', 'al', 'am', 'an',
  'ao', 'aq', 'ar', 'as', 'at', 'au', 'aw', 'az', 'ba', 'bb', 'bd', 'be', 'bf', 'bg', 'bh', 'bi', 'bj', 'bm', 'bn',
  'bo', 'br', 'bs', 'bt', 'bv', 'bw', 'by', 'bz', 'ca', 'cc', 'cd', 'cf', 'cg', 'ch', 'ci', 'ck', 'cl', 'cm', 'cn',
  'co', 'cr', 'cu', 'cv', 'cx', 'cy', 'cz', 'de', 'dj', 'dk', 'dm', 'do', 'dz', 'ec', 'ee', 'eg', 'eh', 'er', 'es',
  'et', 'eu', 'fi', 'fj', 'fk', 'fm', 'fo', 'fr', 'ga', 'gd', 'ge', 'gf', 'gg', 'gh', 'gi', 'gl', 'gm', 'gn', 'gp',
  'gq', 'gr', 'gs', 'gt', 'gu', 'gw', 'gy', 'hk', 'hm', 'hn', 'hr', 'ht', 'hu', 'id', 'ie', 'il', 'im', 'in', 'io',
  'iq', 'ir', 'is', 'it', 'je', 'jm', 'jo', 'jp', 'ke', 'kg', 'kh', 'ki', 'km', 'kn', 'kp', 'kr', 'kw', 'ky', 'kz',
  'la', 'lb', 'lc', 'li', 'lk', 'lr', 'ls', 'ma', 'mc', 'md', 'me', 'mg', 'mh', 'mk', 'ml', 'mm', 'mn', 'mo', 'mp',
  'mq', 'mr', 'ms', 'mt', 'mu', 'mv', 'mw', 'mx', 'my', 'mz', 'na', 'nc', 'ne', 'nf', 'ng', 'ni', 'nl', 'no', 'np',
  'nr', 'nu', 'nz', 'om', 'pa', 'pe', 'pf', 'pg', 'ph', 'pk', 'pl', 'pm', 'pn', 'pr', 'ps', 'pt', 'pw', 'py', 'qa',
  're', 'ro', 'ru', 'rw', 'sa', 'sb', 'sc', 'sd', 'se', 'sg', 'sh', 'si', 'sj', 'sk', 'sm', 'sn', 'so', 'sr', 'st',
  'sv', 'sy', 'sz', 'tc', 'td', 'tf', 'tg', 'th', 'tj', 'tk', 'tl', 'tm', 'tn', 'to', 'tp', 'tr', 'tt', 'tv', 'tw',
  'tz', 'ua', 'ug', 'uk', 'um', 'us', 'uy', 'uz', 'va', 'vc', 've', 'vg', 'vi', 'vn', 'vu', 'wf', 'ws', 'ye', 'yt',
  'yu', 'yr', 'za', 'zm', 'zw', 'accountant', 'club', 'coach', 'college', 'company', 'construction', 'consulting',
  'contractors', 'cooking', 'corp', 'credit', 'creditcard', 'dance', 'dealer', 'democrat', 'dental', 'dentist',
  'design', 'diamonds', 'direct', 'doctor', 'drive', 'eco', 'education', 'energy', 'engineer', 'engineering',
  'equipment', 'events', 'exchange', 'expert', 'express', 'faith', 'farm', 'farmers', 'fashion', 'finance', 'financial',
  'fish', 'fit', 'fitness', 'flights', 'florist', 'flowers', 'food', 'football', 'forsale', 'furniture', 'game',
  'games', 'garden', 'gmbh', 'golf', 'health', 'healthcare', 'hockey', 'holdings', 'holiday', 'home', 'hospital',
  'hotel', 'hotels', 'house', 'inc', 'industries', 'insurance', 'insure', 'investments', 'islam', 'jewelry', 'justforu',
  'kid', 'kids', 'law', 'lawyer', 'legal', 'lighting', 'limited', 'live', 'llc', 'llp', 'loft', 'ltd', 'ltda',
  'managment', 'marketing', 'media', 'medical', 'men', 'money', 'mortgage', 'moto', 'motorcycles', 'music',
  'mutualfunds', 'ngo', 'partners', 'party', 'pharmacy', 'photo', 'photography', 'photos', 'physio', 'pizza',
  'plumbing', 'press', 'prod', 'productions', 'radio', 'rehab', 'ren', 'rent', 'repair', 'report', 'republican',
  'restaurant', 'room', 'rugby', 'safe', 'sale', 'sarl', 'save', 'school', 'secure', 'security', 'services', 'shoes',
  'show', 'soccer', 'spa', 'sport', 'sports', 'spot', 'srl', 'storage', 'studio', 'tattoo', 'taxi', 'team', 'tech',
  'technology', 'thai', 'tips', 'tour', 'tours', 'toys', 'trade', 'trading', 'travelers', 'university', 'vacations',
  'ventures', 'versicherung', 'vet', 'wedding', 'wine', 'winners', 'work', 'works', 'yachts', 'zone', 'archi',
  'architect', 'casa', 'contruction', 'estate', 'haus', 'immo', 'immobilien', 'mls', 'academy', 'arab', 'bible',
  'care', 'catholic', 'charity', 'christmas', 'church', 'community', 'contact', 'degree', 'foundation', 'gay', 'halal',
  'hiv', 'indiands', 'institute', 'irish', 'kiwi', 'latino', 'mba', 'meet', 'memorial', 'phd', 'prof', 'schule',
  'science', 'singles', 'social', 'swiss', 'trust', 'auction', 'best', 'bid', 'boutique', 'center', 'cheap', 'compare',
  'coupon', 'coupons', 'deal', 'deals', 'discount', 'free', 'gift', 'gold', 'gratis', 'hot', 'kaufen', 'luxe', 'luxury',
  'market', 'moda', 'pay', 'promo', 'qpon', 'review', 'reviews', 'rocks', 'shop', 'shopping', 'store', 'tienda', 'top',
  'watch', 'zero', 'bar', 'bio', 'cafe', 'catering', 'coffee', 'diet', 'eat', 'kitchen', 'menu', 'organic', 'pub',
  'rest', 'vodka', 'abudhabi', 'africa', 'alsace', 'amsterdam', 'barcelona', 'bayern', 'berlin', 'boats', 'booking',
  'boston', 'brussels', 'budapest', 'caravan', 'catalonia', 'city', 'cologne', 'corsica', 'country', 'cruise',
  'cruises', 'doha', 'dubai', 'durban', 'earth', 'fly', 'fun', 'gent', 'guide', 'hamburg', 'helsinki', 'hoteles', 'ist',
  'istanbul', 'joburg', 'koeln', 'land', 'london', 'madrid', 'map', 'melbourne', 'miami', 'moscow', 'nagoya', 'nrw',
  'nyc', 'osaka', 'paris', 'persiangulf', 'place', 'quebec', 'reise', 'reisen', 'rio', 'roma', 'ruhr', 'saarland',
  'stockholm', 'sydney', 'taipei', 'tickets', 'tirol', 'tokyo', 'town', 'vegas', 'wales', 'wien', 'world', 'yokohama',
  'zuerich', 'art', 'auto', 'autos', 'baby', 'band', 'baseball', 'beats', 'beauty', 'beknown', 'bike', 'book',
  'broadway', 'car', 'cars', 'cool', 'cricket', 'dad', 'date', 'dating', 'dog', 'family', 'fan', 'fans', 'film',
  'final', 'fishing', 'futbol', 'gallery', 'guru', 'hair', 'hiphop', 'horse', 'icu', 'joy', 'life', 'lifestyle', 'like',
  'living', 'lol', 'makeup', 'moi', 'mom', 'movie', 'movistar', 'pet', 'pets', 'pics', 'pictures', 'play', 'poker',
  'rodeo', 'run', 'salon', 'ski', 'skin', 'smile', 'song', 'soy', 'star', 'style', 'surf', 'tatoo', 'tennis', 'theater',
  'theatre', 'tunes', 'vip', 'wed', 'win', 'winners', 'yoga', 'analytics', 'antivirus', 'app', 'blog', 'call', 'camera',
  'channel', 'chat', 'click', 'cloud', 'computer', 'data', 'dev', 'digital', 'docs', 'domains', 'dot', 'download',
  'email', 'foo', 'forum', 'graphics', 'help', 'host', 'hosting', 'idn', 'link', 'mail', 'mobile', 'network', 'online',
  'open', 'page', 'phone', 'pin', 'search', 'site', 'software', 'airforce', 'army', 'black', 'blue', 'box', 'buzz',
  'day', 'discover', 'donuts', 'exposed', 'fast', 'finish', 'fire', 'fyi', 'global', 'green', 'here', 'how',
  'international', 'ira', 'jetzt', 'jot', 'kim', 'navy', 'new', 'news', 'next', 'ninja', 'now', 'one', 'ooo', 'pink',
  'plus', 'red', 'solar', 'today', 'weather', 'wow', 'wtf', 'xyz', 'abogado', 'adult', 'anquan', 'aquitaine',
  'attorney', 'audible', 'autoinsurance', 'banque', 'bargains', 'bcn', 'beer', 'bet', 'bingo', 'blackfriday',
  'bom', 'boo', 'bot', 'broker', 'builders', 'business', 'bzh', 'cab', 'cal', 'cam', 'camp', 'cancerresearch',
  'capetown', 'carinsurance', 'casino', 'ceo', 'cfp', 'circle', 'claims', 'cleaning', 'clothing', 'codes', 'condos',
  'connectors', 'courses', 'cpa', 'cymru', 'dds', 'delivery', 'desi', 'directory', 'diy', 'dvr', 'ecom', 'enterprises',
  'esq', 'eus', 'fail', 'feedback', 'financialaid', 'frontdoor', 'fund', 'gal', 'gifts', 'gives', 'giving', 'glass',
  'gop', 'got', 'gripe', 'grocery', 'group', 'guitars', 'hangout', 'homegoods', 'homes', 'homesense', 'ing', 'ink',
  'juegos', 'kinder', 'kosher', 'kyoto', 'lat', 'lease', 'lgbt', 'liason', 'loan', 'loans', 'locker', 'lotto', 'love',
  'maison', 'markets', 'matrix', 'meme', 'mov', 'okinawa', 'ong', 'onl', 'origins', 'parts', 'patch', 'pid', 'ping',
  'porn', 'progressive', 'properties', 'property', 'protection', 'racing', 'read', 'realestate', 'realtor', 'recipes',
  'rentals', 'sex', 'sexy', 'shopyourway', 'shouji', 'silk', 'solutions', 'stroke', 'study', 'sucks', 'supplies',
  'supply', 'tax', 'tires', 'total', 'training', 'translations', 'travelersinsurcance', 'viajes', 'villas', 'vin',
  'vivo', 'voyage', 'vuelos', 'wang', 'watches', '测试', '集团', '在线', '公益', '公司', '移动', '我爱你', '商标', '商城',
  '中文网', '中信', '中国', '中國', '測試', '网络', '香港', '台湾', '台灣', '机构', '组织机构', '世界', '网址', '游戏',
  '新加坡', 'परीक्षा', '한국', 'ভারত', 'موقع', 'বাংলা', 'москва', 'испытание', 'қаз', 'онлайн', 'сайт', 'срб', '테스트',
  'орг', '삼성', 'சிங்கப்பூர்', 'дети', 'мкд', 'טעסט', 'భారత్', 'ලංකා', 'ભારત', 'भारत', 'آزمایشی', 'பரிட்சை', 'संगठन',
  'укр', 'δοκιμή', 'إختبار', 'мон', 'الجزائر', 'عمان', 'ایران', 'امارات', 'بازار', 'پاکستان', 'الاردن', 'بھارت',
  'المغرب', 'السعودية', 'سودان', 'مليسيا', 'شبكة', 'გე', 'ไทย', 'سورية', 'рф', 'تونس', 'みんな', 'ਭਾਰਤ', 'مصر', 'قطر',
  'இலங்கை', 'இந்தியா', 'فلسطين', 'xin', 'wiki'
]

const protocol = '(?:https?:\\/\\/)?'
const domainsArr = [
  `[a-zA-Z0-9-_.]{1,256}\\.(?:${topDomains.join('|')})`,
  'localhost',
  '(?:(?:25[0-5]|2[0-4]\\d|(?:1\\d{2}|[1-9]?\\d))\\.){3}(?:25[0-5]|2[0-4]\\d|(?:1\\d{2}|[1-9]?\\d))'
]
const port = '(?::(?:[1-9][0-9]{0,3}|[1-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]{1}|6553[0-5]))?'
const other = '[-a-zA-Z0-9%_+.~#?&/=]*'

export const safeUrlRegExp = new RegExp(`${protocol}${domainsArr[ 0 ]}\\b${other}`, 'g')
export const exactMatchSafeUrlRegExp = new RegExp(`^${safeUrlRegExp.source}$`)

const urlRegExp = new RegExp(`${protocol}(?:${domainsArr.join('|')})\\b${port}\\b${other}`, 'g')
export const exactMatchUrlRegExp = new RegExp(`^${urlRegExp.source}$`)

export default urlRegExp

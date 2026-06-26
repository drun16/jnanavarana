/**
 * Gallery data — extend this array to add more historical photographs.
 * All image URLs verified via Wikimedia Commons API (public domain / CC0).
 */

function getThumbUrl(fullUrl, width = 440) {
  const marker = '/wikipedia/commons/';
  const idx = fullUrl.indexOf(marker);
  if (idx === -1) return fullUrl;
  const path = fullUrl.slice(idx + marker.length);
  const filename = path.split('/').pop();
  return `https://upload.wikimedia.org/wikipedia/commons/thumb/${path}/${width}px-${filename}`;
}

export const galleryCategories = [
  'All',
  'Childhood',
  'Education',
  'Politics',
  'Constitution',
  'Buddhism',
  'Family',
  'Public Meetings',
];

const items = [
  {
    id: 1,
    year: '1891',
    title: 'Birth',
    caption: 'Early Life in Mhow',
    description:
      'Bhimrao Ramji Ambedkar was born on 14 April 1891 in Mhow, Central Provinces (now Madhya Pradesh), into a Mahar Dalit family.',
    category: 'Childhood',
    fullImage: 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Dr._Babasaheb_Ambedkar_as_young.jpg',
    attribution: 'Wikimedia Commons — CC0 Public Domain',
    alt: 'Young Dr. Babasaheb Ambedkar',
  },
  {
    id: 2,
    year: '1913',
    title: 'Columbia University Era',
    caption: 'Scholar & Thinker',
    description:
      'Ambedkar studied at Columbia University in New York, earning an MA in 1915 and later a PhD for his thesis on economics and caste in India.',
    category: 'Education',
    fullImage: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Dr._Bhimrao_Ambedkar.jpg',
    attribution: 'Wikimedia Commons — Public Domain',
    alt: 'Portrait of Dr. B. R. Ambedkar',
  },
  {
    id: 3,
    year: '1922',
    title: 'Barrister at Gray\'s Inn',
    caption: 'Studies Abroad',
    description:
      'On 28 June 1922, Dr. Ambedkar was called to the Bar at Gray\'s Inn, London, completing his legal education alongside his economic studies.',
    category: 'Education',
    fullImage: 'https://upload.wikimedia.org/wikipedia/commons/d/dc/Dr_B_R_Ambedkar_as_Barrister_in_1922.jpg',
    attribution: 'Wikimedia Commons — CC0 Public Domain',
    alt: 'Dr. B. R. Ambedkar as Barrister in 1922',
  },
  {
    id: 4,
    year: '1927',
    title: 'Social Movement',
    caption: 'Addressing the People',
    description:
      'Ambedkar led mass movements including the Mahad Satyagraha (1927), asserting Dalits\' rights to dignity, water access, and social equality.',
    category: 'Politics',
    fullImage: 'https://upload.wikimedia.org/wikipedia/commons/7/79/Ambedkar_on_the_podium_about_to_address_his_people.jpg',
    attribution: 'Wikimedia Commons — Public Domain',
    alt: 'Dr. Ambedkar on the podium about to address his people',
  },
  {
    id: 5,
    year: '1930s',
    title: 'Political Leadership',
    caption: 'With Followers',
    description:
      'Organized and mobilized communities across India, building political consciousness among oppressed classes through the Independent Labour Party and beyond.',
    category: 'Politics',
    fullImage: 'https://upload.wikimedia.org/wikipedia/commons/3/3d/Babasaheb_with_his_followers_from_Panjab.jpg',
    attribution: 'Wikimedia Commons — Public Domain',
    alt: 'Babasaheb Ambedkar with his followers from Punjab',
  },
  {
    id: 6,
    year: '1946',
    title: 'Chief Architect',
    caption: 'Framing the Constitution',
    description:
      'Recognized as the chief architect of the Indian Constitution, Ambedkar articulated the vision of a sovereign democratic republic.',
    category: 'Constitution',
    fullImage: 'https://upload.wikimedia.org/wikipedia/commons/9/9e/Dr._Babasaheb_Ambedkar_chief_architect_of_the_Indian_Constitution_-_1946.jpg',
    attribution: 'Wikimedia Commons — Public Domain',
    alt: 'Dr. Ambedkar, chief architect of the Indian Constitution, 1946',
  },
  {
    id: 7,
    year: '1947–49',
    title: 'Drafting the Constitution',
    caption: 'Constitution Committee Work',
    description:
      'As Chairman of the Drafting Committee, Ambedkar meticulously reviewed constitutional papers during the making of the Constitution of India.',
    category: 'Constitution',
    fullImage: 'https://upload.wikimedia.org/wikipedia/commons/7/7f/Dr._Ambedkar_persuing_papers_during_the_making_of_Constitution_of_India.jpg',
    attribution: 'Wikimedia Commons — Public Domain',
    alt: 'Dr. Ambedkar reviewing papers during the making of the Constitution',
  },
  {
    id: 8,
    year: '1949',
    title: 'Presenting the Constitution',
    caption: 'Final Draft to Rajendra Prasad',
    description:
      'On 25 November 1949, as Chairman of the Drafting Committee, he presented the final draft of the Indian Constitution to Dr. Rajendra Prasad.',
    category: 'Constitution',
    fullImage: 'https://upload.wikimedia.org/wikipedia/commons/a/ad/Dr._Babasaheb_Ambedkar%2C_chairman_of_the_Drafting_Committee%2C_presenting_the_final_draft_of_the_Indian_Constitution_to_Dr._Rajendra_Prasad_on_25_November%2C_1949.jpg',
    attribution: 'Wikimedia Commons — CC0 Public Domain',
    alt: 'Dr. Ambedkar presenting the Constitution draft to Dr. Rajendra Prasad',
  },
  {
    id: 9,
    year: '1949',
    title: 'Constitution Handover',
    caption: 'Historic Moment',
    description:
      'Dr. Ambedkar, Chairperson of the Drafting Committee, after presenting the Constitution to the first President Dr. Rajendra Prasad.',
    category: 'Constitution',
    fullImage: 'https://upload.wikimedia.org/wikipedia/commons/6/6c/Dr._B._R._Ambedkar%2C_Chairperson%2C_Drafting_Committee_of_Indian_Constitution_after_presenting_the_constitution_to_the_first_President_Dr._Rajendra_Prasad.jpg',
    attribution: 'Wikimedia Commons — CC0 Public Domain',
    alt: 'Dr. Ambedkar after presenting the Constitution to President Rajendra Prasad',
  },
  {
    id: 10,
    year: '1950s',
    title: 'Public Meetings',
    caption: 'Delivering a Speech',
    description:
      'Continued to address large public gatherings on social justice, constitutional rights, and the welfare of marginalized communities.',
    category: 'Public Meetings',
    fullImage: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Dr._Babasaheb_Ambedkar_delivering_speech.jpg',
    attribution: 'Wikimedia Commons — Public Domain',
    alt: 'Dr. Babasaheb Ambedkar delivering a speech',
  },
  {
    id: 11,
    year: '1951',
    title: 'Social Reform',
    caption: 'Champion of Equality',
    description:
      'Advocated for the Hindu Code Bill and continued his relentless campaign against untouchability and caste discrimination.',
    category: 'Politics',
    fullImage: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Babasaheb_Ambedkar.jpg',
    attribution: 'Wikimedia Commons — Public Domain',
    alt: 'Dr. Babasaheb Ambedkar portrait',
  },
  {
    id: 12,
    year: '1950s',
    title: 'Rajgruh, Bombay',
    caption: 'Personal Residence',
    description:
      'At Rajgruh, his residence in Dadar, Bombay, Ambedkar worked alongside associates on writings and social reform initiatives.',
    category: 'Family',
    fullImage: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Dr._Babadaheb_Ambedkar_with_his_associate_at_%27Rajgruh%27_-_his_residence_at_Dadar%2C_Bombay.jpg',
    attribution: 'Wikimedia Commons — Public Domain',
    alt: 'Dr. Ambedkar with associate at Rajgruh, Dadar, Bombay',
  },
  {
    id: 13,
    year: '1955',
    title: 'Buddhist Movement',
    caption: 'Embracing Buddhism',
    description:
      'Published "The Buddha and His Dhamma" and prepared for mass conversion, seeing Buddhism as a path to liberation and equality.',
    category: 'Buddhism',
    fullImage: 'https://upload.wikimedia.org/wikipedia/commons/1/17/Dr._Ambedkar_during_conversion_ceremony_at_Nagpur.jpg',
    attribution: 'Wikimedia Commons — CC0 Public Domain',
    alt: 'Dr. Ambedkar during conversion ceremony at Nagpur with Savita Ambedkar',
  },
  {
    id: 14,
    year: '1956',
    title: 'Conversion to Buddhism',
    caption: 'Deeksha at Nagpur',
    description:
      'On 14 October 1956, along with hundreds of thousands of followers, Ambedkar formally converted to Buddhism at Deekshabhoomi, Nagpur.',
    category: 'Buddhism',
    fullImage: 'https://upload.wikimedia.org/wikipedia/commons/1/1c/Dr._B._R._Ambedkar_giving_22_vows_after_renouncing_Hinduism_at_Deekshabhoomi%2C_Nagpur.jpg',
    attribution: 'Wikimedia Commons — CC0 Public Domain',
    alt: 'Dr. Ambedkar giving 22 vows at Deekshabhoomi, Nagpur',
  },
  {
    id: 15,
    year: '1956',
    title: 'Dhamma Deeksha Speech',
    caption: 'Final Public Address',
    description:
      'Delivered his historic speech during the Dhamma Deeksha ceremony at Nagpur — among his last major public addresses before his passing on 6 December 1956.',
    category: 'Public Meetings',
    fullImage: 'https://upload.wikimedia.org/wikipedia/commons/5/54/Dr._Ambedkar_delivering_a_speech_during_%27Dhamma_Deeksha%27%2C_Nagpur_14_October_1956.jpg',
    attribution: 'Wikimedia Commons — Public Domain',
    alt: 'Dr. Ambedkar delivering speech during Dhamma Deeksha at Nagpur',
  },
  {
    id: 16,
    year: '1956',
    title: 'With Bhante Chandramani',
    caption: 'Buddhist Conversion Ceremony',
    description:
      'Dr. Ambedkar with Bhante Chandramani during the conversion ceremony at Deekshabhoomi, Nagpur on 14 October 1956.',
    category: 'Buddhism',
    fullImage: 'https://upload.wikimedia.org/wikipedia/commons/a/a2/Dr._Ambedkar_with_Bhante_Chandramani_during_conversion_at_Deekshabhoomi%2C_Nagpur_14_October_1956.jpg',
    attribution: 'Wikimedia Commons — Public Domain',
    alt: 'Dr. Ambedkar with Bhante Chandramani during conversion at Deekshabhoomi',
  },
  {
    id: 17,
    year: '1956',
    title: 'Family at Deeksha',
    caption: 'With Dr. Savita Ambedkar',
    description:
      'Dr. Ambedkar with his wife Dr. Savita Ambedkar during the Dhamma Deeksha ceremony at Nagpur on 14 October 1956.',
    category: 'Family',
    fullImage: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Dr._Ambedkar_and_Dr._Savita_Ambedkar_at_%27Dhamma_Deeksha%27_ceremony_at_Nagpur%2C_1956.jpg',
    attribution: 'Wikimedia Commons — Public Domain',
    alt: 'Dr. Ambedkar and Dr. Savita Ambedkar at Dhamma Deeksha ceremony',
  },
  {
    id: 18,
    year: '1906',
    title: 'Ramabai Ambedkar',
    caption: 'Family Life',
    description:
      'Ambedkar married Ramabai in 1906. She supported his educational pursuits despite financial hardships until her passing in 1935.',
    category: 'Family',
    fullImage: 'https://upload.wikimedia.org/wikipedia/commons/f/fe/Ramabai.jpg',
    attribution: 'Wikimedia Commons — Public Domain',
    alt: 'Ramabai Ambedkar, wife of Dr. B. R. Ambedkar',
  },
];

export const galleryItems = items.map((item) => ({
  ...item,
  image: getThumbUrl(item.fullImage),
}));

/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Synotis',
    position: 'Data Scientist',
    url: 'https://www.synotis.ch',
    startDate: '2024-02-01',
    summary: 'TODO',
    highlights: [
      'TODO',
    ],
  },
  {
    name: 'biped.ai',
    position: 'Machine Learning Engineer',
    url: 'https://www.biped.ai',
    startDate: '2021-12-01',
    endDate: '2023-04-30',
    summary: 'TODO',
    highlights: [
      'Responsible for the computer vision pipeline of the biped software (Python with NumPy, OpenCV, pandas, scikit-learn, open3d)',
      'Developed a 3D obstacle detection system running in real time on embedded hardware with 99% accuracy within 2m of the user',
      'Developed a ground detection system running in real time on embedded hardware with 95% accuracy within 5m of the user',
      'Responsible for optimising, maintaining and deploying custom-trained image detection models',
      'Helped bring the biped device from prototype to market',
      'Assembled and tested hardware',
    ],
  },
  {
    name: 'Swisscom',
    position: 'Master Thesis Intern',
    url: 'https://www.swisscom.ch/en/about/innovation.html',
    startDate: '2020-09-01',
    endDate: '2021-03-31',
    summary: 'TODO',
    highlights: [
      'Developed a customer embedding to predict customer satisfaction under dataset shift, using different methods (random forests, deep learning, MLPs, autoencoders, semi - supervised learning, ...) and different libraries (pandas, dask, pytorch, numpy, scikit-learn).',
    ],
  },
  {
    name: 'Swisscom',
    position: 'Machine Learning Intern',
    url: 'https://www.swisscom.ch/en/about/innovation.html',
    startDate: '2020-02-01',
    endDate: '2020-08-31',
    summary: 'TODO',
    highlights: [
      'Developed an indoor localisation method using the 4G/LTE network and CNNs (pytorch).',
      'Wrote a paper about it',
    ],
  },
  {
    name: 'Intel',
    position: 'Product Engineering Intern',
    url: 'https://www.intel.com',
    startDate: '2018-03-01',
    endDate: '2018-06-30',
    summary: 'TODO',
    highlights: [
      'Developed an Electron app (with ES6 and Vue.js) for database management, visualization and analysis.',
      'Developed software in Python to test the integrity of a REST API.',
    ],
  },
];

export default work;

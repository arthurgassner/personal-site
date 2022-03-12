// TODO Add OpenCSI paper and some school projects
const data = [
  {
    title: 'Dumble.ch',
    subtitle: 'A 1-letter version of the popular word-guessing game wordle',
    link: 'http://www.dumble.ch',
    image: '/images/projects/dumble.png',
    date: '2022-02-25',
    desc:
      'A joke on the popular word-guessing game that too the world by '
      + 'storm in February 2022: wordle. It\'s absurd and made me laugh.',
  },
  {
    title: 'OpenCSI: An Open-Source Dataset for Indoor Localization Using CSI-Based Fingerprinting',
    subtitle: 'The open-sourcing of a dataset used for indoor localization using the LTE network',
    link: 'https://arxiv.org/abs/2104.07963',
    image: '/images/projects/openCSI.png',
    date: '2021-04-16',
    desc:
      'Using information extracted from the wireless signal of an LTE tower, one can try to estimate '
      + 'its position. This paper open-sources the first dataset of this kind using '
      + 'the Channel State Information (CSI) to do just that.',
  },
  {
    title: 'There is No Plan Bee Without Them',
    subtitle: 'A data story about bees',
    link: 'https://indigo-vanguard.github.io/',
    image: '/images/projects/bee.png',
    date: '2020-06-01',
    desc:
      'Created a data story exploiting bee-related datasets to better understand beekeeper '
      + 'migratory patterns and honey trades around the world.',
  },
  {
    title: 'Design, development, and testing of an adaptive drone test rig',
    subtitle: 'How to make drones fly better',
    link: '/pdfs/ArthurGASSNER_DroneTestRig.pdf',
    image: '/images/projects/DroneTestRig.gif',
    date: '2020-01-01',
    desc:
      'We designed and built from scratch a 3D-printed test rig for multicopters, '
      + 'as well as the tuning software (based on ROS and PX4, written in Python)'
      + 'to assist the user in the tuning of the drone’s control parameters.',
  },
];

export default data;

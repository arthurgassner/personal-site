export interface Skill {
  title: string;
  competency: number;
  category: string[];
}

export interface Category {
  name: string;
  color: string;
}

const skills: Skill[] = [
  {
    title: 'Bash',
    competency: 2,
    category: ['Tools', 'Languages'],
  },
  {
    title: 'Azure',
    competency: 2,
    category: ['Industrialisation', 'Tools', 'Cloud'],
  },
  {
    title: 'FastAPI',
    competency: 5,
    category: ['Industrialisation', 'Python'],
  },
  {
    title: 'Git',
    competency: 5,
    category: ['Tools'],
  },
  {
    title: 'GitHub/GitLab',
    competency: 5,
    category: ['Tools'],
  },
  {
    title: 'Docker',
    competency: 4,
    category: ['Industrialisation', 'Tools', 'Data Engineering'],
  },
  {
    title: 'Numpy',
    competency: 5,
    category: ['Data Science', 'Data Engineering', 'Python', 'ML Engineering'],
  },
  {
    title: 'Linux',
    competency: 5,
    category: ['Industrialisation', 'ML Engineering'],
  },
  {
    title: 'Numba',
    competency: 3,
    category: ['Data Science', 'Data Engineering', 'Python'],
  },
  {
    title: 'Tensorflow + Keras',
    competency: 2,
    category: ['ML Engineering', 'Python'],
  },
  {
    title: 'PyTorch',
    competency: 3,
    category: ['ML Engineering', 'Python'],
  },
  {
    title: 'Jupyter',
    competency: 5,
    category: ['Data Science', 'Python'],
  },
  {
    title: 'Python',
    competency: 5,
    category: ['Languages', 'Python', 'ML Engineering'],
  },
  {
    title: 'Data Visualization',
    competency: 3,
    category: ['Data Science'],
  },
  {
    title: 'Classical Machine Learning',
    competency: 5,
    category: ['ML Engineering'],
  },
  {
    title: 'Computer Vision',
    competency: 5,
    category: ['ML Engineering'],
  },
  {
    title: 'NLP',
    competency: 5,
    category: ['ML Engineering'],
  },
  {
    title: 'Time Series Forecasting',
    competency: 4,
    category: ['ML Engineering'],
  },
  {
    title: 'Pandas',
    competency: 5,
    category: ['Data Engineering', 'ML Engineering', 'Python'],
  },
  {
    title: 'Matplotlib/Seaborn',
    competency: 5,
    category: ['Data Science', 'ML Engineering', 'Python'],
  },
  {
    title: 'Scikit-Learn',
    competency: 5,
    category: ['Data Engineering', 'ML Engineering', 'Python'],
  },
  {
    title: 'Black',
    competency: 5,
    category: ['Tools', 'Python'],
  },
  {
    title: 'Soft Skills',
    competency: 5,
    category: ['Tools', 'Python'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be === to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors: string[] = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories: Category[] = Array.from(new Set(skills.flatMap(({ category }) => category)))
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };

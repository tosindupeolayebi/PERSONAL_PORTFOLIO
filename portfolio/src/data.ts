export const me = {
  name: 'Oluwatosin Dupe-Olayebi',
  first: 'tosin',
  matric: '24120111115', // also add name + matric number to README.md
  email: 'tosinolayebi@gmail.com',
  whatsapp: '2349034594057', 
  github: 'https://github.com/tosindupeolayebi',
}

export type Project = {
  slug: string
  name: string
  short: string
  image: string 
  stack: string[]
  status?: string
  live?: string
  full: string
  problem: string
  features: string[]
  shots: string[]
  learned: string[]
  
}

export const projects: Project[] = [
  {
    slug: 'voteforgreen',
    name: 'Vote for Green',
    short: 'A central hub for everything Nigerians need to know about the candidates, key issues, and political developments ahead of the 2027 elections',
    image: '/images/project1.png',
    stack: ['React', 'JavaScript', 'CSS'],
    status:"Still in progess, new features coming soon" ,
    full: 'Vote for Green is a free, politically neutral voter-information website for Nigeria’s 2027 elections. I built it for first-time voters, students, traders and anyone who wants plain, trustworthy facts about their choices without party messaging, and I designed it around phones and slow data connections. Visitors get a countdown and calendar of the dates that matter, a step-by-step guide to registering and voting that links to INEC’s official services, and a searchable glossary of election terms in everyday language.',
    problem: 'Nigeria’s 2027 election has 18 presidential tickets, and the key dates have already been revised once during the cycle. The information voters need is scattered across news sites, social media and official documents written in legal language, and much of it comes from partisan sources or is heavy to load on a slow phone connection. First-time voters in particular struggle to get simple answers: when is the election, how do I vote, and who is on the ballot? Vote for Green gathers those answers in one lightweight, neutral place, with every claim traced to an official source.',
    features: [
      'Countdown and calendar of the dates leading up to the 16 January and 6 February 2027 elections',
      'Identical, randomly ordered candidate panels, each opening a profile with party, running mate and links to official manifestos',
      'Results from the 2023 and 2019 presidential elections, organised by year',
      'Neutrality by design: one template for every candidate, a two-source rule beyond INEC data, a public corrections log, and no ads, accounts or tracking'
    ],
    shots: [],
    learned: [
    'Treating neutrality as a design requirement: random ordering, identical panels and uniform grayscale photos so no candidate gets a visual advantage.',
    'Putting primary sources first. Election dates were revised during the cycle, and older coverage still cited the earlier presidential date. I learned to take dates from INEC’s official timetable and to require a second independent source for any claim beyond INEC’s own data.',
  'Verifying figures instead of copying them. Different outlets reported slightly different vote totals for the same candidates in 2023, so the site only publishes numbers taken from INEC’s official declaration.',
  'Letting research shape the des3ign. Checking the candidate counts for the last two elections showed 73 presidential candidates in 2019 against 18 in 2023, so the upcoming election gets full candidate panels while past elections are presented as results tables.',
  'Showing gaps honestly. Every candidate has the same fields, and anything unconfirmed reads “Not yet verified” instead of being guessed or left blank, so missing information is never mistaken for a judgement.',
  'Checking licences and limits before committing to tools. I replaced two commercial fonts with open-licence alternatives, planned an official-source approach to candidate photos and party logos because of copyright, and compared hosting plans on traffic limits before choosing a host for election-week traffic.'
    ],
  },
  {
    slug: 'customer_segmentation',
    name: 'Customer Segmentation Predictor',
    short: 'A machine learning model that predicts which of four customer segments a new customer belongs to, using age, profession, spending score and family size.',
    image: '/images/segmentation-chart.jpg',
    stack: ['Python', 'Pandas', 'Scikit-learn', 'Seaborn', 'Jupyter'],
    live: 'https://github.com/tosindupeolayebi/customer_segmentation.git',
    full: 'I analysed a dataset of about 10,700 customers and trained models to predict each customer’s segment (A, B, C or D). The notebook covers cleaning the data, exploring it with charts, encoding categories, training two classifiers, and predicting the segment of a brand new customer.',
    problem: 'Businesses sort customers into segments to decide who to market to and how. Doing it by hand is slow and inconsistent, so I tested whether a model could predict the segment from basic customer details.',
    features: [
      'Missing values filled using the mode for categories and the median for numbers',
      'Spending score charted by segment to explore patterns',
      'Logistic regression and decision tree models compared',
      'Predicts the segment for a new customer from their details'
    ],
    shots: [
    '/images/segmentation-data.jpg',
    '/images/segmentation-cleaning.jpg',
    '/images/segmentation-chart.jpg',
    '/images/segmentation-model.jpg',
    '/images/segmentation-prediction.jpg'
    ],
    learned: [
    'Clean data comes first. Missing values in several columns would have skewed the model if I had ignored them.',
    'Models only understand numbers, so encoding categories properly is what makes the text columns usable.',
    'Testing on data the model hasn’t seen is the only honest way to measure it, which is why I split 80/20.',
    'A simple model can beat a "smarter" one on the day, so comparing two is better than trusting one.',
    'About 50% accuracy showed me that results need honest reading, and that better features would be my next step.'
  ],
  },
  {
    slug: 'sante-diagnostics',
    name: 'Santé Diagnostics LIMS',
    short: 'A Java desktop system for a diagnostics lab where customers order tests, staff track samples and upload results, and admins manage everything.',
    image: '/images/sante-dashboard.jpg',
    stack: ['Java', 'JavaFX', 'PostgreSQL', 'JDBC', 'Jakarta Mail', 'CSS'],
    full: 'Santé Diagnostics is a laboratory information system built as a JavaFX desktop app on a PostgreSQL database. It has three kinds of user, each with their own dashboard: customers, lab attendants and administrators. Customers can browse the test catalogue, request tests and follow active tests with a live countdown to the estimated result, then collect finished results from a secure vault. Lab attendants can confirm payments, track samples through the lab and upload results. Administrators manage users, build the test catalogue and review an audit trail of what happened and who did it. Accounts in this system are protected by email verification, password recovery, and a forced password change on first login.',
    problem: 'In many labs, test requests, payments, samples and results are handled on paper or in separate places. Customers have no idea how long they will wait, and results can be lost. This system keeps the whole journey in one place, from ordering a test to collecting the result.',
    features: [
    'Three roles with separate dashboards: customer, lab attendant, admin',
    'Test catalogue and test builder',
    'Test requests with payment confirmation by staff',
    'Sample tracking from collection to result',
    'Result upload and a private result vault for customers',
    'Active tests with a live countdown',
    'Audit trail of actions',
    'Email verification, password recovery and forced password change'
    ],
    shots: [
      '/images/sante-requests.jpg', 
      '/images/sante-password.jpg'
    ],
    learned: [
    'Splitting the code into DAO, service and controller layers keeps a big app manageable.',
    'Different roles need different screens, so access control has to be designed in from the start.',
    'An audit trail is important in healthcare, where you must know who changed what.',
    'Designing the database around a real workflow made the screens much easier to build.'
    ],
  },
]

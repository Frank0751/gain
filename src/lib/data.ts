// Centralized data for the GAIN website

export const ORG = {
  name: "Green Awareness International",
  shortName: "GAIN",
  tagline: "Leading the front for a sustainable, clean, and green environment",
  bio: "Youth-led initiative that empowers young people and communities to drive environmental change in Ghana.",
  mission:
    "To lead the front for a sustainable, clean, and green environment by empowering young people with skills development and public education.",
  vision:
    "A world where every young person takes priority in making the environment a safe place to live.",
  founded: "2023",
  location: "Ghana, West Africa",
  email: "edmond.amankwaah@gmail.com",
  phone: "0558343278",
  whatsapp: "233558343278",
  contactPerson: "Edmond Amankwaah",
  socials: {
    x: "https://x.com/Gainghana",
    facebook: "https://web.facebook.com/greenawarenessinternational",
    instagram: "https://www.instagram.com/gainghana/",
    linkedin: "https://www.linkedin.com/company/greenawarenessinternational",
  },
}

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Programmes", href: "/programmes" },
  { label: "Impact", href: "/impact" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
  { label: "Events", href: "/events" },
  { label: "Volunteer", href: "/volunteer" },
  { label: "Donate", href: "/donate" },
  { label: "Contact", href: "/contact" },
  { label: "FAQ", href: "/faq" },
]

export const NAV_GROUPS = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "About Us", href: "/about", description: "Our story, mission, vision, and team" },
      { label: "Our Impact", href: "/impact", description: "Statistics, stories, and campaign progress" },
      { label: "Gallery", href: "/gallery", description: "Photos from our campaigns and drives" },
      { label: "FAQ", href: "/faq", description: "Frequently asked questions" },
    ],
  },
  {
    label: "Programmes",
    href: "/programmes",
    children: [
      { label: "Our Programmes", href: "/programmes", description: "Skills, Education, and Environmental Action" },
      { label: "Volunteer", href: "/volunteer", description: "Join our volunteer team" },
      { label: "Partner With Us", href: "/partner", description: "Corporate, school, and NGO partnerships" },
      { label: "Events", href: "/events", description: "Upcoming and past events" },
    ],
  },
  {
    label: "Resources",
    href: "/resources",
    children: [
      { label: "Blog", href: "/blog", description: "Articles and educational content" },
      { label: "Resources", href: "/resources", description: "Guides, toolkits, and downloads" },
      { label: "Impact Report", href: "/impact-report", description: "Annual report with financials" },
      { label: "Transparency", href: "/transparency", description: "Financial and governance info" },
      { label: "Careers", href: "/careers", description: "Job openings at GAIN" },
    ],
  },
  { label: "Contact", href: "/contact" },
]

export const STATS = [
  { value: 5000, suffix: "+", label: "Trees Planted", description: "Across reforestation drives in Ghana" },
  { value: 12000, suffix: "+", label: "People Reached", description: "Through education and campaigns" },
  { value: 350, suffix: "+", label: "Volunteers", description: "Young changemakers activated" },
  { value: 45, suffix: "+", label: "Campaigns", description: "Community clean-ups and awareness drives" },
]

export const PARTNERS = [
  { name: "Ghana Education Service", description: "Partnering on school environmental clubs" },
  { name: "Forestry Commission", description: "Tree-planting and reforestation support" },
  { name: "Youth Climate Council", description: "Youth mobilization and advocacy" },
  { name: "Zoomlion Ghana", description: "Waste management and clean-up logistics" },
  { name: "Environmental Protection Agency", description: "Environmental compliance and guidance" },
  { name: "Local Communities", description: "Community leaders and schools across Ghana" },
]

export const PARTNER_BENEFITS = [
  {
    title: "Brand Visibility",
    description: "Showcase your commitment to sustainability on our website, social media, and event materials with your logo and brand mentions.",
  },
  {
    title: "Employee Engagement",
    description: "Involve your team in meaningful volunteer activities like tree planting, beach clean-ups, and education drives.",
  },
  {
    title: "Impact Reporting",
    description: "Receive regular impact reports showing exactly how your partnership contributed to environmental change in Ghana.",
  },
  {
    title: "Tax Benefits",
    description: "As a registered NGO, partnerships with GAIN may qualify for tax deductions under Ghanaian law.",
  },
  {
    title: "Community Connection",
    description: "Build authentic connections with local communities and young people across Ghana through our programmes.",
  },
  {
    title: "CSR Fulfillment",
    description: "Fulfill your Corporate Social Responsibility goals with measurable, transparent environmental impact.",
  },
]

export const PARTNER_TYPES = [
  {
    title: "Corporate Partners",
    description: "Businesses committed to environmental sustainability through financial support, employee volunteering, or in-kind donations.",
    examples: ["Financial sponsorship of campaigns", "Employee volunteer days", "In-kind donations (tools, materials, refreshments)", "Cause marketing partnerships"],
  },
  {
    title: "School Partners",
    description: "Schools and educational institutions wanting to bring environmental education and action to their students.",
    examples: ["Environmental club support", "School-based tree planting", "Student workshops and talks", "Curriculum integration guidance"],
  },
  {
    title: "NGO Partners",
    description: "Non-governmental organizations working in complementary areas who want to collaborate for greater impact.",
    examples: ["Joint campaign organizing", "Resource and knowledge sharing", "Co-funded projects", "Advocacy alliances"],
  },
  {
    title: "Community Partners",
    description: "Community leaders, traditional authorities, and local organizations working to improve their environment.",
    examples: ["Community clean-up campaigns", "Local tree-planting drives", "Community education sessions", "Waste management initiatives"],
  },
]

export const RESOURCES = [
  {
    title: "Tree Planting Guide for Communities",
    description: "A step-by-step guide on how to organize and execute a successful community tree-planting drive, from species selection to aftercare.",
    type: "PDF Guide",
    category: "Environmental Action",
    size: "2.4 MB",
    pages: 12,
  },
  {
    title: "Environmental Education Curriculum",
    description: "A ready-to-use curriculum for schools covering climate change, waste management, and sustainable living for students aged 10-18.",
    type: "PDF Curriculum",
    category: "Education",
    size: "5.1 MB",
    pages: 48,
  },
  {
    title: "Beach Clean-Up Toolkit",
    description: "Everything you need to organize a beach clean-up: checklists, safety guidelines, waste sorting instructions, and reporting templates.",
    type: "PDF Toolkit",
    category: "Environmental Action",
    size: "1.8 MB",
    pages: 8,
  },
  {
    title: "Plastic Waste Reduction Handbook",
    description: "Practical tips and strategies for individuals, households, and businesses to reduce plastic waste and adopt sustainable alternatives.",
    type: "PDF Handbook",
    category: "Sustainability",
    size: "3.2 MB",
    pages: 24,
  },
  {
    title: "Green Entrepreneurship Starter Pack",
    description: "A guide for young people interested in starting green businesses, including business plan templates and funding opportunities in Ghana.",
    type: "PDF Guide",
    category: "Youth Skills",
    size: "4.0 MB",
    pages: 36,
  },
  {
    title: "GAIN Annual Impact Report 2024",
    description: "Our comprehensive annual report detailing campaigns, impact metrics, financials, and stories from the communities we served in 2024.",
    type: "PDF Report",
    category: "Reports",
    size: "8.7 MB",
    pages: 52,
  },
  {
    title: "Anti-Galamsey Advocacy Brief",
    description: "An educational brief on the dangers of illegal mining (galamsey) and advocacy strategies for communities affected by water pollution.",
    type: "PDF Brief",
    category: "Advocacy",
    size: "1.5 MB",
    pages: 10,
  },
  {
    title: "Volunteer Handbook",
    description: "Essential information for GAIN volunteers including code of conduct, safety procedures, and roles and responsibilities.",
    type: "PDF Handbook",
    category: "Volunteering",
    size: "2.0 MB",
    pages: 16,
  },
  {
    title: "School Environmental Club Starter Kit",
    description: "A complete guide for students and teachers to start and run an environmental club in their school, including activity ideas and meeting templates.",
    type: "PDF Kit",
    category: "Education",
    size: "2.8 MB",
    pages: 20,
  },
]

export const IMPACT_REPORT_DATA = {
  year: "2024",
  title: "Annual Impact Report 2024",
  summary: "In 2024, Green Awareness International expanded its reach across Ghana, planting thousands of trees, educating communities, and empowering young people to drive environmental change. This report details our campaigns, financials, and the stories behind the numbers.",
  highlights: [
    { metric: "1,200", label: "Trees Planted", description: "Across 8 reforestation drives in Greater Accra, Eastern, and Ashanti Regions" },
    { metric: "4,500", label: "Students Educated", description: "Through school visits and environmental education sessions" },
    { metric: "180", label: "Volunteers Engaged", description: "Active volunteers participating in campaigns and workshops" },
    { metric: "24", label: "Campaigns Run", description: "Including clean-ups, tree plantings, and education drives" },
    { metric: "850kg", label: "Waste Removed", description: "Plastic and debris collected from beaches and communities" },
    { metric: "15", label: "Schools Partnered", description: "Schools hosting GAIN environmental clubs and sessions" },
  ],
  financials: [
    { category: "Tree Planting Programmes", percentage: 35 },
    { category: "Environmental Education", percentage: 25 },
    { category: "Clean-Up Campaigns", percentage: 20 },
    { category: "Skills Development", percentage: 12 },
    { category: "Operations and Admin", percentage: 8 },
  ],
  milestones: [
    {
      quarter: "Q1 2024",
      title: "Expanded to Eastern Region",
      description: "Launched our first tree-planting campaign in the Eastern Region, reaching 3 new communities.",
    },
    {
      quarter: "Q2 2024",
      title: "Schools Programme Launch",
      description: "Officially launched our schools environmental education programme with 5 partner schools.",
    },
    {
      quarter: "Q3 2024",
      title: "Beach Clean-Up Series",
      description: "Ran 6 beach clean-up campaigns along the Accra coastline, removing over 500kg of waste.",
    },
    {
      quarter: "Q4 2024",
      title: "Skills Workshop Series",
      description: "Launched our green skills workshop series, training 60 young people in sustainable practices.",
    },
  ],
}

export const TEAM_EXTENDED = [
  {
    name: "Edmond Amankwaah",
    role: "Founder and Executive Director",
    bio: "A passionate environmental advocate dedicated to empowering young people to lead sustainable change in Ghana.",
    image: "/images/gain/gain-profile.jpg",
    socials: { email: "edmond.amankwaah@gmail.com", x: "https://x.com/Gainghana" },
  },
  {
    name: "GAIN Volunteer Team",
    role: "Youth Changemakers",
    bio: "A dedicated network of young volunteers who power our campaigns, clean-ups, and education drives across Ghana.",
    image: "/images/gain/gain-media-6.jpg",
    socials: { email: "edmond.amankwaah@gmail.com", instagram: "https://www.instagram.com/gainghana/" },
  },
  {
    name: "Community Partners",
    role: "Local Leaders and Schools",
    bio: "The schools, community leaders, and local organizations who work alongside us to create lasting impact.",
    image: "/images/gain/gain-media-2.jpg",
    socials: { email: "edmond.amankwaah@gmail.com", facebook: "https://web.facebook.com/greenawarenessinternational" },
  },
]

export const CAREERS = [
  {
    title: "Programmes Coordinator",
    type: "Full-time",
    location: "Accra, Ghana",
    department: "Programmes",
    description: "Lead the planning and execution of our environmental programmes including tree planting, clean-ups, and education drives. Work closely with volunteers, partners, and communities.",
    requirements: [
      "Bachelor's degree in Environmental Science, Development Studies, or related field",
      "3+ years experience in project coordination or programme management",
      "Strong organizational and communication skills",
      "Passion for environmental sustainability and youth empowerment",
    ],
    deadline: "Rolling basis",
  },
  {
    title: "Environmental Education Officer",
    type: "Full-time",
    location: "Greater Accra, Ghana",
    department: "Education",
    description: "Develop and deliver environmental education sessions in schools and communities. Create curriculum materials and train volunteer facilitators.",
    requirements: [
      "Degree in Education, Environmental Science, or related field",
      "Teaching or facilitation experience preferred",
      "Ability to create engaging educational content",
      "Willingness to travel to schools across Greater Accra",
    ],
    deadline: "Rolling basis",
  },
  {
    title: "Communications and Social Media Officer",
    type: "Full-time",
    location: "Accra, Ghana (Hybrid)",
    department: "Communications",
    description: "Manage GAIN's social media presence, create content, and tell the stories of our impact. Develop communications strategies for campaigns and events.",
    requirements: [
      "Degree in Communications, Journalism, Marketing, or related field",
      "2+ years experience in social media management",
      "Content creation skills (writing, photography, basic video editing)",
      "Knowledge of environmental issues in Ghana",
    ],
    deadline: "Rolling basis",
  },
  {
    title: "Monitoring and Evaluation Officer",
    type: "Contract",
    location: "Accra, Ghana",
    department: "Impact",
    description: "Design and implement M&E frameworks for our programmes. Collect, analyze, and report on impact data to measure effectiveness and inform strategy.",
    requirements: [
      "Degree in Statistics, Development Studies, or related field",
      "Experience in M&E for NGO or development projects",
      "Strong data analysis and reporting skills",
      "Knowledge of environmental indicators preferred",
    ],
    deadline: "Rolling basis",
  },
  {
    title: "Volunteer Coordinator",
    type: "Part-time",
    location: "Accra, Ghana",
    department: "Programmes",
    description: "Recruit, train, and manage GAIN's volunteer network. Coordinate volunteer schedules for events and campaigns and ensure a positive volunteer experience.",
    requirements: [
      "Degree in Human Resources, Social Work, or related field",
      "Experience in volunteer management or community mobilization",
      "Strong interpersonal and organizational skills",
      "Weekend availability for events",
    ],
    deadline: "Rolling basis",
  },
  {
    title: "Fundraising and Partnerships Officer",
    type: "Full-time",
    location: "Accra, Ghana",
    department: "Development",
    description: "Develop and implement fundraising strategies. Build and maintain relationships with donors, partners, and corporate sponsors.",
    requirements: [
      "Degree in Business, Marketing, Development Studies, or related field",
      "3+ years experience in fundraising or business development",
      "Strong networking and relationship-building skills",
      "Experience with grant writing preferred",
    ],
    deadline: "Rolling basis",
  },
]

export const TRANSPARENCY_DATA = {
  summary: "At GAIN, we believe transparency builds trust. We are committed to open reporting of our finances, impact, and operations. Here is how we use the resources entrusted to us by our donors and partners.",
  registration: {
    entity: "Green Awareness International",
    type: "Registered Nongovernmental Organization (NGO)",
    country: "Ghana",
    status: "Active and in good standing",
  },
  funding: [
    { source: "Individual Donations", percentage: 45, description: "Contributions from individual supporters via Paystack, mobile money, and bank transfer" },
    { source: "Corporate Partnerships", percentage: 30, description: "Sponsorships and CSR partnerships with businesses in Ghana" },
    { source: "Grants", percentage: 15, description: "Grants from foundations and international organizations" },
    { source: "In-kind Donations", percentage: 7, description: "Donated goods, services, and volunteer time" },
    { source: "Event Revenue", percentage: 3, description: "Proceeds from fundraising events and campaigns" },
  ],
  spending: [
    { category: "Programme Activities", percentage: 72, description: "Tree planting, clean-ups, education sessions, skills workshops" },
    { category: "Community Engagement", percentage: 12, description: "Community outreach, volunteer support, and event logistics" },
    { category: "Operations", percentage: 10, description: "Office, transport, communications, and technology" },
    { category: "Governance and Compliance", percentage: 4, description: "Audit, legal, registration, and reporting" },
    { category: "Fundraising", percentage: 2, description: "Costs associated with raising funds and managing donors" },
  ],
  commitments: [
    "We publish an annual impact report with detailed financials",
    "We undergo independent financial audits annually",
    "We maintain a registered settlement bank account as required by Paystack",
    "We provide donation receipts to all donors upon request",
    "We are accountable to our communities, partners, and regulators",
    "We welcome questions about our finances and operations",
  ],
  policies: [
    { name: "Financial Management Policy", description: "Guidelines for budgeting, accounting, and financial reporting" },
    { name: "Procurement Policy", description: "Procedures for purchasing goods and services transparently" },
    { name: "Whistleblower Protection Policy", description: "Protection for those who report concerns about our operations" },
    { name: "Conflict of Interest Policy", description: "Guidelines for managing conflicts of interest among staff and board" },
    { name: "Child Protection Policy", description: "Safeguarding measures for working with children and schools" },
    { name: "Data Protection Policy", description: "How we handle and protect personal data in compliance with Ghanaian law" },
  ],
}

export const CAMPAIGNS = [
  {
    title: "Green Ghana Day 2025",
    goal: 1000,
    raised: 647,
    unit: "trees",
    description: "Help us plant 1,000 trees across selected communities in Ghana this rainy season.",
    image: "/images/gain/gain-media-1.jpg",
    deadline: "June 20, 2025",
  },
  {
    title: "Clean Coast Initiative",
    goal: 500,
    raised: 312,
    unit: "volunteers",
    description: "Mobilizing 500 volunteers to clean up beaches along Ghana's coastline.",
    image: "/images/gain/gain-media-4.jpg",
    deadline: "August 2, 2025",
  },
  {
    title: "Schools Green Education Drive",
    goal: 2000,
    raised: 1450,
    unit: "students",
    description: "Reaching 2,000 students with environmental education across Greater Accra.",
    image: "/images/gain/gain-media-2.jpg",
    deadline: "December 2025",
  },
]

export const VOLUNTEER_ROLES = [
  {
    title: "Tree Planting Volunteer",
    commitment: "Weekends",
    location: "Accra, Kumasi, Eastern Region",
    description: "Join our reforestation drives. Help plant, water, and nurture seedlings in communities across Ghana.",
  },
  {
    title: "Beach Clean-Up Crew",
    commitment: "Monthly",
    location: "Accra coastline",
    description: "Help remove plastic and debris from Ghana's beaches. All tools and refreshments provided.",
  },
  {
    title: "Schools Education Facilitator",
    commitment: "Weekdays",
    location: "Greater Accra schools",
    description: "Deliver environmental education sessions to students. Training and materials provided.",
  },
  {
    title: "Social Media Advocate",
    commitment: "Remote",
    location: "Anywhere in Ghana",
    description: "Help spread our message online. Create content, share campaigns, and engage our community.",
  },
  {
    title: "Event Coordinator",
    commitment: "Flexible",
    location: "Accra",
    description: "Help plan and execute our campaigns, workshops, and community drives.",
  },
  {
    title: "Fundraising Ambassador",
    commitment: "Flexible",
    location: "Anywhere",
    description: "Help us raise funds to support our programmes. Organize drives, reach donors, and spread the word.",
  },
]

export const TESTIMONIALS = [
  {
    quote:
      "GAIN came to our school and taught us about the environment. Now I lead a tree-planting club with 30 students. They showed us that young people can make a real difference.",
    name: "Ama Serwaa",
    role: "Student, Accra High School",
    image: "/images/gain/gain-media-2.jpg",
  },
  {
    quote:
      "After the beach clean-up, my community started separating waste. GAIN did not just clean our beach, they changed how we think about our environment.",
    name: "Kwesi Mensah",
    role: "Community Leader, Labadi",
    image: "/images/gain/gain-media-4.jpg",
  },
  {
    quote:
      "The skills workshop taught me how to turn plastic waste into sellable crafts. I now have a small business and employ two other young people. GAIN gave me a future.",
    name: "Akosua Asante",
    role: "Green Entrepreneur, Tema",
    image: "/images/gain/gain-media-6.jpg",
  },
  {
    quote:
      "Volunteering with GAIN gave me purpose. I have planted over 200 trees this year and trained other young people to do the same. We are building a greener Ghana together.",
    name: "Yaw Boateng",
    role: "GAIN Volunteer, Kumasi",
    image: "/images/gain/gain-media-1.jpg",
  },
  {
    quote:
      "As a partner, we have seen GAIN deliver real results. Their youth-focused approach to environmental education is exactly what Ghana needs right now.",
    name: "Dr. Grace Adjei",
    role: "Partner Organization",
    image: "/images/gain/gain-profile.jpg",
  },
]

export const SOCIAL_POSTS = [
  {
    platform: "X",
    handle: "@Gainghana",
    content:
      "Every tree planted is a promise to the next generation. Join us this Green Ghana Day as we aim to plant 1,000 trees across communities.",
    date: "2 days ago",
    link: "https://x.com/Gainghana",
  },
  {
    platform: "Instagram",
    handle: "@gainghana",
    content:
      "Our volunteers cleaned up Labadi Beach this weekend. Over 300kg of plastic removed. Together we can keep Ghana's coastline beautiful.",
    date: "5 days ago",
    link: "https://www.instagram.com/gainghana/",
  },
  {
    platform: "Facebook",
    handle: "Green Awareness International",
    content:
      "We just wrapped up a 3-school environmental education drive in Greater Accra. Reaching 2,000 students with the message of climate action.",
    date: "1 week ago",
    link: "https://web.facebook.com/greenawarenessinternational",
  },
  {
    platform: "LinkedIn",
    handle: "Green Awareness International",
    content:
      "Looking for partners to scale our youth green skills programme across Ghana. Reach out if your organization shares our vision for a sustainable future.",
    date: "2 weeks ago",
    link: "https://www.linkedin.com/company/greenawarenessinternational",
  },
]

export const FAQS_EXTENDED = [
  {
    question: "Is Green Awareness International a registered organization?",
    answer:
      "Yes, GAIN is a registered nongovernmental organization (NGO) operating in Ghana, committed to environmental sustainability and youth empowerment.",
    category: "General",
  },
  {
    question: "How can I volunteer with GAIN?",
    answer:
      "We welcome volunteers of all backgrounds. Visit our Volunteer page, browse the open roles, and fill out the application form. Our team will reach out within 1 to 2 business days.",
    category: "Volunteering",
  },
  {
    question: "Are my donations secure?",
    answer:
      "Absolutely. Online donations are processed through Paystack's secure hosted checkout, which supports card, mobile money, and bank transfer. We never store your payment details. You can also give directly via mobile money or bank transfer.",
    category: "Donations",
  },
  {
    question: "Can my organization partner with GAIN?",
    answer:
      "We actively seek partnerships with schools, businesses, and other NGOs. Contact us through our Contact page or email us directly to discuss collaboration opportunities.",
    category: "Partnerships",
  },
  {
    question: "Where does my donation go?",
    answer:
      "Your support funds tree-planting drives, clean-up campaigns, educational workshops, and youth skills development programmes across Ghana. Every cedi makes a tangible difference.",
    category: "Donations",
  },
  {
    question: "What areas does GAIN operate in?",
    answer:
      "GAIN operates across Ghana, with active programmes in Greater Accra, Kumasi, the Eastern Region, and along the coastline. We are expanding our reach as our volunteer network grows.",
    category: "General",
  },
  {
    question: "How can my school participate in your education programme?",
    answer:
      "Schools can partner with us to host environmental clubs, education sessions, and tree-planting drives. Reach out through our Contact page and our education team will follow up.",
    category: "Education",
  },
  {
    question: "Do you provide certificates for volunteers?",
    answer:
      "Yes, all active volunteers receive certificates of participation and verified volunteer hours. These can be used for academic, professional, and personal development purposes.",
    category: "Volunteering",
  },
  {
    question: "Can I donate items instead of money?",
    answer:
      "Yes, we accept in-kind donations such as seedlings, tools, gloves, refreshments for events, and educational materials. Contact us to arrange a donation.",
    category: "Donations",
  },
  {
    question: "How often do you organize events?",
    answer:
      "We organize events regularly, typically 2 to 4 per month. These include tree-planting drives, beach clean-ups, school visits, and workshops. Check our Events page for the latest schedule.",
    category: "Events",
  },
]


export const VALUES = [
  {
    title: "Sustainability",
    description:
      "We champion practices that protect our environment today and preserve it for generations to come.",
  },
  {
    title: "Youth Empowerment",
    description:
      "We believe young people are the driving force behind lasting environmental change in their communities.",
  },
  {
    title: "Community",
    description:
      "We work hand-in-hand with local communities, schools, and partners to create shared impact.",
  },
  {
    title: "Education",
    description:
      "Knowledge is the seed of change. We educate to inspire action and build lifelong stewards.",
  },
  {
    title: "Integrity",
    description:
      "We operate with transparency, accountability, and respect for every donor, partner, and community.",
  },
  {
    title: "Action",
    description:
      "We turn awareness into tangible action through clean-ups, plantings, and skills that transform landscapes.",
  },
]

export const PROGRAMMES = [
  {
    title: "Skills Development",
    tagline: "Equipping youth with green skills",
    description:
      "We train young people in practical, environmentally-conscious skills, from sustainable agriculture and recycling crafts to green entrepreneurship, so they can build livelihoods while protecting the planet.",
    features: [
      "Green entrepreneurship workshops",
      "Sustainable agriculture training",
      "Recycling and upcycling craft sessions",
      "Mentorship and career guidance",
    ],
    image: "/images/gain/gain-media-1.jpg",
  },
  {
    title: "Public Education",
    tagline: "Spreading awareness far and wide",
    description:
      "Through school visits, community talks, and digital campaigns, we spread environmental awareness and inspire everyday citizens to take climate action in their own backyards.",
    features: [
      "School environmental clubs",
      "Community sensitization talks",
      "Social media awareness campaigns",
      "Educational blog and resources",
    ],
    image: "/images/gain/gain-media-2.jpg",
  },
  {
    title: "Environmental Action",
    tagline: "Hands-on change on the ground",
    description:
      "We organize tree-planting drives, beach and community clean-ups, and anti-illegal-mining advocacy, turning awareness into visible, measurable environmental restoration.",
    features: [
      "Tree-planting and reforestation drives",
      "Beach and river clean-up campaigns",
      "Anti-galamsey advocacy",
      "Waste management initiatives",
    ],
    image: "/images/gain/gain-media-4.jpg",
  },
]

export const IMPACT_STORIES = [
  {
    title: "Beach Clean-Up at the Coast",
    excerpt:
      "Our volunteers removed hundreds of kilos of plastic and debris from Ghana's shoreline, protecting marine life and coastal communities.",
    image: "/images/gain/gain-media-4.jpg",
    category: "Clean-Up",
    date: "March 2025",
  },
  {
    title: "Schools Environmental Awareness Drive",
    excerpt:
      "We visited schools with hands-on sessions, empowering students to become environmental ambassadors with messages like 'Plant a Tree, Save the Future.'",
    image: "/images/gain/gain-media-2.jpg",
    category: "Education",
    date: "January 2025",
  },
  {
    title: "Community Tree Planting",
    excerpt:
      "Together with community members, we planted hundreds of seedlings to restore degraded land and build greener neighborhoods.",
    image: "/images/gain/gain-media-6.jpg",
    category: "Reforestation",
    date: "June 2025",
  },
]

export const GALLERY_IMAGES = [
  { src: "/images/gain/gain-media-1.jpg", alt: "GAIN donation campaign poster with environmental activities", category: "Campaign" },
  { src: "/images/gain/gain-media-2.jpg", alt: "Children holding environmental awareness signs", category: "Education" },
  { src: "/images/gain/gain-media-4.jpg", alt: "Volunteers cleaning up a shoreline", category: "Clean-Up" },
  { src: "/images/gain/gain-media-6.jpg", alt: "Community members walking on a tree-lined path", category: "Community" },
  { src: "/images/gain/gain-media-5.jpg", alt: "Ghanaian beach coastline", category: "Environment" },
  { src: "/images/gain/gain-banner.jpg", alt: "GAIN organisational banner", category: "Campaign" },
]

export const BLOG_POSTS = [
  {
    slug: "why-planting-a-tree-today-saves-tomorrow",
    title: "Why Planting a Tree Today Saves Tomorrow",
    excerpt:
      "Ghana has lost over 60% of its forest cover since the 1990s. We explore the science behind reforestation, why it matters for Ghana's future, and how GAIN is working to restore degraded land one seedling at a time.",
    content: `Ghana's forests are disappearing at an alarming rate. According to the Forestry Commission of Ghana, the country has lost more than 60% of its forest cover since the 1990s, with deforestation rates estimated at 2% per year (Forestry Commission of Ghana, 2023). The drivers are well-documented: agricultural expansion, illegal logging, fuelwood collection, and wildfires. The consequences are felt across the nation, from declining rainfall patterns to degraded soil and lost biodiversity.

## The Science of Why Trees Matter

Trees are often called the lungs of the Earth, but their role extends far beyond carbon sequestration. A single mature tree can absorb up to 22 kilograms of carbon dioxide per year and release enough oxygen for two human beings (USDA Forest Service, 2021). In Ghana's tropical climate, indigenous species like mahogany (Khaya ivorensis), iroko (Milicia excelsa), and African mahogany are particularly effective at carbon storage, sequestering between 200 and 500 kilograms of carbon over a 30-year period (International Union for Conservation of Nature, 2022).

But the benefits go deeper. Tree roots bind soil, preventing erosion that costs Ghana an estimated 4.2 billion Ghanaian cedis annually in lost agricultural productivity (Environmental Protection Agency Ghana, 2022). In the Upper East and Upper West regions, where desertification threatens livelihoods, tree planting has been shown to reduce wind erosion by up to 70% and improve crop yields by 15-25% when combined with sustainable farming practices (UN Convention to Combat Desertification, 2023).

## Ghana's Green Ghana Day Initiative

The Government of Ghana launched the Green Ghana Day initiative in 2021, with the ambitious goal of planting 5 million trees in a single day. By 2024, the programme had expanded to plant over 30 million trees nationwide (Ministry of Lands and Natural Resources, 2024). However, survival rates remain a challenge. Studies by the Forestry Research Institute of Ghana (FORIG) indicate that only 40-60% of planted seedlings survive the first year without proper aftercare (FORIG, 2023).

This is where community organizations like GAIN play a critical role. Our approach goes beyond planting. We focus on species selection suited to local conditions, community ownership of planting sites, and a minimum two-year aftercare programme that includes watering, weeding, and protection from grazing animals.

## How GAIN Approaches Reforestation

Our reforestation programme operates on three principles:

1. **Right tree, right place.** We work with the Forestry Commission to select indigenous species that are suited to each region's rainfall, soil type, and ecological zone. Exotic species are used only when they provide clear livelihood benefits, such as fruit trees in community orchards.

2. **Community ownership.** Every planting site is adopted by a local community, school, or church group. They are trained in planting techniques and given responsibility for aftercare. This dramatically improves survival rates and ensures the trees are valued, not vandalized.

3. **Livelihood integration.** Where possible, we plant multipurpose trees that provide food, medicine, or income. A community orchard of mango and cashew trees can generate income within 3-5 years while restoring degraded land.

Since 2023, GAIN has planted over 5,000 trees across Greater Accra, the Eastern Region, and the Ashanti Region, with a first-year survival rate of 72%, well above the national average.

## What You Can Do

You do not need to wait for an organized event to make a difference. Plant a fruit tree in your compound. Support organizations that plant trees with proper aftercare. Advocate for the protection of existing forests, which is always more effective than planting new ones. And if you represent a school, church, or community group, reach out to us. We provide free seedlings, training, and ongoing support to groups committed to greening their neighborhoods.

The best time to plant a tree was twenty years ago. The second best time is today.

---

**References:**

- Environmental Protection Agency Ghana. (2022). *State of the Environment Report 2022*. Accra: EPA Ghana.
- Forestry Commission of Ghana. (2023). *Annual Forestry Statistics Report*. Accra: Forestry Commission.
- Forestry Research Institute of Ghana (FORIG). (2023). *Survival Rates of Planted Seedlings in Ghana: A Five-Year Study*. Kumasi: CSIR-FORIG.
- International Union for Conservation of Nature. (2022). *Forest Landscape Restoration in West Africa*. Gland: IUCN.
- Ministry of Lands and Natural Resources. (2024). *Green Ghana Day 2024 Report*. Accra: Government of Ghana.
- UN Convention to Combat Desertification. (2023). *Land Degradation and Restoration in the Sahel and West Africa*. Bonn: UNCCD.
- USDA Forest Service. (2021). *Urban Forest Ecosystem Services*. Washington, DC: USDA.`,
    image: "/images/gain/gain-media-1.jpg",
    author: "GAIN Team",
    date: "2025-06-15",
    readTime: "8 min read",
    category: "Environment",
  },
  {
    slug: "stop-illegal-mining-save-our-rivers",
    title: "Stop Illegal Mining, Save Our Rivers",
    excerpt:
      "Galamsey has contaminated the Pra, Ankobra, and Birim rivers with mercury and heavy metals. We examine the evidence, the human cost, and what GAIN is doing to advocate for clean water in Ghana.",
    content: `The waters of the Pra River once ran clear enough to see fish swimming beneath the surface. Today, large stretches of the river run a murky brown, contaminated with sediment, mercury, and heavy metals from illegal artisanal gold mining, known locally as galamsey. The story is the same for the Ankobra, Birim, and Offin rivers, which together supply drinking water to millions of Ghanaians.

## The Scale of the Crisis

Galamsey is not a new phenomenon, but it has intensified dramatically since the early 2010s. A study by the University of Ghana's Department of Earth Science used satellite imagery to map illegal mining sites and found that between 2014 and 2022, the area affected by galamsey expanded by over 340% in the Western and Central regions (University of Ghana, 2023). The Ghana Chamber of Mines estimates that illegal mining now accounts for approximately 35% of Ghana's total gold output, but at a devastating environmental cost (Ghana Chamber of Mines, 2024).

The most immediate impact is on water quality. The Ghana Water Company Limited (GWCL) has reported that turbidity levels in the Pra River at Daboase, where water is extracted for treatment, have increased by over 300% since 2015, forcing the company to increase chemical treatment costs by more than 200% (GWCL, 2023). In some areas, the company has been forced to shut down treatment plants entirely during the peak mining season.

## The Mercury Problem

Mercury is the hidden killer in galamsey. Artisanal miners use liquid mercury to bind gold particles, then burn the mixture to vaporize the mercury and leave the gold behind. The process releases mercury vapor into the air and discharges mercury-laden wastewater into rivers.

A study published in the journal Environmental Pollution tested water samples from the Ankobra River and found mercury concentrations of 1.8 to 3.2 micrograms per litre, more than 18 times the World Health Organization's guideline of 0.1 micrograms per litre for drinking water (Environmental Pollution, 2022). The researchers also tested fish from the river and found methylmercury levels exceeding 0.5 mg per kilogram, the maximum limit set by the Codex Alimentarius Commission.

Mercury is a potent neurotoxin. Long-term exposure, even at low levels, can cause tremors, memory loss, cognitive impairment, and kidney damage. Pregnant women and children are particularly vulnerable. Mercury crosses the placenta and can cause irreversible neurological damage to the developing fetus, leading to lower IQ, motor skill deficits, and behavioral problems (World Health Organization, 2021).

## The Human Cost

The environmental data tells only part of the story. Behind every polluted river is a community that has lost its source of clean drinking water, its fishing livelihood, and its farmland. In communities like Dumasi and Teleku Bokazo in the Western Region, residents report skin rashes, respiratory problems, and miscarriages they attribute to contaminated water (Wassa Association of Communities Affected by Mining, 2023).

Young people are drawn to galamsey by the promise of quick money. But the work is dangerous. Mine collapses, mercury poisoning, and exposure to cyanide used in some illegal operations claim lives every year. A report by the Integrated Social Development Centre (ISODEC) documented 312 mining-related deaths in Ghana between 2019 and 2023, though the true number is believed to be much higher due to underreporting (ISODEC, 2024).

## What GAIN Is Doing

GAIN's approach to the galamsey crisis is rooted in advocacy, education, and community empowerment. We do not believe that condemnation alone is enough. The young people who engage in galamsey need alternatives, and the communities affected need a voice.

Our work includes:

1. **Community awareness campaigns.** We visit communities in mining-affected areas to educate residents about the health risks of mercury exposure, the long-term consequences of river pollution, and their rights under Ghanaian environmental law. In 2024, we conducted 18 community sensitization sessions reaching over 3,000 people.

2. **Youth skills diversion.** We offer green skills training to young people in mining communities, teaching sustainable agriculture, beekeeping, and recycling crafts as alternative livelihoods. Our goal is not just to stop galamsey but to replace it with something better.

3. **Policy advocacy.** We work with the Environmental Protection Agency, the Ministry of Lands and Natural Resources, and parliamentary committees to advocate for stronger enforcement of mining regulations, expanded mercury-free mining technologies, and community compensation for environmental damage.

4. **Water monitoring.** We partner with universities to train community members in basic water quality testing, empowering them to document pollution and hold miners and regulators accountable.

## What You Can Do

The galamsey crisis can feel overwhelming, but there are concrete actions you can take. Demand that your representatives prioritize enforcement of mining laws. Support organizations working on the ground. If you live in a mining area, get your water tested and share the results. And if you are a young person considering galamsey, know that the money is short-term but the damage, to your health, your community, and your children, is permanent.

Ghana's rivers belong to all of us. It is our collective responsibility to protect them.

---

**References:**

- Environmental Pollution. (2022). Mercury contamination in the Ankobra River basin, Ghana. Vol. 292, pp. 118-131.
- Ghana Chamber of Mines. (2024). *Annual Report 2023: Artisanal and Small-Scale Mining*. Accra: Ghana Chamber of Mines.
- Ghana Water Company Limited. (2023). *Water Quality Monitoring Report: Pra River Basin*. Accra: GWCL.
- Integrated Social Development Centre (ISODEC). (2024). *Mining-Related Deaths in Ghana 2019-2023*. Accra: ISODEC.
- University of Ghana, Department of Earth Science. (2023). *Satellite-Based Mapping of Illegal Mining in Ghana*. Legon: University of Ghana.
- Wassa Association of Communities Affected by Mining (WACAM). (2023). *Community Impact Assessment Report*. Tarkwa: WACAM.
- World Health Organization. (2021). *Mercury and Health Fact Sheet*. Geneva: WHO.`,
    image: "/images/gain/gain-media-2.jpg",
    author: "GAIN Team",
    date: "2025-05-20",
    readTime: "9 min read",
    category: "Advocacy",
  },
  {
    slug: "empowering-youth-through-green-skills",
    title: "Empowering Youth Through Green Skills",
    excerpt:
      "With youth unemployment at 13% in Ghana, green skills training offers a path to both livelihoods and environmental restoration. We examine the evidence and share stories from our programmes.",
    content: `Ghana has one of the youngest populations in the world. According to the Ghana Statistical Service, over 57% of the population is under the age of 25, and approximately 13% of young people aged 15-24 are unemployed, with a further 20% underemployed (Ghana Statistical Service, 2023). The International Labour Organization estimates that Ghana needs to create approximately 300,000 new jobs annually just to absorb new entrants into the labour market (ILO, 2023).

At the same time, Ghana faces mounting environmental challenges: deforestation, plastic pollution, water contamination, and the impacts of climate change on agriculture. These two crises, youth unemployment and environmental degradation, may seem unrelated. But they share a common solution: green skills.

## What Are Green Skills?

The United Nations Environment Programme defines green skills as "the knowledge, abilities, values, and attitudes needed to live in, develop, and support a sustainable and resource-efficient society" (UNEP, 2023). In the Ghanaian context, this includes practical skills like sustainable agriculture, organic composting, beekeeping, recycling and upcycling, solar panel installation, and green entrepreneurship.

The global green economy is growing rapidly. The International Renewable Energy Agency estimates that the renewable energy sector alone employed 13.7 million people worldwide in 2022, with Africa's green workforce growing at 6% annually (IRENA, 2023). In Ghana, the transition to a green economy is still in its early stages, but the potential is enormous. A study by the African Development Bank found that investing in green skills training in Ghana could create over 1.4 million green jobs by 2030 (AfDB, 2022).

## The Evidence That Green Skills Work

Research from across Africa shows that green skills training is not just environmentally beneficial but economically effective. A study by the Mastercard Foundation tracked 2,500 young people who completed green skills programmes in Ghana, Kenya, and Rwanda and found that 68% were employed or self-employed within 12 months, compared to a 42% employment rate for youth who did not receive such training (Mastercard Foundation, 2023). The average income of programme graduates was 35% higher than their peers.

The key to success is practicality. Programmes that combine classroom learning with hands-on apprenticeships, mentorship, and access to startup capital show the best results. A report by the World Bank's Ghana Jobs and Skills Project found that practical training programmes in sustainable agriculture and waste management achieved employment rates of 75% or higher among graduates, compared to 40% for theory-only programmes (World Bank, 2023).

## How GAIN's Green Skills Programme Works

GAIN's skills development programme is built on three pillars:

### 1. Practical Training

We offer hands-on workshops in sustainable agriculture (including organic farming, composting, and urban gardening), recycling crafts (turning plastic waste into sellable products), beekeeping and honey production, and basic green entrepreneurship. Each workshop runs for 2-4 weeks and combines classroom sessions with practical work at our demonstration sites.

### 2. Mentorship and Networks

Every graduate is paired with a mentor, an experienced practitioner in their chosen field who provides guidance, connects them to markets, and helps them navigate challenges. We also facilitate peer networks where graduates can share experiences, collaborate on projects, and access group purchasing power for materials and tools.

### 3. Seed Grants and Market Access

For graduates who develop viable business plans, we offer small seed grants of 500-2,000 Ghanaian cedis to help them start their green businesses. We also connect them to markets through partnerships with local businesses, farmers' markets, and online platforms.

Since launching the programme in 2024, we have trained over 350 young people. Of those who completed the programme at least six months ago, 71% are now employed or running their own green businesses.

## Stories from the Programme

Akosua, a 24-year-old from Tema, was unemployed for two years before joining our recycling crafts workshop. She learned to turn plastic water sachets into durable shopping bags and accessories. With a seed grant of 1,000 cedis, she started her own business and now employs two other young people. She sells her products at markets in Accra and through a partnership with a local eco-friendly retail store.

Yaw, a 28-year-old from Kumasi, completed our sustainable agriculture training and now runs a small organic vegetable farm that supplies three local restaurants. He uses composting techniques learned in the programme and has reduced his input costs by 40% compared to conventional farming.

## The Way Forward

Ghana's youth are not a problem to be solved. They are the solution to our environmental challenges. By investing in green skills, we are not just creating jobs. We are building a generation of environmental stewards who will shape Ghana's future for decades to come.

But we cannot do this alone. We need partners: businesses to provide market access, government to align training with national environmental goals, and donors to fund the seed grants that turn training into livelihoods. If you share this vision, reach out to us. Together, we can turn Ghana's youth dividend into an environmental dividend.

---

**References:**

- African Development Bank (AfDB). (2022). *Green Jobs and Skills Development in Africa*. Abidjan: AfDB.
- Ghana Statistical Service. (2023). *Ghana 2021 Population and Housing Census: Labour Force Report*. Accra: GSS.
- International Labour Organization (ILO). (2023). *Ghana Decent Work Country Programme 2023-2027*. Geneva: ILO.
- International Renewable Energy Agency (IRENA). (2023). *Renewable Energy and Jobs: Annual Review 2023*. Abu Dhabi: IRENA.
- Mastercard Foundation. (2023). *Green Skills Training Outcomes in Africa: A Three-Country Study*. Toronto: Mastercard Foundation.
- United Nations Environment Programme (UNEP). (2023). *Green Skills for a Sustainable Future*. Nairobi: UNEP.
- World Bank. (2023). *Ghana Jobs and Skills Project: Mid-Term Evaluation Report*. Washington, DC: World Bank.`,
    image: "/images/gain/gain-media-6.jpg",
    author: "GAIN Team",
    date: "2025-04-10",
    readTime: "9 min read",
    category: "Youth",
  },
  {
    slug: "the-power-of-community-clean-ups",
    title: "The Power of Community Clean-Ups",
    excerpt:
      "Ghana generates over 1 million tonnes of plastic waste annually, but only 5% is recycled. We examine the waste crisis, the psychology of clean-ups, and how GAIN's campaigns are changing behavior.",
    content: `Every year, Ghana generates approximately 1.1 million tonnes of plastic waste. Of this, only about 5% is recycled, with the remainder ending up in landfills, drains, waterways, and the ocean (Environmental Protection Agency Ghana, 2023). The consequences are visible in every city and town: choked gutters that cause flooding during the rainy season, plastic-strewn beaches that harm marine life and tourism, and burning waste that fills the air with toxic fumes.

The problem is not just technical. It is behavioral. A study by the University of Cape Coast found that 73% of Ghanaians dispose of plastic waste improperly, not because they do not care, but because they lack convenient alternatives and because the social norm has not yet shifted (University of Cape Coast, 2022). Community clean-ups address both of these barriers simultaneously.

## The Waste Crisis in Numbers

The scale of Ghana's waste challenge is staggering. The Zoomlion Ghana Limited, the country's largest waste management company, collects approximately 12,000 tonnes of solid waste per day, but an estimated 4,000 tonnes go uncollected, much of it plastic (Zoomlion Ghana, 2024). In Accra alone, the Accra Metropolitan Assembly estimates that 2,800 tonnes of waste are generated daily, with collection rates of only 70-75% (AMA, 2023).

Plastic waste is particularly problematic because it does not decompose. A single plastic water sachet, ubiquitous in Ghana, takes over 450 years to break down (United Nations Environment Programme, 2023). During that time, it clogs drains, harbors disease-carrying mosquitoes, breaks into microplastics that enter the food chain, and washes into the ocean where it harms marine life.

The economic cost is significant. The World Bank estimates that poor waste management costs Ghana approximately 3.5% of its GDP annually in health costs, flood damage, lost tourism revenue, and reduced property values (World Bank, 2022). The 2015 Accra floods, which killed over 150 people, were exacerbated by plastic-choked drains, a tragedy that was repeated on a smaller scale in subsequent years.

## The Psychology of Clean-Ups

Why do clean-ups work? It is not just about removing waste. Behavioral science research shows that clean-ups shift social norms, making proper waste disposal the expected behavior rather than the exception.

The "broken windows theory," first described by social scientists Wilson and Kelling in 1982, suggests that visible signs of disorder, like litter, encourage more disorder. People are more likely to litter in an already littered environment. Conversely, a clean environment signals that the community cares, which discourages littering (Wilson and Kelling, 1982).

A study published in the Journal of Environmental Psychology tested this theory in urban areas in Nigeria and found that areas that were regularly cleaned saw a 40% reduction in new litter over a six-month period, compared to areas that were not cleaned (Journal of Environmental Psychology, 2021). The researchers concluded that the visibility of clean-up activity, not just the removal of waste, was the key factor in behavior change.

Clean-ups also build social cohesion. When neighbors work side by side to clean their community, they form bonds, develop a shared sense of ownership, and are more likely to maintain the space going forward. This is particularly important in urban areas where social ties have weakened.

## How GAIN's Clean-Up Campaigns Work

GAIN's clean-up programme is designed to maximize both waste removal and lasting behavior change. Our approach includes:

### 1. Strategic Site Selection

We target high-visibility public spaces where waste accumulation is most damaging: beaches, marketplaces, school compounds, and drainage channels. We prioritize sites near water bodies, where plastic waste has the most direct environmental impact.

### 2. Volunteer Mobilization

We mobilize volunteers through schools, churches, community groups, and social media. Each clean-up is framed as a community event, not a chore, with music, refreshments, and recognition for participants. Our typical clean-up attracts 50-100 volunteers and lasts 3-4 hours.

### 3. Waste Sorting and Data Collection

Volunteers sort waste into categories: recyclable plastic, glass, metal, organic, and general waste. We weigh and record each category, building a dataset that informs our advocacy and helps us track trends. In 2024, our clean-ups removed over 850 kilograms of waste, of which 40% was recyclable plastic.

### 4. Education and Behavior Change

Every clean-up includes an educational component. We brief volunteers on the environmental impact of waste, demonstrate proper sorting, and distribute reusable bags and water bottles to reduce future plastic consumption. We also engage passersby, turning the clean-up into a visible public education event.

### 5. Follow-Up and Sustained Engagement

After each clean-up, we work with the host community to establish a waste management plan, including regular collection points, community recycling stations, and ongoing monitoring. Our goal is not to return to the same site month after month but to build local capacity so the community can maintain cleanliness independently.

## The Results

In 2024, GAIN organized 24 community clean-ups across Greater Accra, mobilizing over 1,200 volunteers and removing 850 kilograms of waste. But the numbers tell only part of the story. In communities where we have conducted three or more clean-ups, we have observed a 60% reduction in visible litter between clean-up events, suggesting lasting behavior change.

At Labadi Beach, where we have conducted six clean-ups since 2023, local vendors report that the beach is noticeably cleaner and that tourist foot traffic has increased. At a school in Tema where we conducted a clean-up and installed recycling bins, the school's environmental club now manages a weekly recycling programme that generates income from selling sorted plastic to recycling companies.

## What You Can Do

You do not need to wait for an organized event. Pick up litter when you see it. Carry a reusable water bottle instead of buying sachet water. Separate your waste at home. Support businesses that use sustainable packaging. And if you want to organize a clean-up in your community, reach out to us. We provide gloves, bags, sorting guidance, and volunteer support at no cost.

A clean Ghana is possible. But it starts with each of us taking responsibility for the waste we create and the spaces we share.

---

**References:**

- Accra Metropolitan Assembly (AMA). (2023). *Solid Waste Management Report 2023*. Accra: AMA.
- Environmental Protection Agency Ghana. (2023). *Plastic Waste Management in Ghana: Status Report*. Accra: EPA Ghana.
- Journal of Environmental Psychology. (2021). "The impact of clean-up interventions on littering behavior in urban Nigeria." Vol. 74, pp. 101-115.
- United Nations Environment Programme (UNEP). (2023). *Plastic Pollution in Africa: Assessment and Recommendations*. Nairobi: UNEP.
- University of Cape Coast, Department of Environmental Science. (2022). *Household Waste Disposal Practices in Urban Ghana*. Cape Coast: UCC.
- Wilson, J. Q., and Kelling, G. L. (1982). "Broken Windows: The police and neighborhood safety." The Atlantic Monthly, March 1982, pp. 29-38.
- World Bank. (2022). *What a Waste 2.0: A Global Snapshot of Solid Waste Management to 2050*. Washington, DC: World Bank.
- Zoomlion Ghana Limited. (2024). *Annual Waste Collection Report 2023*. Accra: Zoomlion.`,
    image: "/images/gain/gain-media-4.jpg",
    author: "GAIN Team",
    date: "2025-03-05",
    readTime: "10 min read",
    category: "Action",
  },
]

export const EVENTS = [
  {
    title: "Green Ghana Day Tree Planting",
    type: "upcoming",
    date: "2025-06-20",
    time: "8:00 AM",
    location: "Accra and Kumasi, Ghana",
    description:
      "Join GAIN and partners for a nationwide tree-planting drive. We aim to plant 1,000 seedlings across selected communities. Volunteers, tools, and refreshments will be provided.",
    image: "/images/gain/gain-media-1.jpg",
    tag: "Reforestation",
  },
  {
    title: "Youth Green Skills Workshop",
    type: "upcoming",
    date: "2025-07-12",
    time: "10:00 AM",
    location: "Community Centre, Tema",
    description:
      "A free hands-on workshop teaching young people sustainable agriculture, recycling crafts, and green entrepreneurship basics. Limited slots available, register early.",
    image: "/images/gain/gain-media-2.jpg",
    tag: "Skills Development",
  },
  {
    title: "Beach Clean-Up Campaign",
    type: "upcoming",
    date: "2025-08-02",
    time: "7:00 AM",
    location: "Labadi Beach, Accra",
    description:
      "Help us clean up one of Accra's busiest beaches. All volunteers receive a GAIN t-shirt, gloves, and a certificate of participation. Families welcome.",
    image: "/images/gain/gain-media-4.jpg",
    tag: "Clean-Up",
  },
  {
    title: "World Environment Day Awareness Walk",
    type: "past",
    date: "2025-06-05",
    time: "6:30 AM",
    location: "Independence Square, Accra",
    description:
      "Hundreds of young people marched through Accra to raise awareness about environmental protection and sustainable living on World Environment Day.",
    image: "/images/gain/gain-media-6.jpg",
    tag: "Advocacy",
  },
  {
    title: "Schools Environmental Education Drive",
    type: "past",
    date: "2025-01-18",
    time: "9:00 AM",
    location: "Multiple Schools, Greater Accra",
    description:
      "GAIN visited 10 schools with interactive environmental education sessions, reaching over 2,000 students with messages of climate action and sustainability.",
    image: "/images/gain/gain-media-2.jpg",
    tag: "Education",
  },
  {
    title: "Community Tree Planting Drive",
    type: "past",
    date: "2024-10-26",
    time: "8:00 AM",
    location: "Eastern Region, Ghana",
    description:
      "Together with community members and local leaders, GAIN planted 500 trees to restore degraded land and promote a greener environment.",
    image: "/images/gain/gain-media-5.jpg",
    tag: "Reforestation",
  },
]

export const DONATION_METHODS = {
  paystack: {
    title: "Paystack Secure Checkout",
    description:
      "Donate securely with card, mobile money (MTN, Telecel, AirtelTigo), or bank transfer via Paystack's hosted checkout. Your payment details are never stored on our site.",
    methods: ["Visa / Mastercard", "MTN Mobile Money", "Telecel Cash", "AirtelTigo Money", "Bank Transfer"],
  },
  momo: {
    title: "Direct Mobile Money",
    name: "Green Awareness International",
    number: "0243312303",
    networks: ["MTN", "Telecel", "AirtelTigo"],
    note: "Fee-free giving directly to our MoMo wallet.",
  },
  bank: {
    title: "Bank Transfer",
    bankName: "Fidelity Bank",
    branch: "Haatso Branch",
    accountName: "Green Awareness International",
    accountNumber: "2030192755111",
    note: "For larger donations and corporate giving.",
  },
}

export const DONATION_TIERS = [
  {
    amount: 50,
    currency: "GHS",
    title: "Seedling Supporter",
    description: "Plants 5 trees in a community reforestation drive.",
    popular: false,
  },
  {
    amount: 100,
    currency: "GHS",
    title: "Green Champion",
    description: "Sponsors environmental education for 10 students.",
    popular: true,
  },
  {
    amount: 250,
    currency: "GHS",
    title: "Eco Hero",
    description: "Funds a full community clean-up campaign.",
    popular: false,
  },
  {
    amount: 500,
    currency: "GHS",
    title: "Planet Protector",
    description: "Supports a youth green skills workshop.",
    popular: false,
  },
]

export const TEAM = [
  {
    name: "Edmond Amankwaah",
    role: "Founder and Executive Director",
    bio: "A passionate environmental advocate dedicated to empowering young people to lead sustainable change in Ghana.",
    image: "/images/gain/gain-profile.jpg",
  },
  {
    name: "GAIN Volunteer Team",
    role: "Youth Changemakers",
    bio: "A dedicated network of young volunteers who power our campaigns, clean-ups, and education drives across Ghana.",
    image: "/images/gain/gain-media-6.jpg",
  },
  {
    name: "Community Partners",
    role: "Local Leaders and Schools",
    bio: "The schools, community leaders, and local organizations who work alongside us to create lasting impact.",
    image: "/images/gain/gain-media-2.jpg",
  },
]

export const FAQS = [
  {
    question: "Is Green Awareness International a registered organization?",
    answer:
      "Yes, GAIN is a registered nongovernmental organization (NGO) operating in Ghana, committed to environmental sustainability and youth empowerment.",
  },
  {
    question: "How can I volunteer with GAIN?",
    answer:
      "We welcome volunteers of all backgrounds. Simply fill out the contact form on our Contact page expressing your interest, and our team will reach out with upcoming opportunities.",
  },
  {
    question: "Are my donations secure?",
    answer:
      "Absolutely. Online donations are processed through Paystack's secure hosted checkout, which supports card, mobile money, and bank transfer. We never store your payment details. You can also give directly via mobile money or bank transfer.",
  },
  {
    question: "Can my organization partner with GAIN?",
    answer:
      "We actively seek partnerships with schools, businesses, and other NGOs. Contact us through our Contact page or email us directly to discuss collaboration opportunities.",
  },
  {
    question: "Where does my donation go?",
    answer:
      "Your support funds tree-planting drives, clean-up campaigns, educational workshops, and youth skills development programmes across Ghana. Every cedi makes a tangible difference.",
  },
]

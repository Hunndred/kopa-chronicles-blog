
export interface BlogPost {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  thumbnail: string;
  slug: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "NYSC Call-Up Letter Release Date Announced",
    date: "May 10, 2025",
    excerpt: "NYSC headquarters has announced the official release date for Batch A call-up letters. Find out when and how to access yours.",
    content: `
      <h1>NYSC Call-Up Letter Release Date Announced</h1>
      
      <p>The National Youth Service Corps (NYSC) headquarters has officially announced that call-up letters for the 2025 Batch A will be available starting next week. Prospective corps members can access their call-up letters through the NYSC portal.</p>
      
      <p>According to the Director-General, this batch will commence orientation on June 15th, 2025. All prospective corps members are advised to log into their dashboard a week before to print their call-up letters and prepare for camp.</p>
      
      <h2>How to Access Your Call-Up Letter</h2>
      
      <p>To access your call-up letter, follow these steps:</p>
      <ol>
        <li>Log in to the NYSC portal using your registered email and password</li>
        <li>Navigate to the dashboard and click on "Print Call-up Letter"</li>
        <li>Verify your information is correct</li>
        <li>Download and print your call-up letter</li>
      </ol>
      
      <p>Remember that you must present a printed copy of your call-up letter at the orientation camp, along with other required documents.</p>
    `,
    thumbnail: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    slug: "nysc-call-up-letter-release-date-announced"
  },
  {
    id: "2",
    title: "Top 5 Essential Items to Pack for NYSC Camp",
    date: "May 5, 2025",
    excerpt: "Preparing for NYSC orientation camp? Don't forget these five essential items that will make your camp experience more comfortable.",
    content: `
      <h1>Top 5 Essential Items to Pack for NYSC Camp</h1>
      
      <p>Preparing for NYSC camp can be overwhelming, especially for first-timers. Beyond the required items on the official list, here are five essential items that will make your three-week orientation camp experience more comfortable:</p>
      
      <h2>1. Portable Power Bank</h2>
      <p>Power supply can be irregular at some camps. A good capacity power bank ensures your phone stays charged for emergencies and staying in touch with family.</p>
      
      <h2>2. Comfortable White Sneakers</h2>
      <p>You'll be doing a lot of standing, marching, and physical activities. Invest in a pair of comfortable white sneakers for daily use beyond the parade ground.</p>
      
      <h2>3. Toiletry Organizer</h2>
      <p>Camp bathrooms can get crowded. A hanging toiletry bag will keep your items organized, accessible, and most importantly, off potentially wet bathroom floors.</p>
      
      <h2>4. Mosquito Repellent</h2>
      <p>This is crucial regardless of which camp you're posted to. Bring both repellent cream and a mosquito net for comprehensive protection.</p>
      
      <h2>5. Reusable Water Bottle</h2>
      <p>Staying hydrated is essential during the physically demanding camp activities. A good quality water bottle will help you maintain hydration throughout the day.</p>
      
      <p>Remember that while comfort items are important, don't overpack as storage space is limited in the camp hostels.</p>
    `,
    thumbnail: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    slug: "top-5-essential-items-to-pack-for-nysc-camp"
  },
  {
    id: "3",
    title: "NYSC Announces New Allowance Structure",
    date: "April 28, 2025",
    excerpt: "The NYSC has approved an increase in the monthly allowance for corps members. See the new payment structure and when it takes effect.",
    content: `
      <h1>NYSC Announces New Allowance Structure</h1>
      
      <p>In a welcome development for serving and prospective corps members, the National Youth Service Corps has announced an upward revision of the monthly allowance paid to corps members across the country.</p>
      
      <p>According to the official statement released yesterday, the new allowance structure will take effect from June 2025, benefiting the incoming Batch A corps members as well as those currently in service.</p>
      
      <h2>New Allowance Breakdown</h2>
      
      <p>The revised allowance structure includes:</p>
      <ul>
        <li>Basic Transport Allowance: ₦5,000</li>
        <li>Local Allowance: ₦25,000</li>
        <li>Outfit Allowance: ₦3,000</li>
        <li>Medical Allowance: ₦2,000</li>
      </ul>
      
      <p>This brings the total monthly stipend to ₦35,000, representing a significant increase from the previous amount. The statement also mentioned that corps members serving in rural areas will receive an additional ₦2,000 as rural allowance.</p>
      
      <p>The Director-General emphasized that this increase is part of the government's commitment to improving the welfare of youth corps members and enhancing the effectiveness of the service year.</p>
    `,
    thumbnail: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    slug: "nysc-announces-new-allowance-structure"
  },
  {
    id: "4",
    title: "How to Apply for NYSC Relocation",
    date: "April 20, 2025",
    excerpt: "Need to relocate to a different state during your NYSC year? Here's a comprehensive guide on the relocation process.",
    content: `
      <h1>How to Apply for NYSC Relocation</h1>
      
      <p>Relocation is one of the most sought-after processes during the National Youth Service Corps year. Whether due to health reasons, marriage, or security concerns, many corps members find themselves needing to relocate from their assigned states.</p>
      
      <h2>Valid Reasons for Relocation</h2>
      
      <p>The NYSC only approves relocations for specific reasons:</p>
      <ol>
        <li><strong>Health Issues:</strong> Corps members with serious health conditions requiring specialized treatment</li>
        <li><strong>Marriage:</strong> Married female corps members can relocate to their spouse's state of residence</li>
        <li><strong>Security:</strong> In cases of genuine security threats</li>
        <li><strong>Employment:</strong> Corps members who secure federal government employment</li>
      </ol>
      
      <h2>The Relocation Process</h2>
      
      <p>To successfully apply for relocation:</p>
      
      <ol>
        <li>Obtain a relocation form from your Local Government Inspector</li>
        <li>Fill the form and attach supporting documents (medical report, marriage certificate, etc.)</li>
        <li>Submit the completed form to the State Coordinator through your LGI</li>
        <li>Follow up on your application regularly</li>
      </ol>
      
      <p>It's important to note that relocation is not guaranteed and is granted at the discretion of the NYSC. Applications without sufficient supporting documentation are likely to be rejected.</p>
      
      <p>The processing time typically ranges from 2-4 weeks, so plan accordingly and be patient while awaiting approval.</p>
    `,
    thumbnail: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    slug: "how-to-apply-for-nysc-relocation"
  },
  {
    id: "5",
    title: "Exploring NYSC SAED Entrepreneurship Program",
    date: "April 15, 2025",
    excerpt: "Maximize your service year by taking advantage of the NYSC Skills Acquisition and Entrepreneurship Development program.",
    content: `
      <h1>Exploring NYSC SAED Entrepreneurship Program</h1>
      
      <p>The NYSC Skills Acquisition and Entrepreneurship Development (SAED) program is designed to prepare corps members for self-employment and financial independence after their service year. In an economy with limited employment opportunities, developing entrepreneurial skills has become increasingly important.</p>
      
      <h2>Available Skill Areas</h2>
      
      <p>The SAED program offers training in several skill areas including:</p>
      <ul>
        <li>Agribusiness</li>
        <li>Food Processing and Preservation</li>
        <li>Digital Marketing</li>
        <li>Film and Photography</li>
        <li>Fashion Design</li>
        <li>Cosmetology</li>
        <li>ICT</li>
        <li>Construction</li>
        <li>Automobile</li>
      </ul>
      
      <h2>How to Get Started</h2>
      
      <p>During your orientation camp, you'll be introduced to the SAED program and asked to choose a skill area that interests you. After camp, you'll have the opportunity to attend regular training sessions at your local government SAED center.</p>
      
      <p>To make the most of this program:</p>
      <ol>
        <li>Choose a skill that aligns with your passion or existing knowledge</li>
        <li>Attend all training sessions consistently</li>
        <li>Consider seeking a place of primary assignment related to your chosen skill</li>
        <li>Network with trainers and fellow corps members in your skill area</li>
        <li>Develop a business plan before the end of your service year</li>
      </ol>
      
      <p>The NYSC also partners with the Bank of Industry and other financial institutions to provide loans to corps members with viable business ideas, giving you the capital to start your business after service.</p>
    `,
    thumbnail: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    slug: "exploring-nysc-saed-entrepreneurship-program"
  }
];


import { JobPost, Category } from '../types';

export const JOB_POSTS: JobPost[] = [
  {
    id: 'ssc-gd-constable-2024',
    title: 'SSC GD Constable Recruitment 2024 (39481 Posts)',
    shortInfo: 'Staff Selection Commission (SSC) has released the notification for GD Constable in BSF, CISF, ITBP, SSB, CRPF, AR, SSF. Interested candidates can apply online from the link provided below.',
    category: Category.LATEST_JOB,
    postDate: '2024-11-20',
    lastDate: '2024-12-31',
    applyLink: 'https://ssc.gov.in',
    applicationFee: { 'General / OBC / EWS': '100/-', 'SC / ST': '0/-', 'All Category Female': '0/-' },
    ageLimit: '18-23 Years (Age relaxation extra as per rules)',
    eligibility: ['Candidates must have passed 10th Class (Matriculation) from a recognized Board in India.'],
    totalPosts: 39481,
    tags: ['SSC', 'GD Constable', 'Latest Jobs', 'Paramilitary']
  },
  {
    id: 'ibps-po-mains-admit-card',
    title: 'IBPS PO MT XIV Mains Admit Card 2024',
    shortInfo: 'Institute of Banking Personnel Selection (IBPS) has uploaded the online mains examination call letter for the post of Probationary Officer (PO) Management Trainee (MT).',
    category: Category.ADMIT_CARD,
    postDate: '2024-11-22',
    lastDate: '2024-11-30',
    applyLink: 'https://ibps.in',
    tags: ['IBPS PO', 'Banking', 'Mains Admit Card', 'Bank Jobs']
  },
  {
    id: 'up-police-constable-result',
    title: 'UP Police Constable Recruitment 2024 Written Exam Result',
    shortInfo: 'Uttar Pradesh Police Recruitment and Promotion Board (UPPRPB) has declared the written exam result for 60,244 Constable posts. Selected candidates will be called for PET/PST.',
    category: Category.RESULT,
    postDate: '2024-11-21',
    lastDate: '2025-01-01',
    applyLink: 'https://uppbpb.gov.in',
    tags: ['UP Police', 'Constable Result', 'UPPRPB', 'Govt Result']
  },
  {
    id: 'rrb-alp-technician-apply',
    title: 'Railway RRB ALP & Technician Online Form 2024',
    shortInfo: 'Railway Recruitment Board (RRB) invited applications for the post of Assistant Loco Pilot and Various Technician posts in various zones across India.',
    category: Category.LATEST_JOB,
    postDate: '2024-11-15',
    lastDate: '2024-12-10',
    applyLink: 'https://indianrailways.gov.in',
    totalPosts: 18799,
    tags: ['Railway Jobs', 'RRB ALP', 'Technician Form', 'Central Govt Jobs']
  }
];

export const getByCategory = (category: Category) => 
  JOB_POSTS.filter(post => post.category === category);

export const getJobById = (id: string) => 
  JOB_POSTS.find(post => post.id === id);

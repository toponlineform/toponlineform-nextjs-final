
export enum Category {
  LATEST_JOB = 'Latest Jobs',
  ADMIT_CARD = 'Admit Card',
  RESULT = 'Result',
  ANSWER_KEY = 'Answer Key',
  SYLLABUS = 'Syllabus',
  ADMISSION = 'Admission',
  CERTIFICATE_VERIFICATION = 'Certificate Verification',
  IMPORTANT = 'Important'
}

export interface JobPost {
  id: string;
  title: string;
  shortInfo: string;
  category: Category;
  postDate: string;
  lastDate: string;
  applyLink: string;
  officialNotification?: string;
  applicationFee?: { [key: string]: string };
  ageLimit?: string;
  eligibility?: string[];
  totalPosts?: number;
  tags: string[];
}

export interface Breadcrumb {
  label: string;
  path: string;
}

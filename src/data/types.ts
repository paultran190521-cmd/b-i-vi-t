export interface Step {
  num: number;
  title: string;
  desc: string;
}

export interface Article {
  id: string;
  title: string;
  category: string;
  metaInfo: string;
  readTime: string;
  excerpt: string;
  bannerGradient: string;
  content: {
    intro: string;
    steps: Step[];
    conclusion: string;
  };
  authorId?: string;
  createdAt?: string;
}

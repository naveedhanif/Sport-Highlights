export type Category = 'Best Wickets' | 'Best Catches' | 'Best Run Outs' | 'Best Fielding' | 'Best Six Run' | 'All';

export interface Video {
  id: string;
  title: string;
  thumbnail: string;
  url: string;
  category: Category;
  duration: string;
  views: string;
  description: string;
}

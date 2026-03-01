import { Video, Category } from './types';
import { StumpsIcon, CatchIcon, RunOutIcon, FieldingIcon } from './components/CricketIcons';

export const CATEGORIES: { name: Category; icon: any; color: string; image: string; description: string }[] = [
  { name: 'Best Wickets', icon: StumpsIcon, color: 'text-red-500', image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=800&q=80', description: 'Unplayable deliveries and shattered stumps' },
  { name: 'Best Catches', icon: CatchIcon, color: 'text-blue-500', image: 'https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?auto=format&fit=crop&w=800&q=80', description: 'Gravity-defying leaps and blinders' },
  { name: 'Best Run Outs', icon: RunOutIcon, color: 'text-yellow-500', image: 'https://images.unsplash.com/photo-1607734834519-d8576ae60ea6?auto=format&fit=crop&w=800&q=80', description: 'Direct hits and lightning-fast reflexes' },
  { name: 'Best Fielding', icon: FieldingIcon, color: 'text-green-500', image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=800&q=80', description: 'Boundary saves and acrobatic stops' },
  { name: 'Best Six Run', icon: FieldingIcon, color: 'text-green-500', image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=800&q=80', description: 'Best six hit by Zimbabwe team' },

];

export const VIDEOS: Video[] = [
  { id: '1', title: 'Incredible catch by Zimbabwe', thumbnail: 'https://images.unsplash.com/photo-1587280501635-68a0e82cd5ff?auto=format&fit=crop&w=400&q=80', url: 'https://player.vimeo.com/video/1169294963', category: 'Best Catches', duration: '0:30', views: '1.2M', description: 'An unbelievable catch by the Zimbabwe fielder to dismiss the batsman.' },
  { id: '2', title: 'Incredible Six by Zimbabwe', thumbnail: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=400&q=80', url: 'https://player.vimeo.com/video/1169295636', category: 'Best Six Run', duration: '0:45', views: '890K', description: 'A massive six hit out of the park by the Zimbabwe batsman.' },
  { id: '3', title: 'Best Six by Zimbabwe', thumbnail: 'https://images.unsplash.com/photo-1593341646782-e0b495cff86d?auto=format&fit=crop&w=400&q=80', url: 'https://player.vimeo.com/video/1169295674', category: 'Best Six Run', duration: '0:42', views: '2.5M', description: 'Another fantastic six showing pure power and timing.' },
  { id: '4', title: 'Awesome shot Six by Zimbabwe', thumbnail: 'https://images.unsplash.com/photo-1624526267942-ab0f0b080613?auto=format&fit=crop&w=400&q=80', url: 'https://player.vimeo.com/video/1169295665', category: 'Best Six Run', duration: '0:38', views: '1.8M', description: 'An awesome shot resulting in a beautiful six over the boundary.' },
  { id: '5', title: 'Incredible bowling by Zimbabwe', thumbnail: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=400&q=80', url: 'https://player.vimeo.com/video/1169295684', category: 'Best Wickets', duration: '0:55', views: '500K', description: 'A masterclass in bowling from the Zimbabwe attack.' },
  { id: '6', title: 'Incredible Wicket by Zimbabwe', thumbnail: 'https://images.unsplash.com/photo-1607734834519-d8576ae60ea6?auto=format&fit=crop&w=400&q=80', url: 'https://player.vimeo.com/video/1169295657', category: 'Best Wickets', duration: '0:40', views: '3.1M', description: 'A crucial wicket taken at a pivotal moment in the match.' },
  { id: '7', title: 'Incredible Wicket taken by Zimbabwe', thumbnail: 'https://images.unsplash.com/photo-1593341646782-e0b495cff86d?auto=format&fit=crop&w=400&q=80', url: 'https://player.vimeo.com/video/1169295636', category: 'Best Wickets', duration: '1:05', views: '750K', description: 'Another incredible wicket showcasing the skill of Zimbabwe bowlers.' },
];

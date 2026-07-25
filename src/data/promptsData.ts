export interface PromptItem {
  id: string;
  title: string;
  author: string;
  category: string;
  description: string;
  views?: string;
  prompt: string;
  imageUrl: string;
  model?: string;
  aspectRatio?: string;
  style?: string;
  tags?: string[];
  rating?: number;
  createdAt?: string;
  negativePrompt?: string;
}

export const CATEGORIES_WITH_COUNTS = [
  { name: 'Art', count: 128, tabName: 'Art' },
  { name: 'Photography', count: 86, tabName: 'Photographs' },
  { name: 'Illustration', count: 74, tabName: 'Illustrations' },
  { name: '3D Render', count: 52, tabName: '3D Renders' },
  { name: 'UI / UX', count: 41, tabName: 'UI / UX' },
  { name: 'Anime', count: 36, tabName: 'Anime' },
  { name: 'Sci-Fi', count: 28, tabName: 'Sci-Fi' },
  { name: 'Architecture', count: 19, tabName: 'Architecture' },
  { name: 'Nature', count: 18, tabName: 'Nature' }
];

export const MODEL_OPTIONS = ['Midjourney', 'DALL-E 3', 'Stable Diffusion', 'Leonardo.ai'];
export const ASPECT_RATIOS = ['1:1', '16:9', '4:3', '9:16', '2:3'];
export const STYLE_OPTIONS = ['Photorealistic', 'Digital Art', 'Concept Art', 'Anime'];

export const MOCK_PROMPTS: PromptItem[] = [
  {
    id: '1',
    title: 'Epic Fantasy Landscape',
    author: 'Master',
    category: 'Art',
    description: 'Majestic mountain panorama, towering peaks reflected in still water, golden hour lighting, dramatic clouds, ultra-detailed, cinematic.',
    views: '12.4k',
    prompt: 'Epic fantasy landscape, majestic mountain panorama, towering snow-capped peaks reflected in a perfectly still alpine lake, golden hour lighting with warm orange and pink hues, dramatic storm clouds breaking apart, ancient pine --ar 16:9 --v 6.0',
    imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    model: 'Midjourney',
    aspectRatio: '16:9',
    style: 'Photorealistic',
    tags: ['Art', 'Landscape', 'Master'],
    rating: 98,
    createdAt: 'Apr 3, 2024',
    negativePrompt: 'blurry, low quality, distorted, watermark'
  },
  {
    id: '2',
    title: 'Cyberpunk City Night',
    author: 'Master',
    category: 'Sci-Fi',
    description: 'Neon-drenched urban sprawl, rain-slicked streets, holographic advertisements, cyberpunk aesthetic, cinematic lighting.',
    views: '16.5k',
    prompt: 'Futuristic cyberpunk metropolis at night, rain-slicked concrete streets reflecting vibrant neon advertisements, towering skyscrapers, holographic koi fish swimming through the air between buildings, high-tech vehicles, moody atmospheric fog, highly detailed, photorealistic, cinematic shot --ar 16:9 --style raw',
    imageUrl: 'https://images.unsplash.com/photo-1515621061946-eff1c2a352bd?auto=format&fit=crop&w=800&q=80',
    model: 'Midjourney',
    aspectRatio: '16:9',
    style: 'Photorealistic',
    tags: ['Sci-Fi', 'Urban', 'Master'],
    rating: 96,
    createdAt: 'Apr 5, 2024',
    negativePrompt: 'deformed, noise, text, watermark'
  },
  {
    id: '3',
    title: 'Natural Light Portrait',
    author: 'Contributor',
    category: 'Photography',
    description: 'Soft diffused natural light, subject near window, shallow depth of field, skin texture detail, editorial portrait photography.',
    views: '8.2k',
    prompt: 'Close-up emotional portrait of a woman under warm, low-key indoor lighting, captured on 35mm Leica camera, grainy film texture, authentic expression, soft focus background, Kodak Portra 400 aesthetic, muted vintage colors, high fidelity details --ar 4:5 --style photoreal',
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
    model: 'Stable Diffusion',
    aspectRatio: '2:3',
    style: 'Photorealistic',
    tags: ['Photography', 'Portrait'],
    rating: 95,
    createdAt: 'Mar 28, 2024',
    negativePrompt: 'flash, overexposed, high contrast, smooth skin'
  },
  {
    id: '4',
    title: 'Japanese Tea Room',
    author: 'Contributor',
    category: 'Anime',
    description: 'Serene tatami room interior, soft afternoon light, sliding shoji screens, minimalist Zen decor, hand-drawn background.',
    views: '11.1k',
    prompt: '90s retro anime style cel-shaded illustration of a giant robot mech standing in the middle of a neon-lit neo-Tokyo alley, hand-drawn aesthetic, high contrast ink lines, dramatic shadows, vintage animation screenshot, retro sci-fi art style --ar 4:5 --v 6.0',
    imageUrl: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80',
    model: 'Midjourney',
    aspectRatio: '4:3',
    style: 'Anime',
    tags: ['Anime', 'Interior'],
    rating: 92,
    createdAt: 'Apr 1, 2024',
    negativePrompt: '3d render, photo, photorealistic, modern furniture'
  },
  {
    id: '5',
    title: 'Anime Girl Sunset',
    author: 'Contributor',
    category: 'Anime',
    description: 'Anime art style, girl silhouette at sunset, warm sky gradient, stars starting to show, beautiful lighting, emotional vibe.',
    views: '15.2k',
    prompt: 'An ethereal, magical forest path lined with giant glowing bioluminescent mushrooms, massive ancient mossy trees with twisting roots, soft glowing fog, full moon light filtering through the high canopy, fantasy landscape, fairy tale aesthetic --ar 16:9 --v 6.0',
    imageUrl: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80',
    model: 'Midjourney',
    aspectRatio: '9:16',
    style: 'Anime',
    tags: ['Anime', 'Sunset'],
    rating: 94,
    createdAt: 'Apr 2, 2024',
    negativePrompt: 'ugly, deformed, photorealistic, bad eyes'
  },
  {
    id: '6',
    title: 'Modern Chair Render',
    author: 'Contributor',
    category: '3D Render',
    description: 'Product visualization, sleek modern armchair, studio lighting background, clean shadows, architectural CGI style.',
    views: '9.0k',
    prompt: 'Brutalist concrete villa facade nestled in a dense pine forest, bright direct sunlight casting long, sharp, dark geometric shadows, minimal design, clean lines, concrete and glass texture, architectural photography, photorealistic --ar 16:9',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    model: 'Leonardo.ai',
    aspectRatio: '16:9',
    style: 'Concept Art',
    tags: ['3D Render', 'Furniture'],
    rating: 90,
    createdAt: 'Mar 15, 2024',
    negativePrompt: 'low-poly, drawings, sketch, vintage style'
  },
  {
    id: '7',
    title: 'Clean SaaS Dashboard Interface',
    author: 'Master',
    category: 'UI / UX',
    description: 'SaaS product interface design, clean dashboard components, charts and modular layout, high fidelity mock.',
    views: '7.5k',
    prompt: 'Clean minimal SaaS dashboard user interface, dark mode, violet accents, modular grid cards, modern icons, vector illustrations, UI design style, high fidelity mockup --ar 16:9',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    model: 'DALL-E 3',
    aspectRatio: '16:9',
    style: 'Digital Art',
    tags: ['UI / UX', 'Dashboard'],
    rating: 97,
    createdAt: 'Apr 10, 2024',
    negativePrompt: 'shadowy, messy, text overlays, realism'
  }
];

export default interface iProject {
  id: number;
  slug: string;
  type: string;
  date: string;
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
  tags: { id: number; name: string; slug: string }[];
  project_categories: { id: number; name: string; slug: string }[];
  acf: {
    custom_link_page: string;
    thumbnail: {
      url: string;
      alt: string;
      width: number;
      height: number;
      sizes: {
        thumbnail: string;
        "thumbnail-width": number;
        "thumbnail-height": 150;
        medium: string;
        "medium-width": number;
        "medium-height": number;
        medium_large: string;
        "medium_large-width": number;
        "medium_large-height": number;
        large: string;
        "large-width": number;
        "large-height": number;
        "1536x1536": string;
        "1536x1536-width": number;
        "1536x1536-height": number;
        "2048x2048": string;
        "2048x2048-width": number;
        "2048x2048-height": number;
      };
    };
  };
}

export default interface iServices {
  id: number;
  slug: string;
  type: string;
  date: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  tags: { id: number; name: string; slug: string }[];
  acf: { icon_service: string; custom_link_page: string };
}

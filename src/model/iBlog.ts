export default interface iBlog {
  id: number;
  slug: string;
  _embedded: {
    "wp:featuredmedia": [
      {
        source_url: string;
        media_details: {
          sizes: {
            full: {
              width: number;
              height: number;
              source_url: string;
            };
            medium: {
              width: number;
              height: number;
              source_url: string;
            };
            thumbnail: {
              width: number;
              height: number;
              source_url: string;
            };
            medium_large: {
              width: number;
              height: number;
              source_url: string;
            };
          };
        };
      },
    ];
  };
  type: string;
  date: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  userImgLetter: string;
  categories: [{ id: number; name: string; slug: string }];
  tags: [{name: string, slug:string}]
}

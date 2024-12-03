export default interface iCustomer {
    id: number;
    slug: string;
    type: string;
    title: { rendered: string };
    acf:{
        thumbnail: string;
        website_url: string;
    }
}
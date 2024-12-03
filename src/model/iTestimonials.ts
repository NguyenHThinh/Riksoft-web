export default interface iTestimonials {
    id: number;
    slug: string;
    type: string;
    title: { rendered: string };
    acf: {
        [key: string]: string;
        avatar: string;
        job_title: string;
        content: string;
        star: string;
    }
}
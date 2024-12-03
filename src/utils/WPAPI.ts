import wpapi from "wpapi";

// have bug with env variable
// const WPAPI = new wpapi({ endpoint: env.ENV_ENDPOINT_WPAPI });

const WPAPI = new wpapi({
  endpoint:
    process.env.NEXT_PUBLIC_ENV_ENDPOINT_WPAPI ||
    "https://wpapi.riksoft.vn/wp-json",
});
WPAPI.services = WPAPI.registerRoute("wp/v2", "/services/(?P<id>)");
WPAPI.projectCate = WPAPI.registerRoute("wp/v2", "/project-categories");
WPAPI.projects = WPAPI.registerRoute("wp/v2", "/projects");
WPAPI.customers = WPAPI.registerRoute("wp/v2", "/customers");
WPAPI.partners = WPAPI.registerRoute("wp/v2", "/partners");
WPAPI.testimonials = WPAPI.registerRoute("wp/v2", "/testimonials");
export default WPAPI;

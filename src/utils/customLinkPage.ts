import iProject from "@/model/iProject";
import iServices from "@/model/iServices";
import { PATH_PAGE } from "@/routes/paths";


const customLinkPage = (detail: iServices | iProject) : string => {
    if(detail?.acf?.custom_link_page){
        return detail?.acf?.custom_link_page
    }
    if(detail?.type === "services"){
        if(detail?.content?.rendered){
            return `${PATH_PAGE.services}/${detail?.slug}`
        }
        return PATH_PAGE.services
    }
    if(detail?.type === "projects"){
        return `${PATH_PAGE.projects}/${detail?.slug}`
    }
    return PATH_PAGE.home
}

export default customLinkPage
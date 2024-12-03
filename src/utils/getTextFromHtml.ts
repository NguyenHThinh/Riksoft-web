import Parser from "html-react-parser";

export const extractTextFromHtml = (htmlString: string): string => {
    const parsed = Parser(htmlString);
    if (Array.isArray(parsed)) {
        return parsed.map(el => (typeof el === 'string' ? el : el.props.children)).join('');
    }
    return typeof parsed === 'string' ? parsed : parsed.props.children || '';
};
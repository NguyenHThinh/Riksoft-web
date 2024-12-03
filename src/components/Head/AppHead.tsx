import Head from 'next/head';
import { useLocales } from '@/locales';

// ----------------------------------------------------------------------

interface AppHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogTitle?: string;
  ogType?: string;
  version?: string;
  tag?: string;
  ogUrl?: string;
  meta?: any;
  children?: React.ReactNode;
  [key: string]: any;
}

const getDefaultMeta = (lang = 'vi') => {
  switch (lang) {
    case 'vi': {
      return {
        title: 'RIKSOFT - Công ty phát triển phần mềm',
        description: 'RIKSOFT với mục tiêu cung cấp các dịch vụ, sản phẩm phần mềm chất lượng cao, đạt tiêu chuẩn quốc tế tới thị trường Việt Nam và toàn cầu. Chúng tôi đã và đang dần khẳng định vị thế doanh nghiệp về cung cấp dịch vụ Công nghệ thông tin, Trở thành đối tác công nghệ hàng đầu, thúc đẩy chuyển đổi số.',
        ogImage: '/assets/img/landscape.png',
        keywords: 'phát triển phần mềm, website, webapp, phân tích dữ liệu, trí tuệ nhân tạo, tư vấn chuyển đổi số, dịch vụ công nghệ',
      };
    }

    case 'en': {
      return {
        title: 'RIKSOFT - Software development company',
        description: 'RIKSOFT aims to provide high-quality software services and products that meet international standards to both the Vietnamese and global markets. We have been and are gradually asserting our position as a leading enterprise in providing information technology services, becoming a top technology partner and driving digital transformation.',
        ogImage: '/assets/img/landscape.png',
        keywords: 'website development, website, webapp, data analytics, artificial intelligence, Digital Transformation, IT services'
      };
    }

    default: {
      return {
        title: 'RIKSOFT - Software development company',
        description: 'RIKSOFT aims to provide high-quality software services and products that meet international standards to both the Vietnamese and global markets. We have been and are gradually asserting our position as a leading enterprise in providing information technology services, becoming a top technology partner and driving digital transformation.',
        ogImage: '/assets/img/landscape.png',
        keywords: 'website development, website, webapp, data analytics, artificial intelligence, Digital Transformation, IT services'
      };
    }
  }
};


const AppHead: React.FC<AppHeadProps> = ({
                                           title,
                                           description,
                                           keywords,
                                           ogImage,
                                           ogTitle,
                                           ogType,
                                           version = '1.0.0',
                                           tag = '',
                                           ogUrl,
                                           meta,
                                           children,
                                           ...other
                                         }: AppHeadProps) => {
  const { currentLang } = useLocales();
  const defaultMeta = getDefaultMeta(currentLang.value);

  return (
    <Head>
      <title>{`${title || defaultMeta.title} | RIKSOFT`}</title>
      <meta property="og:title" content={title ? title || ogTitle : defaultMeta.title} key="og:title"/>
      <meta property="og:description" content={description || defaultMeta.description} key="og:description"/>
      <meta name="description" content={description || defaultMeta.description} key="description"/>
      <meta name="keywords" content={keywords || defaultMeta.keywords} key="keywords"/>
      <meta name="viewport" content="initial-scale=1, width=device-width" key="viewport"/>
      <meta property="og:image" content={ogImage || defaultMeta.ogImage} key="og:image"/>
      <meta name="twitter:card" content="summary_large_image" key="twitter:card"/>
      <meta property="og:type" content={ogType || 'website'} key="og:type"/>
      <meta property="ui-version" content={version} key="ui-version"/>
      <meta property="ui-tags" content={tag} key="ui-tags"/>
      {ogUrl && <meta property="og:url" content={ogUrl} key="og:url"/>}
      {meta}
      {children}
    </Head>
  );
}

export default AppHead;

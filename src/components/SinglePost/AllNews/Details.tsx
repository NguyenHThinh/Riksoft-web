import formatPostDate from "@/common/calculateDate";
import AppImage from "@/components/AppImage";
import { useLocales } from "@/locales";
import iBlog from "@/model/iBlog";
import React from "react";

interface DetailsProps {
  details: iBlog
  style: string;
}

const Details: React.FC<DetailsProps> = ({ details, style }) => {
  const { t } = useLocales(["post"])

  return (
    <div className="blog-details-slider mb-100">
      <div className="section-head text-center mb-60 style-5">
        <h2 className="mb-20 color-000">{details?.title?.rendered || ''}</h2>
        <small className="d-block date text">
          <span
            className={`text-uppercase border-end brd-gray pe-3 me-3 color-main${style} fw-bold`}
          >
            {details?.type ? t(`common:${details?.type}`) : ""}
          </span>
          <i className="bi bi-clock me-1"></i>
          <span className="op-8 ms-1">{`${formatPostDate(details?.date)} ${typeof formatPostDate(details?.date) === 'number' ? t('common:timer') : ''}`}</span>
        </small>
      </div>
      <div className="content-card">
        <div className="img">
          <AppImage
            src={details?._embedded?.["wp:featuredmedia"]?.[0]?.source_url}
            alt="..."
            width={1140}
            height={500}
            sizes="(max-width: 320px) 150px, (max-width: 480px) 300px, (max-width: 768px) 768px, 1000px"
          />
        </div>
      </div>
    </div>
  );
};

export default Details;

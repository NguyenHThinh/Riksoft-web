interface MetadataProps {
  metadata: {
    user: {
      imgLetter: string;
      name: string;
    };
    commentsCount: number;
    viewsCount: string;
  };
}

const Metadata: React.FC<MetadataProps> = ({ metadata }) => {
  return (
    <div className="d-flex small align-items-center justify-content-between mb-70 fs-12px">
      <div className="l_side d-flex align-items-center">
        <a href="#" className="me-3 me-lg-5">
          <span className="icon-20 rounded-circle d-inline-flex justify-content-center align-items-center text-uppercase bg-main p-1 me-2 text-white">
            {metadata.user.imgLetter}
          </span>
          <span className="">By {metadata.user.name}</span>
        </a>
        <a href="#" className="me-3 me-lg-5">
          <i className="bi bi-chat-left-text me-1"></i>
          <span>{metadata.commentsCount} Comments</span>
        </a>
        <a href="#">
          <i className="bi bi-eye me-1"></i>
          <span>{metadata.viewsCount} Views</span>
        </a>
      </div>
      <div className="r-side mt-1">
        <a href="#">
          <i className="bi bi-info-circle me-1"></i>
          <span>Report</span>
        </a>
      </div>
    </div>
  );
};

export default Metadata;

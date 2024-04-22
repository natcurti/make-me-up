import "./styles.css";

interface IBannerCategory {
  title: string;
}

const BannerCategory = ({ title }: IBannerCategory) => {
  return (
    <div className="container-banner-category mx-auto rounded-3 d-flex justify-content-center align-items-center">
      <h2 className="text-category fw-bold text-uppercase p-2 h-5 d-flex justify-content-center align-items-center rounded-3">
        {title}
      </h2>
    </div>
  );
};

export default BannerCategory;

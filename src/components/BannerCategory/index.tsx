import "./styles.css";

interface IBannerCategory {
  title: string;
}

const BannerCategory = ({ title }: IBannerCategory) => {
  return <div className="container-banner-category">{title}</div>;
};

export default BannerCategory;

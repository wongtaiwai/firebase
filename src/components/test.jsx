import { Space } from "antd";
import Header from "../components/Header";
import ProductList from "../components/ProductList";
import Article from "../components/Article";
import Footer from "../components/Footer";

function Home() {
  return (
    <div style={{ maxWidth: "800px", margin: "0 auto" }}>
      <Header Name="Name" Slogan="你好" />
      <Space direction="vertical">
        <ProductList Image="圖片" />
        <Article />
      </Space>
      <Footer Adress="臺北市和平東路二段134號,國立臺北教育大學 數位科技設計學系" />
    </div>
  );
}

export default Home;

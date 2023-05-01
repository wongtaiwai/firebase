import Header from "../components/Header"
import ProductList from "../components/ProductList/ProductList";
import Article from "../components/Article";
import Footer from "../components/Footer";
import { Space } from "antd";
import { useImage } from "../api/react-hook/hook";

function Home(){

    const {data , isLoading} = useImage();
    const Recivce = data || [];
   return (
       
        <div>
        <Space direction="vertical" size="large">
            <Header
                Name="Name"
                Slogan="你好"/>
            <ProductList
                Image="圖片" data = {Recivce} />
            <Article/>
        </Space>

            <Footer 
                Adress="臺北市和平東路二段134號,國立臺北教育大學 數位科技設計學系"/>
        </div>

        

    );


}

export default Home
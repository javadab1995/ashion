/* eslint-disable react-refresh/only-export-components */
import Footer from "../../ui/Footer"
import Header from "../../ui/Header"
import BannerSlider from "./BannerSlider"
import Categories from "./Categories"
import DiscountBanner from "./DiscountBanner"
import InistgramLink from "./InistgramLink"
import ServiceSection from "./ServiceSection"
import { getProduct} from "../../services/apiShop"
import { useLoaderData, useNavigation } from "react-router-dom"
import NewProducts from "./NewProducts"
import Loader from "../../ui/Loader"
import MobileHeader from "../../ui/MobileHeder"


function HomPage() {
   
    const product = useLoaderData();
    

     const navigation = useNavigation();
     const isLoading = navigation.state === "loading";
 
    return (

        <main >
            {isLoading && <Loader />}
            
            <Header  />
            <MobileHeader />
            <Categories />
            <NewProducts shop={product} />
            <BannerSlider />
            <DiscountBanner />
            <ServiceSection />
            <InistgramLink />
            <Footer />
           
        </main>
    )
}


export async function loader() {
    const shop = await getProduct();
    return shop
}


export default HomPage

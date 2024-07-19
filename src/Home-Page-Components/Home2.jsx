import { useNavigate } from 'react-router-dom';

import Banner from './Banner'
import phone from '../assets/Home-Page-Assests/BannerImages/IphoneImage.png'

import SmallBanners from './SmallBanners'
import EarPhone from '../assets/Home-Page-Assests/SmallBannersImages/headPhone.png'
import img36 from '../assets/Home-Page-Assests/SmallBannersImages/image36.png'
import computer from '../assets/Home-Page-Assests/SmallBannersImages/MacBookPro14.png'
import playstation from '../assets/Home-Page-Assests/SmallBannersImages/PlayStation.png'

import Category from './Category'
import camera from '../assets/Home-Page-Assests/CategoryImages/Cameras.png'
import computers from '../assets/Home-Page-Assests/CategoryImages/Computers.png'
import gaming from '../assets/Home-Page-Assests/CategoryImages/Gaming.png'
import headphomes from '../assets/Home-Page-Assests/CategoryImages/Headphones.png'
import iconleft from '../assets/Home-Page-Assests/CategoryImages/Iconleft.png'
import iconright from '../assets/Home-Page-Assests/CategoryImages/Iconright.png'
import phones from '../assets/Home-Page-Assests/CategoryImages/Phones.png'
import smartwatches from '../assets/Home-Page-Assests/CategoryImages/SmartWatches.png'

import Products from './Products'
import like from '../assets/Home-Page-Assests/ProductsImages/Like.png'
import overheadphone from '../assets/Home-Page-Assests/ProductsImages/overHeadPhone.png'
import productphone from '../assets/Home-Page-Assests/ProductsImages/phone.png'
import phone2 from '../assets/Home-Page-Assests/ProductsImages/phone2.png'
import photocamera from '../assets/Home-Page-Assests/ProductsImages/photoCamera.png'
import smartwatches2 from '../assets/Home-Page-Assests/ProductsImages/smartWatches.png'
import tablet from '../assets/Home-Page-Assests/ProductsImages/tablet.png'
import watch from '../assets/Home-Page-Assests/ProductsImages/watch.png'
import earphone from '../assets/Home-Page-Assests/ProductsImages/earPhone.png'

import Banners from './Banners'
import banners1 from '../assets/Home-Page-Assests/BannersImages/Group1.png'
import banners2 from '../assets/Home-Page-Assests/BannersImages/image41.png'
import banners3 from '../assets/Home-Page-Assests/BannersImages/image64.png'
import banners4 from '../assets/Home-Page-Assests/BannersImages/Macbook1.png'

import DiscountProducts from './DiscountProducts'
import ıphonepro1 from '../assets/Home-Page-Assests/DiscountProductsImages/Iphonepro1.png'
import ıphonepro2 from '../assets/Home-Page-Assests/DiscountProductsImages/Iphone14pro1.png'

import Banner2 from './Banner2'
import image6 from '../assets/Home-Page-Assests/Banner2Images/image6.png'
import image7 from '../assets/Home-Page-Assests/Banner2Images/image7.png'
import image8 from '../assets/Home-Page-Assests/Banner2Images/image8.png'
import image18 from '../assets/Home-Page-Assests/Banner2Images/image18.png'
import tabletApple from '../assets/Home-Page-Assests/Banner2Images/tabletApple.png'
import { useEffect, useState } from 'react'


const Home2 = () => {

    const [categories, setCategories] = useState([])
    const [discounts, setDiscounts] = useState([])
    const [banner, setBanners] = useState([])
    const [tagsProducts, setTagsProducts] = useState([])
    const [tagTitle, setTagTitle] = useState([])

    useEffect(() => {
        fetch("http://localhost:3000/Categories")
            .then(response => response.json())
            .then(data => setCategories(data))
            .catch(error => console.log(error))
    }, []);

    useEffect(() => {
        fetch("http://localhost:3000/Product?discount=true")
            .then(response => response.json())
            .then(data => setDiscounts(data))
            .catch(error => console.log(error))
    }, []);

    useEffect(() => {
        fetch("http://localhost:3000/Banner")
            .then(response => response.json())
            .then(data => setBanners(data))
            .catch(error => console.log(error))
    }, []);

    useEffect(() => {
        fetch("http://localhost:3000/Product?Tag.Id=1") //sayfa ilk açıldıgında deafult deger olarak ıd 1 ın urunlerini aldım. ilk bunu calıştırıyor
            .then(response => response.json())
            .then(data => setTagsProducts(data))
            .catch(error => console.log(error))
    }, []);
    // useEffect(() => {
    //     fetch("http://localhost:3000/Product?Tag.Id=2")
    //         .then(response => response.json())
    //         .then(data => setTagsProducts(data))
    //         .catch(error => console.log(error))
    // }, []);
    // useEffect(() => {
    //     fetch("http://localhost:3000/Product?Tag.Id=3")
    //         .then(response => response.json())
    //         .then(data => setTagsProducts(data))
    //         .catch(error => console.log(error))
    // }, []);


    function HandleClick(id) {   // ilk çalıştığında değil basıldıgında calısacagı için useEffect kullanmamıza gerek yok
        fetch(`http://localhost:3000/Product?Tag.Id=${id}`)
            .then(response => response.json())
            .then(data => setTagsProducts(data))
            .catch(error => console.log(error))
    }

    useEffect(() => {
        fetch("http://localhost:3000/Tags") //sayfa ilk açıldıgında deafult deger olarak ıd 1 ın urunlerini aldım. ilk bunu calıştırıyor
            .then(response => response.json())
            .then(data => setTagTitle(data))
            .catch(error => console.log(error))
    }, []);

    // 101 de parametreli yaptığımız HandleClick fonksiyonunu= bu 3 fonksiyon yerine kullandık

    // function HandleClick() { // ilk çalıştığında değil basıldıgında calısacagı için useEffect kullanmamıza gerek yok
    //     fetch("http://localhost:3000/Product?Tag.Id=1")
    //         .then(response => response.json())
    //         .then(data => setTagsProducts(data))
    //         .catch(error => console.log(error))
    // }
    // function HandleClick2() {
    //     fetch("http://localhost:3000/Product?Tag.Id=2")
    //         .then(response => response.json())
    //         .then(data => setTagsProducts(data))
    //         .catch(error => console.log(error))
    // }
    // function HandleClick3() {
    //     fetch("http://localhost:3000/Product?Tag.Id=3")
    //         .then(response => response.json())
    //         .then(data => setTagsProducts(data))
    //         .catch(error => console.log(error))
    // }

    const navigate = useNavigate();
    const shopbuttonclick = () => {
        navigate('/ProductsPage');
    }
    const productsField = (id) => {
        navigate(`/ProductsPage/${id}`)
    };

    const bannerField = (tt) => {
        navigate(`/BannerProducts/${tt}`)
    }
    const detailPage = (detailId) => {
        navigate(`/ProductDetail/${detailId}`)
    }

    return (
        <div className="">
            <Banner Iphone={phone} buttonclick={shopbuttonclick} />

            <SmallBanners earPhone={EarPhone} playstationArm={img36} macBook={computer} playStation={playstation} buttonclick={shopbuttonclick} />

            <div className="category commonWidth">
                <div className="top">
                    <h4>Browse By Category</h4>
                    <div className="directions">
                        <img src={iconleft} alt="" />
                        <img src={iconright} alt="" />
                    </div>
                </div>
                <div className="categories">
                    {categories.map(category => (
                        <Category key={category.Id} handleClick={() => productsField(category.Id)} ikon={category.ImageUrl} description={category.Name} />
                    ))}
                    {/* <Category ikon={phones} description="Phones" />
                    <Category ikon={smartwatches} description="Smart Watches" />
                    <Category ikon={camera} description="Cameras" />
                    <Category ikon={headphomes} description="Headphones" />
                    <Category ikon={computers} description="Computers" />
                    <Category ikon={gaming} description="Gaming" /> */}
                </div>
            </div>

            <div className="products commonWidth">
                <div className="tags">
                    {tagTitle.map(tag => (
                        <button onClick={() => HandleClick(tag.Id)} className='commonColor tagsButton'>{tag.Name}</button>
                    ))}
                    {/* <button onClick={() => HandleClick("2")} className='commonColor tagsButton'>Bestseller</button>
                    <button onClick={() => HandleClick("3")} className='commonColor tagsButton'>Featured Products</button> */}
                </div>
                <div className="productsgrid">
                    {tagsProducts.map(tag => (
                        <Products key={tag.Id} like={like} photo={tag.ImageUrl} description={tag.Name} money={tag.Price} buttonclick={() => detailPage(tag.Id)}/>

                    ))}
                    {/* <Products like={like} photo={productphone} description="Apple iPhone 14 Pro Max 128GB Deep Purple (MQ9T3RX/A)" money="$900" />
                    <Products like={like} photo={photocamera} description="Blackmagic Pocket Cinema Camera 6k" money="$2535" />
                    <Products like={like} photo={smartwatches2} description="Apple Watch Series 9 GPS 41mm Starlight Aluminium Case" money="$399" />
                    <Products like={like} photo={overheadphone} description="AirPods Max Silver" money="$549" />
                    <Products like={like} photo={watch} description="Samsung Galaxy Watch6 Classic 47mm Black" money="$369" />
                    <Products like={like} photo={phone2} description="Galaxy Z Fold5 Unlocked | 256GB | Phantom Black" money="$1799" />
                    <Products like={like} photo={earphone} description="Galaxy Buds FE Graphite" money="$99.99" />
                    <Products like={like} photo={tablet} description="Apple iPad 9 10.2' 64GB Wi-Fi Silver (MK2L3) 2021" money="$398" /> */}
                </div>
            </div>
            <div className="bannercontainer">
                {banner.map(bnr => (
                    <Banners key={bnr.Id} photo={bnr.ImageUrl} title={bnr.Name} bannerdescription={bnr.Description} bannersButton={() => bannerField(bnr.Id)} />  //tt=bnr.ıd
                ))}
                {/* <Banners photo={banners3} title="Ipad Pro" bannerdescription="iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use." bannersButton={shopbuttonclick} />
                <Banners photo={banners2} title="Samsung Galaxy" bannerdescription="iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use." bannersButton={shopbuttonclick} />
                <Banners photo={banners4} title="Macbook Pro" bannerdescription="iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use." bannersButton={shopbuttonclick} /> */}
            </div>

            <div className="discountproducts commonWidth">
                <h3>Discounts up to -50%</h3>
                <div className="discountrow">
                    {discounts.map(discountProducts => (
                        <DiscountProducts key={discountProducts.Id} like={like} discountphoto={discountProducts.ImageUrl} discountdescription={discountProducts.Name} money={discountProducts.Price} clickButton={shopbuttonclick} />
                    ))}

                    {/* <DiscountProducts like={like} discountphoto={ıphonepro1} discountdescription="Apple iPhone 14 Pro 512GB Gold (MQ233)" money="$1437" clickButton={shopbuttonclick} />
                    <DiscountProducts like={like} discountphoto={overheadphone} discountdescription="AirPods Max Silver" money="$549" clickButton={shopbuttonclick} />
                    <DiscountProducts like={like} discountphoto={smartwatches2} discountdescription="Apple Watch Series 9 GPS 41mm Starlight Aluminium Case" money="$399" clickButton={shopbuttonclick} />
                    <DiscountProducts like={like} discountphoto={ıphonepro2} discountdescription="Apple iPhone 14 Pro 1TB Gold (MQ2V3)" money="$1499" clickButton={shopbuttonclick} /> */}
                </div>
            </div>

            <div className="banner2section commonWidth">
                <Banner2 banner2photo={image6} banner2photo2={image7} banner2photo3={image8} banner2photo4={image18} banner2photo5={tabletApple} butonClick={shopbuttonclick} />
            </div>

        </div>
    );
}

export default Home2;
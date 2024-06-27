const Banner = (BannerProps) => {
    const Iphone = BannerProps.Iphone;
    const buttonclick = BannerProps.buttonclick;
    
    return(
        <div className="Banner commonWidth">
            <div className="content">
                <p className="commonColor">Pro.Beyond.</p>
                <h3 className="commonColorWhite">Iphone 14 Pro</h3>
                <p className="commonColor">Created to change everything for the better. For everyone</p>
                <button onClick={buttonclick} className="transparentButton commonColorWhite">Shop Now</button>
            </div>
            <img src={Iphone} alt="" />
        </div>
    );
 }
 export default Banner;
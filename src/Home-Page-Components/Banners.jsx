const Banners = (BannersProps) => {
    const photo = BannersProps.photo;
    const title = BannersProps.title;
    const bannerdescription = BannersProps.bannerdescription;
    const bannersButton = BannersProps.bannersButton;
    return (
        <div className="banners">
            <div className="bannerphoto">
                <img src={photo} alt="" />
            </div>
            <div className="bannerdescription">
                <div className="bannertext">
                    <h3>{title}</h3>
                    <p>{bannerdescription}</p>
                    <button onClick={bannersButton} className="transparentButton2">Shop Now</button>
                </div>

            </div>
        </div>
    );
}
export default Banners;
const Banner2 = (Banner2Props) => {
    const banner2photo = Banner2Props.banner2photo;
    const banner2photo2 = Banner2Props.banner2photo2;
    const banner2photo3 = Banner2Props.banner2photo3;
    const banner2photo4 = Banner2Props.banner2photo4;
    const banner2photo5 = Banner2Props.banner2photo5;
    const butonClick = Banner2Props.butonClick

    return (
        <div className="banner2">
            <img src={banner2photo} alt="" />
            <img src={banner2photo2} alt="" />
            <img src={banner2photo3} alt="" />
            <img src={banner2photo4} alt="" />
            <img src={banner2photo5} alt="" />
            <div className="banner2description">
                <h2>Big Summer Sale</h2>
                <p className="commonColor">Commodo fames vitae vitae leo mauris in. Eu consequat.</p>
                <button className="transparentButton">Shop Now</button>
            </div>
        </div>
    )
}
export default Banner2;
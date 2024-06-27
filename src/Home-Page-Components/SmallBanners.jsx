const SmallBanners = (SmallBannersProps) => {
    const earPhone = SmallBannersProps.earPhone;
    const playstationArm = SmallBannersProps.playstationArm;
    const macBook = SmallBannersProps.macBook;
    const playStation = SmallBannersProps.playStation;
    const buttonclick = SmallBannersProps.buttonclick;
    return (
        <div className="smalLbanners commonWidth">
            <div className="LeftsBanners">
                <div className="widesquare">
                    <img src={playStation} alt="" />
                    <div className="titleText">
                        <h2>Playstation 5</h2>
                        <p className="commonColor">Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience.</p>
                    </div>
                </div>
                <div className="squares">
                    <div className="leftsquare">
                        <img src={earPhone} alt="" />
                        <div className="textleftsquare">
                            <h2>Apple <br /> Airpods Max</h2>
                            <p className="commonColor">Computational audio. <br /> Listen, it's powerful</p>
                        </div>
                    </div>
                    <div className="rightsquare whiteColor">
                        <img src={playstationArm} alt="" />
                        <div className="textrightsquare">
                            <h2>Apple <br /> Vision Pro</h2>
                            <p className="commonColor">An immersive way to <br /> experience entertainment</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bigbanner">
                <div className="textbigbanner">
                <h2>Macbook Air</h2>
                <p className="commonColor">The new 15‑inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display.</p>
                <button onClick={buttonclick} className="transparentButton2">Shop Now</button>
                </div>
                <img src={macBook} alt="" />
            </div>
        </div>
    );
}
export default SmallBanners;
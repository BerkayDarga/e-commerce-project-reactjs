const HeaderTop = (HeaderTopProps) => {
    const cyberLogo = HeaderTopProps.cyberLogo;
    const likeLogo = HeaderTopProps.likeLogo;
    const shopLogo = HeaderTopProps.shopLogo;
    const userLogo = HeaderTopProps.userLogo;
    return (
        <div className="HeaderTop commonWidth">
            <img src={cyberLogo} />
            <input placeholder="Search" type="text" />
            
            <div className="navigation">
                <a className="commonColor" href="">Home</a>
                <a className="commonColor" href="">About</a>
                <a className="commonColor" href="">Contact Us</a>
                <a className="commonColor" href="">Blog</a>
            </div>
            <div className="icons">
                <img className="iconsMargin" src={likeLogo} />
                <img className="iconsMargin" src={shopLogo} />
                <img src={userLogo} />
            </div>
        </div>
        
    );
}
export default HeaderTop;
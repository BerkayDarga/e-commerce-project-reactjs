const Category = (CategoryProps) => {
    const ikon = CategoryProps.ikon;
    const description = CategoryProps.description;
    return (
        <div className="categoryprops">
                <img src={ikon} alt="" />
                <h5>{description}</h5>
            </div>
    );
}
export default Category;
import {Link} from "react-router-dom";

const EditProduct = () => {
    return (
        <>
            <div className={"container"}>
                <div className={"row"}>
                    <div className={"col-6"}>
                        <h4> ویرایش محصول</h4>
                    </div>
                    <div className={"col-6"}>
                        <Link to={"/dashboard/products"}>
                            <button className="buttonGlass glass clear-a float-start" type="button">
                               برگشت
                            </button>
                        </Link>
                    </div>
                </div>
                <br/>
                <div className={"col-12 row"}>
                    <div className={"col-md-6 col-sm-12 mb-3"}>
                        <label className="ms-3">نام محصول :</label>
                        <input className="inputGlass" type="text" placeholder="نام محصول را وارد کنید "/>
                    </div>
                    <div className={"col-md-6 col-sm-12 mb-3"}>
                        <label className="ms-3">امتیاز محصول :</label>
                        <input className="inputGlass" type="number" placeholder="امتیاز محصول را وارد کنید "/>
                    </div>
                    <div className={"col-md-6 col-sm-12 mb-3"}>
                        <label className="ms-3">نوع محصول :</label>
                        <select className="form-select d-inline w-50" aria-label="Default select example">
                            <option value="1">خدماتی</option>
                            <option value="0">جوایز</option>
                        </select>
                    </div>
                    <div className={"col-md-6 col-sm-12 mb-3"}>
                        <label className="ms-3">وضعیت نمایش :</label>
                        <select className="form-select d-inline w-50" aria-label="Default select example">
                            <option value="1">فعال</option>
                            <option value="0">غیر فعال</option>
                        </select>
                    </div>
                    <div className={"col-12 mb-3"}>
                        <label className="ms-3">تصویر محصول :</label>
                        <input className="inputGlass" type="file" />
                    </div>
                    <div className={"col-12 mb-3"}>
                        <label className="ms-3"> توضیحات :</label>
                        <input className="inputGlass w-100" type="text" placeholder="توضیحات را وارد کنید" />
                    </div>
                </div>
            </div>

            <br/>
            <br/>
            <Link to={"/dashboard/products"} >
                <button className="buttonGlass glass green-a float-start" type="button">
                    ثبت ویرایش
                </button>
            </Link>

        </>
    )
}
export default EditProduct;
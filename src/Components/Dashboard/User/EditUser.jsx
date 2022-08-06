import {Link} from "react-router-dom";

const CreateProduct = () => {
    return (
        <>
            <div className={"container"}>
                <div className={"row"}>
                    <div className={"col-6"}>
                        <h4> ویرایش کاربر</h4>
                    </div>
                    <div className={"col-6"}>
                        <Link to={"/dashboard/users"}>
                            <button className="buttonGlass glass clear-a float-start" type="button">
                                برگشت
                            </button>
                        </Link>
                    </div>
                </div>
                <br/>
                <div className={"col-12 row text-center"}>
                    <div className={"col-md-6 col-sm-12 mb-3"}>
                        <label className="ms-3">نام :</label>
                        <input className="inputGlass" type="text" placeholder="نام  را وارد کنید "/>
                    </div>
                    <div className={"col-md-6 col-sm-12 mb-3"}>
                        <label className="ms-3">امتیاز :</label>
                        <input className="inputGlass" type="number" placeholder="امتیاز را وارد کنید "/>
                    </div>
                    <div className={"col-md-6 col-sm-12 mb-3"}>
                        <label className="ms-3">شماره تماس :</label>
                        <input className="inputGlass" type="number" placeholder="شماره تماس را وارد کنید "/>
                    </div>
                    <div className={"col-md-6 col-sm-12 mb-3"}>
                        <label className="ms-3">نوع کاربر :</label>
                        <select className="form-select d-inline w-50" aria-label="Default select example">
                            <option value="0">کاربر عادی</option>
                            <option value="1">ادمین</option>
                        </select>
                    </div>
                    <div className={"col-12 mb-3"}>
                        <label className="ms-3"> آدرس :</label>
                        <input className="inputGlass w-75" type="text" placeholder="آدرس را وارد کنید" />
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
export default CreateProduct;
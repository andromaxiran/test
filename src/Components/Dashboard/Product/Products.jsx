import image from "../../../assets/images.jpg";
import {Link} from "react-router-dom";

const Products = () => {

    return (
        <>
            <div className={"container"}>
                <div className={"row"}>
                    <div className={"col-6"}>
                        <h4>محصولات</h4>
                    </div>
                    <div className={"col-6"}>
                        <Link to={"/dashboard/products/create"} >
                        <button className="buttonGlass glass green-a float-start" type="button">
                            ساخت محصول جدید
                        </button>
                        </Link>
                    </div>
                </div>

                <br/>
                <div className={"col-12"}>
                    <table className="tableGlass w-100">
                        <thead>
                        <tr>
                            <th>نام محصول</th>
                            <th> تصویر</th>
                            <th>امتیاز</th>
                            <th>نوع محصول</th>
                            <th>وضعیت</th>
                            <th className={"text-center"}>تنظیمات</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>کیسه</td>
                            <td><img className="table-img"
                                     src={image}
                                     alt=""/>
                            </td>
                            <td>50</td>
                            <td>خدماتی</td>
                            <td>فعال</td>
                            <td className={"text-center"}>
                                <Link to={"/dashboard/products/edit"} >
                                    <button className="buttonGlass glass blue-a" type="button">ویرایش</button>
                                </Link>
                                <button className="buttonGlass glass red-a" type="button">حذف</button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </>
    )
}
export default Products;
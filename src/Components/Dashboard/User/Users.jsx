import image from "../../../assets/images.jpg";
import {Link} from "react-router-dom";

const Users = () => {

    return (
        <>
            <div className={"container"}>
                <div className={"row"}>
                    <div className={"col-6"}>
                        <h4>کاربران</h4>
                    </div>
                </div>

                <br/>
                <div className={"col-12"}>
                    <table className="tableGlass w-100">
                        <thead>
                        <tr>
                            <th>نام </th>
                            <th>شماره تماس</th>
                            <th>ایمیل</th>
                            <th> امتیاز</th>
                            <th>وضعیت</th>
                            <th className={"text-center"}>تنظیمات</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>جویی تربیانی</td>
                            <td>09156663232</td>
                            <td>joyi@terbiani.com</td>
                            <td>800</td>
                            <td>ادمین</td>
                            <td className={"text-center"}>
                                <Link to={"/dashboard/users/edit"} >
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
export default Users;
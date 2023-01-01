import * as React from 'react';
import {Link} from "react-router-dom";

export const EmployeeJob = () => {
    return (
        <div>
            <Link to={'/job/add-employee'}>
            <button className={'btn btn-outline-success me-3 float-start my-4'}>
                اضافه کردن کاربر مجموعه
            </button>
            </Link>
            <table className="table text-center">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">نام کاربری</th>
                    <th scope="col">شماره همراه</th>
                    <th scope="col">دسته بندی</th>
                    <th scope="col">تنظیمات</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>جویی تریبیانی</td>
                    <td>0915857</td>
                    <td>آرایشگاه</td>
                    <td>
                        <Link to="/job/reserve-times">
                            <button className={'btn btn-outline-warning mx-2'}>
                                ساعت کاری
                            </button>
                        </Link>
                        <button className={'btn btn-outline-primary mx-2'}>
                            ویرایش
                        </button>
                        <button className={'btn btn-outline-danger'}>
                            حذف
                        </button>
                    </td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>چندلر بینگ</td>
                    <td>0915857</td>
                    <td>مکانیکی</td>
                    <td>
                        <Link to="/job/reserve-times">
                            <button className={'btn btn-outline-warning mx-2'}>
                                ساعت کاری
                            </button>
                        </Link>

                        <button className={'btn btn-outline-primary mx-2'}>
                            ویرایش
                        </button>
                        <button className={'btn btn-outline-danger'}>
                            حذف
                        </button>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};
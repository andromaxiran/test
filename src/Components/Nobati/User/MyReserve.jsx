import * as React from 'react';

const MyReserve = () => {
    return (
        <div>
            <table className="table table-striped table-hover text-center">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">نام</th>
                    <th scope="col">تاریخ</th>
                    <th scope="col">وضعیت</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>آرایشگاه</td>
                    <td> دوشنبه -5 دی- ساعت 3</td>
                    <td>رزرو شده</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>آرایشگاه</td>
                    <td>دوشنبه -5 دی -ساعت 5</td>
                    <td>کنسل شده</td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>آرایشگاه</td>
                    <td>دوشنبه -5 دی -ساعت 5</td>
                    <td>انجام شده</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};
export default MyReserve;
import * as React from 'react';

const MyUsers = () => {
    return (
        <div>
            <table className="table table-striped table-hover text-center">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">نام کاربر</th>
                    <th scope="col">تاریخ عضویت</th>
                    <th scope="col">تعداد رزرو</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>محمد</td>
                    <td> 1401-5-2</td>
                    <td>5</td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>وحید</td>
                    <td> 1401-5-2</td>
                    <td>5</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};
export default MyUsers;
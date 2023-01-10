import * as React from 'react';

const EditNewUser = () => {
    return (
        <div>
            <div className={'container'}>
                <div className={'form-check-inline'}>
                    <label htmlFor={'name'}>نام</label>
                    <input type={'text'}  className={'form-control'} placeholder={'نام را وارد کنید'}/>
                </div>
                <div className={'form-check-inline'}>
                    <label>نام خانوادگی</label>
                    <input type={'text'} className={'form-control'} placeholder={'نام خانوادگی را وارد کنید'}/>
                </div>
                <button className={'btn btn-outline-success me-3'}>ثبت تغییرات</button>
            </div>
        </div>
    );
};
export default EditNewUser;
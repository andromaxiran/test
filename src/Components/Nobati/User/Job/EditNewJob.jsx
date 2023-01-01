
import * as React from 'react';

export const EditNewJob = () => {
    return (
        <div className={'my-4'}>
            <div className={'form-check-inline'}>
                <label htmlFor={'name'}> نام کسب و کار</label>
                <input type={'text'} className={'form-control'} placeholder={'مانند : مکانیکی جلال'}/>
            </div>
            <div className={'form-check-inline'}>
                <label htmlFor={'name'}>شماره تماس محل کار</label>
                <input type={'text'} className={'form-control'} placeholder={'051-4422xxx'}/>
            </div>
            <div className="form-check-inline">
                <label htmlFor="formFile" className="form-label">آپلود عکس بنر</label>
                <input className="form-control" type="file" id="formFile"/>
            </div>
            <div className={'form mt-4'}>
                <label htmlFor={'name'}>آدرس</label>
                <input type={'text'} className={'form-control'} placeholder={'آدرس محل کار را وارد کنید'}/>
            </div>
            <button className={'btn btn-outline-success me-3 mt-4 float-start'}>ثبت تغییرات</button>
        </div>
    );
};
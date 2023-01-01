import * as React from 'react';

export const AddEmployee = () => {
    return (
        <div className={''}>
            <form>
             <div className={'row'}>
                 <div className="mb-3 col-sm-12 col-md-6">
                     <label htmlFor="exampleInputEmail1" className="form-label">نام کامل کارمند</label>
                     <input type="text" className="form-control" id="exampleInputEmail1" />
                     <div id="emailHelp" className="form-text">مانند : محمد محمدی ، این نام برای نمایش پروفایل شخص به کار میرود</div>
                 </div>
                 <div className="mb-3 col-sm-12 col-md-6">
                     <label className="form-label">شماره همراه</label>
                     <input type="tel" className="form-control" />
                 </div>

                 <div className="mb-3 col-sm-12 col-md-6">
                     <label htmlFor="formFile" className="form-label">آپلود عکس پروفایل</label>
                     <input className="form-control" type="file" id="formFile"/>
                 </div>
                 <hr/>
                <div className={'text-center my-4'}>
                    <button className={'btn btn-outline-success'}>اضافه کردن تصاویر گالری</button>
                </div>
                 <div className="mb-3 col-sm-12 col-md-6 d-flex">
                     <label htmlFor="formFile" className="form-label">گالری</label>
                     <input className="form-control mx-2" type="file" id="formFile"/>
                     <button className={'btn btn-outline-danger me-3'}>حذف</button>
                 </div>
             </div>
                <button type="submit" className="btn btn-primary">ثبت</button>
            </form>
        </div>
    );
};
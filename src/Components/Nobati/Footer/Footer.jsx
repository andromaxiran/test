import * as React from 'react';
import logo from './../../../assets/logo.png'

export const Footer = () => {
    return (
        <div>
            <div className={'w-100'} style={{height: "80px", background:'#f1f5f9'}}>
            </div>
                <div className={'mt-5 d-flex justify-content-between bg-white'}>
                    <div>
                        <div className={'text-center'}>

                        <img style={{width: "100px"}} src={logo} alt={'logo'} />
                        </div>
                        <p> تجربه مشاوره آنلاین و دریافت نوبت از بهترین آرایشگاه ها و سالن های زیبایی</p>
                    </div>
                    <div style={{marginTop:'auto'}}>
                        <p className={'text-center'}>  شماره تماس : 05122222- 09122324x</p>
                        <p >
                            تمامی حقوق مادی و معنوی این وب‌سایت، خدمات و محتوای مربوط به آن متعلق به شرکت اندرومکس می‌باشد.
                        </p>
                    </div>
                </div>

        </div>
    );
};
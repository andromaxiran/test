import * as React from 'react';
import styles from './Content.module.scss';

export const Content = () => {
    return (
        <>
            <div className={'row'}>
                <div className={'m-2 p-2 bg-white rounded-2'} style={{width :'max-content'}}>
                    <span>مرتب سازی:</span>
                    <select className="form-select d-inline w-auto">
                        <option selected value="1">پیشفرض</option>
                        <option value="2">محبوب ترین</option>
                        <option value="3">خوش برخورد ترین</option>
                    </select>
                </div>
                <div className={'m-2 p-2 bg-white rounded-2'} style={{width :'max-content'}}>
                    <span>نزدیک ترین نوبت:</span>
                    <select className="form-select d-inline w-auto">
                        <option selected value="10">پیشفرض</option>
                        <option value="20">محبوب ترین</option>
                        <option value="30">خوش برخورد ترین</option>
                    </select>
                </div>
                <span className={'w-auto mx-auto mt-4'}>18 نتیجه</span>
            </div>


            <div className={'row'}>
                <div className={'m-2 p-2 bg-white rounded-2 row col-12'}>
                    <div className={'col'} style={{maxWidth:'fit-content'}}>
                        <img className={styles.img} src={require('./../../../assets/images.jpg')} alt={'profile'}/>
                    </div>
                    <div className={'col mt-2'}>
                        <div>
                        <h5 className={'d-inline'}>جویی تریبیانی</h5>
                            <span className={styles.see}><i className="fa fa-eye mx-1" aria-hidden="true"/> 723</span>
                        </div>
                        <p className={'m-1'}> توضیحات شخص  مثل مشاوره داخلی زنان،اطفال،پوست، اعصاب و روان،مشاوره قبل ازدواج</p>
                        <div>
                            <i className={`fa fa-thumbs-o-up ${styles.like}`} aria-hidden="true"/>
                            <span className={styles.like}>90%</span>
                            <span className={'me-1'}> (297 نظر)</span>
                        </div>
                    </div>
                    <div className={'mt-2'}>
                        <i className="fa fa-map-marker mx-2" aria-hidden="true"/>
                        <span className={styles.location}>تهران,تهران_خیابان ملاصدرا - روبروی بیمارستان بقیه الله - شماره 207 - ساختمان سحر - طبقه دوم - واحد 7</span>
                    </div>
                    <div className={'row p-3'}>
                        <div className={'col text-center'}>
                            <button className={'btn btn-primary w-100'}> نوبت دهی اینترنتی</button>
                        </div>
                        <div className={'col text-center'}>
                            <button className={'btn btn-outline-light w-100 text-dark border-dark'}> نوبت دهی تلفنی</button>
                        </div>
                    </div>
                </div>

            </div>
        </>

    );
};
import * as React from 'react';
import Header from "../Header/Header";
import {Search} from "../Components/Search";
import {MAIN} from "../../../helpers/colors";
import {Footer} from "../Footer/Footer";
import styles from "./Content.module.scss";

 const Booking = () => {
    return (
        <div>
            <Header/>
            <div className={'p-3 border-top'}>
                <Search/>
            </div>
            <div style={{background:MAIN}} className={'row mx-0 col-12 p-5'}>
                <div className={'col-12 col-md-7 mx-3 bg-white p-4 rounded-3'}>
                    <h6><b>انتخاب زمان نوبت</b></h6>
                    <div className={'row'}>
                        <div className="d-flex flex-column bd-highlight mb-3 col-2 overflow-scroll">
                            <input type="radio" className="btn-check" name="options-outlined" id="1"
                                   autoComplete="off" />
                                <label className="btn btn-outline-success my-1" htmlFor="1">
                                    شنبه - 3 دی
                                </label>
                            <input type="radio" className="btn-check" name="options-outlined" id="2"
                                   autoComplete="off" />
                            <label className="btn btn-outline-success my-1" htmlFor="2">
                                یک شنبه - 4 دی
                            </label>
                            <input type="radio" className="btn-check" name="options-outlined" id="3"
                                   autoComplete="off" />
                            <label className="btn btn-outline-success my-1" htmlFor="3">
                                پنج شنبه - 10 دی
                            </label>

                        </div>
                        <div className={'col-9'}>
                            <div className="d-flex  flex-wrap bd-highlight mb-3">
                                <input type="radio" className="btn-check" name="select_day" id="11"
                                       autoComplete="off" />
                                <label className={`btn btn-outline-secondary mx-1 ${styles.rezervbtn}`} htmlFor="11">
                                    8-9
                                </label>
                                <input type="radio" className="btn-check" name="select_day" id="12"
                                       autoComplete="off" />
                                <label className={`btn btn-outline-secondary mx-1 ${styles.rezervbtn}`} htmlFor="12">
                                   9-10
                                </label>
                                <input type="radio" className="btn-check" name="select_day" id="13"
                                       autoComplete="off" />
                                <label className={`btn btn-outline-secondary mx-1 ${styles.rezervbtn}`} htmlFor="13">
                                   10-11
                                </label>
                            </div>
                        </div>
                    </div>

                </div>
                <div className={'col-12 col-md-4 mx-3 bg-white p-4 rounded-3 '} style={{height:'max-content'}}>
                        <div className={'row'}>
                            <div className={' mx-auto p-2 bg-light rounded-3 row'} style={{width: '95%'}}>
                                <div className={'col'} style={{maxWidth: 'fit-content'}}>
                                    <img className={styles.img} src={require('./../../../assets/images.jpg')} alt={'profile'}/>
                                </div>
                                <div className={'col mt-4'}>
                                    <div>
                                        <h5 className={'d-inline'}>جویی تریبیانی - متخصص مشاوره</h5>
                                    </div>
                                    <p className={'m-1'}>نام محل کار : گالری اندرومکس</p>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
            <Footer/>
        </div>
    );
};
 export default Booking;
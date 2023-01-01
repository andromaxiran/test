import * as React from 'react';

export const ReserveTimes = () => {
    return (
        <>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">روز های هفته</th>
                    <th scope="col"> انتخاب ساعت کاری شیفت صبح</th>
                    <th scope="col">انتخاب ساعت کاری شیفت عصر</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">
                        <div className="form-check w-auto">
                            <input className="" type="checkbox" value="" id="flexCheckDefault"/>
                            <label className="form-check-label me-1" htmlFor="flexCheckDefault">
                                شنبه
                            </label>
                        </div>
                    </th>
                    <td>
                        <div className={'d-inline-flex'}>
                            <select className="form-select" aria-label="Default select example">
                                <option value="1">6</option>
                                <option value="2">7</option>
                                <option value="3">8</option>
                            </select>
                            <span className={'mx-3'}>تا</span>
                            <select className="form-select" aria-label="Default select example">
                                <option value="1">6</option>
                                <option value="2">7</option>
                                <option value="3">8</option>
                            </select>
                        </div>

                    </td>

                    <td>
                        <div className={'d-inline-flex'}>
                            <select className="form-select" aria-label="Default select example">
                                <option value="1">6</option>
                                <option value="2">7</option>
                                <option value="3">8</option>
                            </select>
                            <span className={'mx-3'}>تا</span>
                            <select className="form-select" aria-label="Default select example">
                                <option value="1">6</option>
                                <option value="2">7</option>
                                <option value="3">8</option>
                            </select>
                        </div>
                    </td>
                </tr>
                <tr>
                    <th scope="row">
                        <div className="form-check w-auto">
                            <input className="" type="checkbox" value="" id="flexCheckDefault"/>
                            <label className="form-check-label me-1" htmlFor="flexCheckDefault">
                                یکشنبه
                            </label>
                        </div>
                    </th>
                    <td>
                        <div className={'d-inline-flex'}>
                            <select className="form-select" aria-label="Default select example">
                                <option value="1">6</option>
                                <option value="2">7</option>
                                <option value="3">8</option>
                            </select>
                            <span className={'mx-3'}>تا</span>
                            <select className="form-select" aria-label="Default select example">
                                <option value="1">6</option>
                                <option value="2">7</option>
                                <option value="3">8</option>
                            </select>
                        </div>

                    </td>

                    <td>
                        <div className={'d-inline-flex'}>
                            <select className="form-select" aria-label="Default select example">
                                <option value="1">6</option>
                                <option value="2">7</option>
                                <option value="3">8</option>
                            </select>
                            <span className={'mx-3'}>تا</span>
                            <select className="form-select" aria-label="Default select example">
                                <option value="1">6</option>
                                <option value="2">7</option>
                                <option value="3">8</option>
                            </select>
                        </div>
                    </td>
                </tr>

                </tbody>
            </table>

         <div className={'d-flex'}>
             <span className={'mx-3'}>بازه زمانی هر نوبت</span>
             <select className="form-select w-50" aria-label="Default select example">
                 <option value="1">15 دقیقه</option>
                 <option value="2">20 دقیقه</option>
                 <option value="3">30 دقیقه</option>
             </select>
         </div>
            <button className={'btn btn-outline-success'}>ثبت</button>

        </>
    );
};
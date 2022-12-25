import * as React from 'react';
import styles from './UserInfo.module.scss'
import {NavLink} from "react-router-dom";
export const UserSideBar = () => {
    return (
        <div className={'bg-white p-3 rounded-3'}>
            <div className={'d-flex'}>
                <img className={styles.img} src={require('./../../../assets/images.jpg')} alt={'profile'}/>
              <div className={'p-1 me-3'}>
                  <p>نام و فامیل</p>
                  <p>0912345xxx</p>
              </div>
            </div>
            <hr/>
            <div className={'p-2'}>
                <NavLink to="/user/home">
                <p className={styles.fonticon}>
                    <i className="fa fa-calendar-check-o ms-2" aria-hidden="true"/> نوبت های من
                </p>
                </NavLink>
                <p className={styles.fonticon}>
                    <i className="fa fa-bookmark-o ms-2" aria-hidden="true"/> لیست های من
                </p>
                <p className={styles.fonticon}>
                    <i className="fa fa-user-o ms-2" aria-hidden="true"/>کاربران زیر مجموعه
                </p>
            </div>
            <nav>
                <NavLink to="/dashboard/home">
                    <span className={"mx-2"}><i className="fa fa-home" aria-hidden="true"/></span>
                    صفحه نخست
                </NavLink>
                <NavLink to="/dashboard/products">
                    <span className={"mx-2"}><i className="fa fa-shopping-cart" aria-hidden="true"/></span>
                    محصولات
                </NavLink>
                <NavLink to="/dashboard/users">
                    <span className={"mx-2"}><i className="fa fa-user" aria-hidden="true"/></span>
                    کاربران
                </NavLink>
                <NavLink to="/dashboard/update"
                >
                    <span className={"mx-2"}><i className="fa fa-cogs" aria-hidden="true"/></span>
                    ابزار
                </NavLink>

            </nav>
        </div>
    );
};
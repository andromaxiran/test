import * as React from 'react';
import styles from './UserInfo.module.scss'
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
                <p className={styles.fonticon}>
                    <i className="fa fa-calendar-check-o ms-2" aria-hidden="true"/> نوبت های من
                </p>
                <p className={styles.fonticon}>
                    <i className="fa fa-bookmark-o ms-2" aria-hidden="true"/> لیست های من
                </p>
                <p className={styles.fonticon}>
                    <i className="fa fa-user-o ms-2" aria-hidden="true"/>کاربران زیر مجموعه
                </p>
            </div>
        </div>
    );
};
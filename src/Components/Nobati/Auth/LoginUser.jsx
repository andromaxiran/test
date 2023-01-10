
import * as React from 'react';
import Header from "../Header/Header";
import {Search} from "../Components/Search";
import {MAIN} from "../../../helpers/colors";
import {Footer} from "../Footer/Footer";
import {ErrorMessage, Field, Form, Formik} from "formik";

import { loginSchema } from "../../Validation/LoginValidation";
import {Link} from "react-router-dom";
import axios from "axios";

export const LoginUser = () => {
    return (
        <div>
            <Header/>
            <div className={'p-3 border-top'}>
                <Search/>
            </div>
            <div style={{background:MAIN}} className={'row mx-0 col-12 p-5'}>
                <div className={'col-12'}>
                    <Formik
                        initialValues={{
                            name: "",
                            mobile: "",
                            password: "",
                        }}
                        validationSchema={loginSchema}
                        onSubmit={(values) => {
                           alert(values);
                            console.log(values);
                            axios({
                                method: 'POST',
                                url: 'http://localhost:8000/api/register',
                                data: values
                            })
                                .then(function (res) {
                                    console.log(res)
                                    alert('Successfully signed up!');
                                })
                                .catch(function (res) {
                                    console.log(res)
                                });
                        }}
                    >
                        <Form>
                            <div className="mb-2">
                                <Field
                                    name="name"
                                    type="text"
                                    className="form-control"
                                    placeholder="نام و نام خانوادگی"
                                />
                                <ErrorMessage
                                    name="name"
                                    render={(msg) => (
                                        <div className="text-danger">{msg}</div>
                                    )}
                                />
                            </div>
                            <div className="mb-2">
                                <Field
                                    name="mobile"
                                    type="number"
                                    className="form-control"
                                    placeholder="شماره موبایل"
                                />

                                <ErrorMessage
                                    name="mobile"
                                    render={(msg) => (
                                        <div className="text-danger">{msg}</div>
                                    )}
                                />
                            </div>
                            <div className="mb-2">
                                <Field
                                    name="password"
                                    type="password"
                                    className="form-control"
                                    placeholder="کلمه عبور"
                                />

                                <ErrorMessage
                                    name="password"
                                    render={(msg) => (
                                        <div className="text-danger">{msg}</div>
                                    )}
                                />
                            </div>
                            <div className="mb-2">
                                <Field
                                    name="passwordConfirmation"
                                    type="password"
                                    className="form-control"
                                    placeholder="تکرار کلمه عبور"
                                />

                                <ErrorMessage
                                    name="passwordConfirmation"
                                    render={(msg) => (
                                        <div className="text-danger">{msg}</div>
                                    )}
                                />
                            </div>
                            <div className="mx-2">
                                <input
                                    type="submit"
                                    className="btn"
                                    value="ساخت مخاطب"
                                />
                                <Link
                                    to={"/contacts"}
                                    className="btn mx-2"
                                >
                                    انصراف
                                </Link>
                            </div>
                        </Form>
                    </Formik>
                </div>
            </div>
            <Footer/>
        </div>
    );
};
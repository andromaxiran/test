import * as Yup from 'yup';

const mobileIran = /^(?:0|98|\+98|\+980|0098|098|00980)?(9\d{9})$/ ;
export const loginSchema = Yup.object().shape({
    name: Yup.string().required("نام و نام خانوادگی الزامی می باشد"),
    mobile: Yup.string().required("شماره موبایل الزامی می باشد").matches(mobileIran, 'شماره موبایل اشتباه است'),
    password: Yup.string().required("کلمه عبور الزامی می باشد").min(6, 'کلمه عبور خیلی کوتاه است - حداقل کلمه عبور 6 کاراکتر می باشد'),
    passwordConfirmation: Yup.string()
        .oneOf([Yup.ref('password'), null], 'تکرار کلمه عبور اشتباه است')
});

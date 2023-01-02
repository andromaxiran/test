import axios from "axios";


const AxiosUserLogin = (values , actions) =>{

    return axios({
        method: "POST",
        url: "http://localhost:8000/api/register",
        data: values,

    })
        .then(response => {
            actions.setSubmitting(false);
            actions.resetForm();

        })
        .catch(error => {
            actions.setSubmitting(false);

        });
}

export default AxiosUserLogin;
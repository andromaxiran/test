import {useState} from "react";
import axios from "axios";

const Create = () => {

    const [state, setState] = useState({
        name: "",
        email: "",
    });
    const [pic, setPic] = useState([]);

    const handleImage = (e) => {
        setPic({image: e.target.files[0]})
    }
    const handleInput = (e) => {
        e.persist();
        setState({...state,[e.target.name] : e.target.value})
    }

    const submitProduct = (e) => {
      e.preventDefault();
      const formData = new FormData();
      formData.append("image" , pic.image);
      formData.append("name" , state.name);
      formData.append("email" , state.email);

      axios.get('/sanctum/csrf-cookie').then(response => {
          axios.post('http://localhost:8000/api/store-product' , formData).then(res => {
              if(res.data.status===200){
                  console.log("ok");
              }
          });
      })

    }

    return (
        <>
            <form onSubmit={submitProduct} encType="multipart/form-data">
                <div className="mb-3 mt-3">
                    <label htmlFor="email" className="form-label">Email:</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter email" name="email"
                           onChange={handleInput} value={state.email}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Password:</label>
                    <input type="text" className="form-control" id="name" placeholder="Enter name" name="name"
                           onChange={handleInput} value={state.name}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="image" className="form-label">pic:</label>
                    <input type="file" className="form-control" id="image" placeholder="Enter pic" name="image"
                    onChange={handleImage}/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </>
    )
}
export default Create;
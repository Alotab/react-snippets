import { useState } from "react"




const Form = () => {
    const [form, setForm] = useState({
        firstname: "",
        lastName: "",
        email: "",
        password: "",
        address: "",
        zipcode: ""
    });


    // [e.target.name] = name="firstName", name="lastName"
    // [e.target.name] updates it self depeing on the input you are in and its made possible because of the name in each input
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    ///// This is if you want to update the form where prev is used to populated the old date in the user form
    // const handleChange = (e) => {
    //     setForm(prev => ({
    //         ...prev,
    //         [e.target.name]: e.target.value,

    //     }));
    // }



  return (
    <form>
        <input 
        type="text" 
        onChange={handleChange}
        name="firstName"
        placeholder="first name"
        className="px-4 py-2"
        />
          <input 
        type="text" 
        onChange={handleChange}
        name="lastName"
        placeholder="last name"
        className="px-4 py-2"
        />
          <input 
        type="text" 
        onChange={handleChange}
        name="email "
        placeholder="Enter email"
        className="px-4 py-2"
        />
          <input 
        type="text" 
        onChange={handleChange}
        name="password"
        placeholder="*********"
        className="px-4 py-2"
        />
          <input 
        type="text" 
        onChange={handleChange}
        name="address"
        placeholder="Enter addresss"
        className="px-4 py-2"
        />
          <input 
        type="text" 
        onChange={handleChange}
        name="zipcode"
        placeholder="You zipcode"
        className="px-4 py-2"
        />
    </form>
  )
}

export default Form
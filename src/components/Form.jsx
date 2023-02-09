
import React, { useState } from 'react';

function Form() {

    const [userregister, setregister] = useState({
        username : "",
        email : "",
        skills :"",
        password : "",
        image : ""
});
  
    const [data1 , setdata1] = useState([])

    const handleInput = (event) =>{
        const name = event.target.name;
        const value = event.target.value;
        console.log(name, value);
        setregister({...userregister, [name]:value});

        
    };

    const handleSubmit = (event) =>{
        event.preventDefault();
        
        const data = {...userregister, id: new Date().getTime().toString()};
        console.log(data1);
        setdata1([...data1,data]);
        console.log(data1);

        setregister({username:"", email:"", skills:"", password:"",image:""});

    }

  return (
    <div className='formedit'>
      <div className='formedit1'>
      <form onSubmit={handleSubmit} className='style2'>
        <div className='formedit2'>
          <label htmlFor='username'className='name' >Full Name</label>
          <input type="text" autoComplete='off'  
          value={userregister.username}
          onChange={handleInput}
          name="username" id="username"></input>
        </div>
        <div className='formedit3'>
          <label htmlFor='email' className='name'>Email</label>
          <input type="email" autoComplete='off'
           value={userregister.email}
           onChange={handleInput}
           name="email" id="email"></input>
        </div>
        
        <div className='formedit5'>
          <label htmlFor='password' className='name' >Password</label>
          <input type="password" autoComplete='off' 
          value={userregister.password}
          onChange={handleInput}
          name="password" id="password"></input>
        </div>
        <div className='formedit6'>
          <label htmlFor='image' className='name'>Image Link</label>
          <input type="url" autoComplete='off'
          value={userregister.image}
          onChange={handleInput}
          name="image" id="image"></input> 
        </div>
        <div className='formedit4'>
          <label htmlFor='skills' className='name' >Skills</label>
          
        </div>
        <div className='formedit4'>
          <label htmlFor='skills' className='name' >Javascript</label>
          <input type="checkbox" autoComplete='off' 
          value={userregister.skills} 
          onChange={handleInput}
          name="skills" id="skills"></input>
        </div>
        <div className='formedit4'>
          
          <label htmlFor='skills' className='name' >React JS</label>
          <input type="checkbox" autoComplete='off' 
          value={userregister.skills} 
          onChange={handleInput}
          name="skills" id="skills"></input>
        </div>
        <div className='formedit4'>
          <label htmlFor='skills' className='name' >Angular JS</label>
          <input type="checkbox" autoComplete='off' 
          value={userregister.skills} 
          onChange={handleInput}
          name="skills" id="skills"></input>
        </div>
        <div className='btnedit'>
          <button type="submit">Register me!</button>
        </div>
      </form>
      </div>
      <div className='receipt'>
        {
            data1.map((element) =>{
               return(
                  <div className='recordstyle'>
                    <h1>Student Details</h1>
                    <p>Fullname: {element.username}</p>
                    <p>Email: {element.email}</p>
                    <p>Skills: {element.skills}</p>
                    <p>Password: {element.password}</p>
                    <p>Image: {element.image}</p>
                  </div>
               );
            })
        }
      </div>

    </div>
  );
}

export default Form;

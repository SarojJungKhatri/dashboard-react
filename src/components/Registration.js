import React from 'react';
import useForm from './useForm';

const Registration = () => {
    const { handleChange, values, handleSubmit}= useForm();
    return (
        <div>
          <div className="form-container-right">
            <form className="form" onSubmit={handleSubmit}>
                <div className="form-input">
                    <lable htmlFor="username" className="form-lable">User Name</lable>
                    <input 
                         id="username"
                        type="text" 
                        name="userame" 
                        className="form-input"
                        placeholder="User Name"/>
                        value={values.username}
                        onChange={handleChange}
                </div>
                <div className="form-input">
                    <lable htmlFor="email" className="form-lable"> Email</lable>
                    <input 
                        id="email"
                        type="email" 
                        name="email" 
                        className="form-input"
                        placeholder="Email"/>
                        value={values.email}
                        onChange={handleChange}
                    
                </div>
                <div className="form-input">
                    <lable htmlFor="password" className="form-lable">Password</lable>
                    <input 
                        id="password"
                        type="password" 
                        name="password" 
                        className="form-input"
                        placeholder="*********"/>
                        value={values.password}
                        onChange={handleChange}
                    
                </div>
                <div className="form-input">
                    <lable htmlFor="re-password" className="form-lable"> Conform Password</lable>
                    <input 
                        id="password2"
                        type="passsword" 
                        name="password2" 
                        className="form-input"
                        placeholder="*********"/>
                        value={values.password2}
                        onChange={handleChange}
                    
                </div>
                <button className="form-input-btn" type="submit">Register</button>
                <span className="form-input-login">Already have a account? <a href="/">Login</a></span>
            </form>
          </div>

        </div>
    );
};

export default Registration

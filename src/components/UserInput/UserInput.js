import React, { useState } from 'react';

const UserInput = () => {
  
  const [phone, setPhone] = useState('');

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleChange = (e) => {
    setPhone(e.target.value);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    setIsFormSubmitted(()=> !isFormSubmitted);
  };

  return <>
    <form>
      <input type="text" name="phone" placeholder="Phone Number" onChange={handleChange} value={phone} />
      <button onClick={handleSubmit}>Submit</button>
    </form>

    { isFormSubmitted &&  <p>You logged in successfully</p> }

  </>
};

export default UserInput;
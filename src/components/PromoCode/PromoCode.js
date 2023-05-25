import React, { useState, useEffect } from 'react';

const PromoCode = ({ promo }) => {
  
  const [promoCode, setPromoCode] = useState('');
  const [isPromoApplied, setIsPromoApplied] = useState(false);

  // const [isApplied, setIsApplied] = useState(false);
  
  useEffect(() => {
    if(promo) {
      setPromoCode(promo);
      setIsPromoApplied(true);
    }
  },[promo])

  // const handlePromo = () => {
  //   setPromoCode()
  //   // setIsApplied(promoFlag => !promoFlag);
  // }

  const handleChange = (event) => {
    setPromoCode(event.target.value);
  };

  const handleSubmit = () => {
    if(promoCode) setIsPromoApplied(true)
  };

  const buttonText = isPromoApplied ? 'Applied' : 'Apply';

  return <div>
    
    <input 
      className='PromoTextBox'
      type="text" 
      placeholder='Please Enter Promo Code' 
      value={promoCode}
      onChange={handleChange}
    />
    
    <button className='PromoCode--submit-button' onClick={handleSubmit} disabled={!promoCode}>{buttonText}</button>

  </div>

};

export default PromoCode;
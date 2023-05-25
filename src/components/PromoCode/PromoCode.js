import React, { useState, useEffect } from 'react';

const PromoCode = ({ promo }) => {
  
  const [promoCode, setPromoCode] = useState('');
  // const [isApplied, setIsApplied] = useState(false);
  
  useEffect(() => {
    if(promo) setPromoCode(promo);
  },[promo])

  const handlePromo = () => {
    setPromoCode()
    // setIsApplied(promoFlag => !promoFlag);
  }

  const handleChange = (event) => {
    setPromoCode(event.target.value);
  };

  const buttonText = promo ? 'Remove' : 'Apply';

  return <div>
    
    <input 
      type="text" 
      placeholder='Please Enter Promo Code' 
      value={promoCode}
      onChange={handleChange}
    />
    
    <button onClick={handlePromo} disabled={!promoCode}>{buttonText}</button>

  </div>

};

export default PromoCode;
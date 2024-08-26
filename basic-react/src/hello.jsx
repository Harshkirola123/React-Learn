import React from 'react';

const aa = document.createElement('a');
aa.innerHTML = "Click here";
aa.setAttribute('href',"https://docs.chaicode.com/branches-in-git/");
aa.setAttribute('target','_blank');

const ATag = () => {
  return (
    // <a href="https://docs.chaicode.com/branches-in-git/" target='_blank'>Click here</a>
    <aa /> 
);
};

export default ATag;

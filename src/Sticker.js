import React from 'react'
const labelStyle = {
    width: '5cm',
    height: '3cm',
    border: '1px solid #000',
    display: 'flex',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'flex-end',
  };
const labelNumber ={
  border: '1px solid #000',
  transform: 'rotate(-90deg)',
  backgroundColor: 'lightgray',
  width: '1000',
};
const labelName ={
  border: '1px solid #000',
};

function Sticker({number, name, nameOfList, codeOfList}) {
    
  return (
    <div style={labelStyle}>
          <div style={labelNumber}>
            {number}
          </div>
          <div style={labelName}>
            <div>
              {name}
            </div>
            <div>
              {nameOfList}
            </div>
          </div>
          <div>
            {codeOfList}
          </div>
    </div>
  )
}

export default Sticker
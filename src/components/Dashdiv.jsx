import React from 'react'


const Dashdiv = ({id,level,style,mat,img}) => {
  let inDiv = {
    borderBottom: '1px solid',
    padding: '2px',
    display: 'flex',
    justifyContent: 'space-between'
  }
  return (
    
    <>
    <div>
        <div className={style}>
            <div style={inDiv}>
                {img}
                {level}
            </div>
            <div className='flex justify-between'>
                <p>{id}</p>
                <p>{mat}</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default Dashdiv
import React from 'react'

const Dashdiv = ({id,level,style}) => {
  return (
    <>
    <div>
        <div className={style}>
            <div>
                <img src="" alt="" />
                <p>{level}</p>
            </div>
            <p>{id}</p>
        </div>
    </div>
    </>
  )
}

export default Dashdiv
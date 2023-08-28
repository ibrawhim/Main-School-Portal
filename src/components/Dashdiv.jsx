import React from 'react'

const Dashdiv = ({id,level,style,mat,firstn}) => {
  return (
    <>
    <div>
        <div className={style}>
            <div>
                <img src="" alt="" />
                <p>{level}</p>
            </div>
            <p>{id} {mat}</p>
        </div>
    </div>
    </>
  )
}

export default Dashdiv
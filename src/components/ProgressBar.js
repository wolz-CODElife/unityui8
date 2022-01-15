import React from 'react'
import '../assests/css/ProgressBar.css'

const ProgressBar = ({name, percent, color}) => {
    return (
        <div style={{margin: "30px 0px"}}>
            <div className="progress">
                <p>{name}</p>
                <p>{percent}%</p>
            </div>
            <div className='progressbar'>
                <div className='innerbar' style={{width: `${percent}%`, background: `${color}`}}></div>
            </div>
        </div>
    )
}

export default ProgressBar

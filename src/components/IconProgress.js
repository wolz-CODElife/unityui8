import React from 'react'
import '../assests/css/IconProgress.css'

const IconProgress = ({icon, title, desc, progress, value}) => {
    return (
        <div className="iconProgress">
            <img src={icon} alt={title} className='icon' />
            <div>
                <h3>{title}</h3>
                <p>{desc}</p>
            </div>
            {   progress ?
                <img src={progress} alt={value} title={value} className='progress' />
            :
                <p style={{ color: "#7FBA7A" }}>{value}</p>
            }
        </div>
    )
}

export default IconProgress

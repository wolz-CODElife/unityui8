import React from 'react'
import '../assests/css/Tab.css'

const Tab = ({icon, title, value, color}) => {
    return (
        <div className='tab'>
            <p><span className='icon' style={{ background: color }}>{icon}</span>{title}</p>
            <h1>{value}</h1>
            <div className="bar">
                <div className="innerbar" style={{ background: color }}></div>
            </div>
        </div>
    )
}

export default Tab

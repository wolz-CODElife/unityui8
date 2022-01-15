import React from 'react'

const SidebarMenu = ({icon, title, active, setActive, count, collapsed}) => {
    return (
        <li>
            {setActive?
                <button onClick={() => setActive(title)} className={`${active ? 'active': ''}`}>
                    {icon}{!collapsed ? <span>{title}</span> : ""}
                </button>
            :
                <button>
                    {icon}{!collapsed ? <><span>{title}</span> <span className='badge'>{count}</span></>: ""}
                </button>
            }
        </li>
    )
}

export default SidebarMenu

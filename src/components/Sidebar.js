import React, { useState } from 'react'
import '../assests/css/Sidebar.css'
import SidebarMenu from './SidebarMenu'
import { sidebarMenuList } from '../data/sidebarMenu'
import { InsightMenuList } from '../data/InsightMenu'

const Sidebar = ({collapsed, setCollapsed}) => {
    const [active, setActive] = useState('Campaigns')
    return (
        <div className="sidebar" style={{width: `${collapsed? '96px': '250px'}`}}>
            <div className="logo logo-lg" style={{ borderBottom: `${collapsed ? 'solid 1px #E4E4E4' : "none"}` }}>
                {!collapsed&&
                    <img src="https://i.postimg.cc/5NksdzkN/image.png" alt="Unity" />
                }
                <button className='hambuger' onClick={() => setCollapsed(collapsed => !collapsed)}>
                    <img src="https://i.postimg.cc/ZYQX1W9x/image.png" alt="Toggle Menu" />
                </button>
            </div>
            {collapsed&& 
                <div className="logo logo-sm">
                    <img src="https://i.postimg.cc/x1Zkmyqb/image.png" alt="Unity" />
                </div>
            }
            <ul>
                {collapsed? 
                    <li>Admin</li>
                :
                    <li style={{ marginLeft: '18px'}}>Admin tools</li>
                }
                {sidebarMenuList.map(({icon, title}) => (
                <SidebarMenu 
                    key={title} 
                    icon={icon} 
                    title={title} 
                    active={active === title} 
                    setActive={setActive} 
                    collapsed={collapsed} 
                />
                ))}
            </ul>
            <div className="divider"></div>
            <ul>
                {collapsed? 
                    <li>Insights</li>
                :
                    <li style={{ marginLeft: '18px'}}>Insights</li>
                }
                {InsightMenuList.map(({icon, title, count}) => (
                    <SidebarMenu 
                    key={title} 
                    icon={icon} 
                    title={title}
                    count={count}
                    collapsed={collapsed} />
                ))}
            </ul>
            {!collapsed &&
                <>
                    <div className="procard">
                        <img src="https://i.postimg.cc/VkZvFf6h/image.png" alt="Get Pro Now" />
                        <button>Get Pro Now</button>
                    </div>
                    <div className="profile">
                        <img src="https://i.postimg.cc/yNrfBZNT/image.png" alt="Tam Tran" />
                        <div>
                            <b>Tam Tran</b>
                            <p>Free account</p>
                        </div>
                        <img src="https://i.postimg.cc/xdPkcDrt/image.png" alt="Nav" />
                    </div>
                </>
            }
        </div>
    )
}

export default Sidebar

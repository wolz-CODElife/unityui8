import React from 'react'
import '../assests/css/Content.css'
import { IconArrowLeft, IconArrowRight, IconNotification, IconSearch } from '../assests/icons/all'
import { IconProgressList, LatestSalesList, progressList, TabLists } from '../data/ContentList'
import IconProgress from './IconProgress'
import ProgressBar from './ProgressBar'
import Tab from './Tab'


const Content = ({margin}) => {
    return (
        <div className='content' style={{ marginLeft: margin }}>
            <div className="main_header">
                <button className='hambuger'>
                    <img src="https://i.postimg.cc/ZYQX1W9x/image.png" alt="Toggle Menu" />
                </button>
                <div className="iconicNav">
                    <IconSearch />
                    <div className="notification">
                        <IconNotification />
                        <div className="badge">2</div>
                    </div>
                    <img src="https://i.postimg.cc/yNrfBZNT/image.png" alt="Tam Tran" />
                </div>
            </div>
            <div className="main">
                <div className="header">
                    <div className="greeting">
                        <h5>Hi Dash UI8,</h5>
                        <h1>Campaigns</h1>
                    </div>

                    <div className="icon_nav">
                        <div className="search">
                            <IconSearch />
                            <input type="text" placeholder='Search' />
                        </div>
                        <div className="notification">
                            <IconNotification />
                            <div className="badge">2</div>
                        </div>
                    </div>
                </div>
                <div className="card card-1">
                    <p style={{ fontSize: "18px" }}>Active Users right now 💡</p>
                    <div className="chart">
                        <div className="info">
                            <div className='col1'>
                                <h1>478</h1>
                                <p className='ppv'>
                                    <img src="https://i.postimg.cc/nLYHPncZ/image.png" alt="Page per view" />
                                    <span>Page views per minute</span>
                                </p>
                            </div>
                            <div className='col2'>
                                <p className='percent'>
                                    <img src="https://i.postimg.cc/15C0WFfy/image.png" alt="6%" />
                                    <span>6%</span>
                                </p>
                                <p style={{ color: "#B2B3BD", fontSize: "12px", marginTop: "14px" }}>Update your payout method in Settings</p>
                            </div>
                        </div>
                        <div className="visuals">
                            <img src="https://i.postimg.cc/05CWdQyp/image.png" alt="chart" />
                        </div>
                    </div>
                    <div className="tabs">
                        {TabLists.map(({icon, title, value, color}) => (
                            <Tab key={title} icon={icon} title={title} value={value} color={color} />
                        ))}
                    </div>
                </div>

                <div className="row-1">
                    <div className="col-card-1">
                        <h3>Users</h3>
                        <div className="body">
                            <div className="info">
                                <p className='title'>New Users</p>
                                <h2>57m</h2>
                                <p className="percent">21.77%</p>
                            </div>
                            <div className="chart">
                                <img src="https://i.postimg.cc/8CRysPFX/image.png" alt="New Users" />
                            </div>
                        </div>
                        <div className="body">
                            <div className="info">
                                <p className='title'>New Users</p>
                                <h2>36k</h2>
                                <p className="percent">21.77%</p>
                            </div>
                            <div className="chart">
                                <img src="https://i.postimg.cc/8CRysPFX/image.png" alt="New Users" />
                                </div>
                        </div>
                        <div className="footer">
                            Go to setting
                        </div>
                    </div>
                    <div className="col-card-2">
                        <h3 className='title'>Income</h3>
                        <div className="body">
                            <div className="chart">
                                <img src="https://i.postimg.cc/3r28jWWr/image.png" alt="Income" />
                            </div>
                            <button>Withdraw Earning</button>
                        </div>
                    </div>
                </div>

                <div className="row-2">
                    <div className="col-card-1 card">
                        <h3>Icon Progress</h3>
                        {IconProgressList.map(({icon, title, desc, progress, value}) => (
                            <IconProgress key={progress} icon={icon} title={title} desc={desc} progress={progress} value={value} />
                        ))}
                        <button>Discover More</button>
                    </div>
                    <div className="col-card-2 card">
                        <h3>Latest Sales <IconArrowRight /></h3>
                        {LatestSalesList.map(({icon, title, desc, value}) => (
                            <IconProgress key={icon} icon={icon} title={title} desc={desc} value={value} />
                        ))}
                        <button>Show all report</button>
                    </div>
                </div>


            </div>
            <div className="rightside">
                <div className="icon_nav">
                    <div className="search">
                        <IconSearch />
                        <input type="text" placeholder='Search' />
                    </div>
                    <div className="notification">
                        <IconNotification />
                        <div className="badge">2</div>
                    </div>
                </div>
                <div className="card">
                    <p>2020 Goal</p>
                    <div className="slider">
                        <div className="nav">
                            <button className="nav-balls"><IconArrowLeft /></button>
                            <button className="nav-balls"><IconArrowRight /></button>
                        </div>
                        <img src="https://i.postimg.cc/RV74FMKt/image.png" alt="Slider" />
                    </div>
                    {progressList.map(({name, percent, color}) => (
                        <ProgressBar key={color} name={name} percent={percent} color={color} />
                    ))}
                </div>
                
                <div className="col2">
                    <p style={{ margin: "20px", marginTop: "50px" }}>Affiliate Impressions</p>
                    <div className="chart">
                        <img src="https://i.postimg.cc/25qbCmGq/image.png" alt="Affiliate" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content

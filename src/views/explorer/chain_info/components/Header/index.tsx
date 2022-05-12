import React from 'react'
import IconFont from '../../../../../components/icon_font'
import './index.scss'

const ChainInfoPageHeader:React.FC = ():React.ReactElement<React.ReactNode>=>{
    return (
        <header className='chain-info-page-header'>
                 <section className='first-card-box'>
                        <div className='flex-column explorer-card-box'>
                            <IconFont className="iconfont explorer-card-box-icon" type="icon-diantai_fm" size={24} />
                            <div className='explorer-card-content have-icon'>
                                <p className='explorer-card-content-header'>0.7s</p>
                                <p className='explorer-card-content-text'>last block</p>
                            </div>
                        </div>
                    <div className='flex-column explorer-card-box '>
                            <IconFont className="iconfont explorer-card-box-icon" type="icon-diantai_fm" size={24} />
                            <div className='explorer-card-content have-icon'>
                                <p className='explorer-card-content-header'>3s</p>
                                <p className='explorer-card-content-text'>target</p>
                            </div>
                        </div>
                 </section>
                 <section className='second-card-box'>

                    <div className='explorer-card-box'>
                            <div className='explorer-card-content'>
                                <p className='explorer-card-content-header'>1,029,478</p>
                                <p className='explorer-card-content-text'>best</p>
                            </div>
                        </div>
                    <div className='flex-row explorer-card-box'>
                            <div className='explorer-card-content'>
                                <p className='explorer-card-content-header'>1,029,478</p>
                                <p className='explorer-card-content-text'>last block</p>
                            </div>
                        </div>
                    <div className='flex-row explorer-card-box'>
                            <div className='explorer-card-content'>
                                <p className='explorer-card-content-header'>0.0000 HEIM</p>
                                <p className='explorer-card-content-text'>total issuance</p>
                            </div>
                        </div>
                    <div className='flex-row explorer-card-box'>
                            <div className='explorer-card-content'>
                                <p className='explorer-card-content-header'>1,029,478</p>
                                <p className='explorer-card-content-text'>last block</p>
                            </div>
                        </div>
                 </section>
                 <section className='third-card-box'>
                    <div className='flex-row explorer-card-box'>
                            <IconFont className="iconfont explorer-card-box-icon" type="icon-diantai_fm" size={24} />
                            <div className='explorer-card-content'>
                                <p className='explorer-card-content-header'>24,452.24 TB</p>
                                <p className='explorer-card-content-text'>total storage</p>
                            </div>
                        </div>
                    <div className='flex-row explorer-card-box'>
                            <IconFont className="iconfont explorer-card-box-icon" type="icon-diantai_fm" size={24} />
                            <div className='explorer-card-content explorer-card-content-left'>
                                <p className='explorer-card-content-header'>epoch</p>
                                <p className='explorer-card-content-text'>1 hr <br /> 7 mins 27s</p>
                            </div>
                        </div>

                 </section>
             </header>
    )
}
export default ChainInfoPageHeader
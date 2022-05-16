import React from 'react'
import './index.scss'
interface Props{
    color?:string
    text:string
}
const PointTitle = ({color='#827cf8',text}:Props):React.ReactElement<React.ReactNode>=>{
    return (
        <div className='point-title'>
            <span className='point' style={{background:color}}></span>
            <span className='text'>{text}</span>
        </div>
    )
}
export default PointTitle
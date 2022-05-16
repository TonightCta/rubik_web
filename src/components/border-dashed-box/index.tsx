import * as React from 'react';
import ReactNode from 'react';
import './index.scss'
interface Props{
    header:string
    children:React.ReactNode
}
const BorderDashedBox = ({header,children}:Props):React.ReactElement<React.ReactNode> => {
    return(
        <div className='border-dashed-box'>
            <div className='dashed-header'>
        {header}
            </div>
            <div className='dashed-content'>
        {children}
            </div>
        </div>
    )
}
export default BorderDashedBox
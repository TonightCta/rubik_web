import React,{useState,useEffect} from 'react'
import IconFont from '../../../../../components/icon_font';
import { numFun,strOmit } from '../../../../../utils/filter';
import'./index.scss'

interface list{
    number:string;
    hash:string;
    accountName:string;
    icon:string;
}
const ChainInfoPageTable:React.FC = ():React.ReactElement<React.ReactNode> =>{
    const [listValue,setListValue] = useState<list[]>()
    const list:list[] = [
        {
            number:'1030154',
            hash:'0xcdbca9baff78121a91618b8f989517d30f5d5f0576bdc5f0d7eff8c93e9a1b58',
            accountName:'r7H5WbqweasdqwdWqiscr',
            icon:'icon-diantai_fm'
        },
        {
            number:'1030154',
            hash:'0xcdbca9baff78121a91618b8f989517d30f5d5f0576bdc5f0d7eff8c93e9a1b58',
            accountName:'r7H5WbqweasdqwdWqiscr',
            icon:'icon-diantai_fm'
        },
        {
            number:'1030154',
            hash:'0xcdbca9baff78121a91618b8f989517d30f5d5f0576bdc5f0d7eff8c93e9a1b58',
            accountName:'r7H5WbqweasdqwdWqiscr',
            icon:'icon-diantai_fm'
        },
        {
            number:'1030154',
            hash:'0xcdbca9baff78121a91618b8f989517d30f5d5f0576bdc5f0d7eff8c93e9a1b58',
            accountName:'r7H5WbqweasdqwdWqiscr',
            icon:'icon-diantai_fm'
        },
        {
            number:'1030154',
            hash:'0xcdbca9baff78121a91618b8f989517d30f5d5f0576bdc5f0d7eff8c93e9a1b58',
            accountName:'r7H5WbqweasdqwdWqiscr',
            icon:'icon-diantai_fm'
        },
        {
            number:'1030154',
            hash:'0xcdbca9baff78121a91618b8f989517d30f5d5f0576bdc5f0d7eff8c93e9a1b58',
            accountName:'r7H5WbqweasdqwdWqiscr',
            icon:'icon-diantai_fm'
        },
        {
            number:'1030154',
            hash:'0xcdbca9baff78121a91618b8f989517d30f5d5f0576bdc5f0d7eff8c93e9a1b58',
            accountName:'r7H5WbqweasdqwdWqiscr',
            icon:'icon-diantai_fm'
        },
        {
            number:'1030154',
            hash:'0xcdbca9baff78121a91618b8f989517d30f5d5f0576bdc5f0d7eff8c93e9a1b58',
            accountName:'r7H5WbqweasdqwdWqiscr',
            icon:'icon-diantai_fm'
        },
        {
            number:'1030154',
            hash:'0xcdbca9baff78121a91618b8f989517d30f5d5f0576bdc5f0d7eff8c93e9a1b58',
            accountName:'r7H5WbqweasdqwdWqiscr',
            icon:'icon-diantai_fm'
        },
        {
            number:'1030154',
            hash:'0xcdbca9baff78121a91618b8f989517d30f5d5f0576bdc5f0d7eff8c93e9a1b58',
            accountName:'r7H5WbqweasdqwdWqiscr',
            icon:'icon-diantai_fm'
        }
    ]
    console.log(listValue,typeof(listValue));
    useEffect(()=>{
        setListValue(list)
    },[])
    return (
        <div className='chain-info-page-table'>
            <ul>
                {
                    typeof(listValue)!='undefined' &&(listValue as list[]).map((item:list,index:number)=>{
                        return(
                            <li key={index}>
                                <div className='table-number'>{numFun(item.number)}</div>
                                <div className='table-hash'>{item.hash}</div>
                                <div className='table-account'>
                                    <IconFont className="iconfont" type={item.icon}/>
                                    <span className='account-name'>{strOmit(item.accountName)}</span>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
export default ChainInfoPageTable
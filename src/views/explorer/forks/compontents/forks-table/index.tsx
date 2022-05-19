import React,{useRef} from 'react'
import './index.scss'
interface LinkHeader {
    author: string | null;
    bn: string;
    hash: string;
    height: number;
    isEmpty: boolean;
    isFinalized: boolean;
    parent: string;
    width: number;
  }
const ForksTable = () =>{
    const headersRef = useRef<Map<string, LinkHeader>>(new Map());
    const [header,setHeader] = React.useState(
        {
            "parentHash": "0x1c573f1fa15a8ac9858589adb6a05da37c37234684fb87b1c8b41e2f4340ac07",
            "number": 10327342,
            "stateRoot": "0x07bdcb4e0a15b822935e0ddddf21cae57bb8c0456a9c94ca84efc56cdc4f5854",
            "extrinsicsRoot": "0x0e7d394752d2078dc6c1ab92fba3944e3dc31ef10a7279606b200fa6a1a57fa9",
            "digest": {
                "logs": [
                    {
                        "preRuntime": [
                            "0x42414245",
                            "0x017a000000fb016b1000000000b652811514074d3545e41fc46158cb9d72602abf0d0225891cf8dbe4dc10097c9bfc7450800805679d3ed8a6bd90a76b2cdd5a9c29a46a960aeef46e1d6f5103af419ce7c62004f545176d47414fef5fd8cd8e93af53bfd127f1c989fc505107"
                        ]
                    },
                    {
                        "seal": [
                            "0x42414245",
                            "0x24ec008ae71a74726d112af5f77c91c10b470e5bc02acf61d8e26d623f8eba47a52666058fd7071912d9b92a80f056317499622d400d2017febf2c4c1e63c588"
                        ]
                    }
                ]
            },
            hash:"0xb22ef0cf1cbacb9e6f61c4c1718e2744551e126270f74ed34d40bd03bbdffe17"
        })
    const _newHeader = () =>{
        // const bn = formatNumber(header.number);
        const bn = '10,327,444';
        const hash = header.hash;
        const parent = header.parentHash;
        headersRef.current.set(hash, createHdr(bn, hash, parent, null));
    }
    function createHdr (bn: string, hash: string, parent: string, author: string | null, isEmpty = false): LinkHeader {
        return { author, bn, hash, height: 0, isEmpty, isFinalized: false, parent, width: 0 };
      }
    return (
        <div></div>
    )
}
export default ForksTable
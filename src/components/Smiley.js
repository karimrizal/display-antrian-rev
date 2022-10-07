import React from 'react'
import { useState } from 'react'
import "../custom.css"

// document.querySelectorAll('.feedback li').forEach(entry => entry.addEventListener('click', e => {
//     // if (!entry.classList.contains('active')) {
//         // document.querySelector('.feedback li.active').classList.remove('active');
//         entry.classList.add('active');
//     // }
//     console.log("wow");
//     e.preventDefault();
// }));

export default function Smiley(props) {
    const [isSad, setIsSad] = useState(false);
    const [isOk, setIsOk] = useState(false);
    const [isGood, setIsGood] = useState(false);
    // const [poin, setPoin] = useState(0);
    return (
        <div>
            <ul className="feedback">
                {/* <li className="angry">
                    <div>
                        <svg className="eye left">
                            <use xlinkHref="#eye">
                            </use></svg>
                        <svg className="eye right">
                            <use xlinkHref="#eye">
                            </use></svg>
                        <svg className="mouth">
                            <use xlinkHref="#mouth">
                            </use></svg>
                    </div>
                </li> */}
                <li className={isSad?"sad active":"sad"} onClick={()=>{setIsSad(true); setIsOk(false); setIsGood(false); props.setValue(1);}}>
                    <div>
                        <svg className="eye left">
                            <use xlinkHref="#eye">
                            </use></svg>
                        <svg className="eye right">
                            <use xlinkHref="#eye">
                            </use></svg>
                        <svg className="mouth">
                            <use xlinkHref="#mouth">
                            </use></svg>
                    </div>
                </li>
                <li className={isOk?"ok active":"ok"} onClick={()=>{setIsSad(false); setIsOk(true); setIsGood(false); props.setValue(2);}}>
                    <div />
                </li>
                <li className={isGood?"good active":"good"} onClick={()=>{setIsSad(false); setIsOk(false); setIsGood(true); props.setValue(3);}}>
                    <div>
                        <svg className="eye left">
                            <use xlinkHref="#eye">
                            </use></svg>
                        <svg className="eye right">
                            <use xlinkHref="#eye">
                            </use></svg>
                        <svg className="mouth">
                            <use xlinkHref="#mouth">
                            </use></svg>
                    </div>
                </li>
                {/* <li className="happy">
                    <div>
                        <svg className="eye left">
                            <use xlinkHref="#eye">
                            </use></svg>
                        <svg className="eye right">
                            <use xlinkHref="#eye">
                            </use></svg>
                    </div>
                </li> */}
            </ul>
            <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
                <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7 4" id="eye">
                    <path d="M1,1 C1.83333333,2.16666667 2.66666667,2.75 3.5,2.75 C4.33333333,2.75 5.16666667,2.16666667 6,1" />
                </symbol>
                <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 7" id="mouth">
                    <path d="M1,5.5 C3.66666667,2.5 6.33333333,1 9,1 C11.6666667,1 14.3333333,2.5 17,5.5" />
                </symbol>
            </svg>
        </div>

    )
}

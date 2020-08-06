import React from "react";
import logo from "../assets/pc_logo.png";
export default function Header(props) {

    return (
        
            <div className="container header">
                <div className="left-side">
                   <img src={logo} />
                </div>
                <div>
                
                  <h1>FUND:<br></br>
                  {props.amtRaised} Dai</h1>
                
                  <a
                  href={`https://pay.testwyre.com/purchase?dest=ethereum%3A0x98B031783d0efb1E65C4072C6576BaCa0736A912&destCurrency=ETH&sourceAmount=10&paymentMethod=apple-pay&referenceId=your_own_id&accountId=YOUR_ACCOUNT`}
                  target="_blank"
                  >
                 <button>Donate</button></a>
                </div>
                <div className="right-side">
                <div>                    <h1 >              <a 
                href={`https://rinkeby.etherscan.io/address/${props.email}`}
                target="_blank"
              >
                {props.email.substring(0,8)}
              </a><br></br>
              <span>
              {!props.Reg?(<b>Not reg</b>):(<b>Solider Lvl: 0</b>)}
              </span></h1></div>

                    <button onClick={props.logout}>Logout</button>
                </div>

            </div>
        

    );
}


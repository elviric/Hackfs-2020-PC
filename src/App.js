import React, { useState, useEffect } from "react";
import "./styles.css";
import logo from "./assets/pc_logo.svg";
import logo_p from "./assets/pc_logo_+.png";
import { Magic } from "magic-sdk";
import EthCrypto from 'eth-crypto';
import { ethers } from 'ethers';
import Header from './components/Header';
import IpfsAPI from 'ipfs-http-client';

const ipfs = IpfsAPI({host: 'ipfs.infura.io', port: '5001', protocol: 'https' })





//console.log(ipfs);

const magic = new Magic('<MAGIC SDK API>', { network: 'rinkeby' });
const provider = new ethers.providers.Web3Provider(magic.rpcProvider);
const contractABI = '[{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"decreaseApproval","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"increaseApproval","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"transferAndCall","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"remaining","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"balance","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"decimalPlaces","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"tokenName","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"tokenSymbol","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"totalTokensIssued","type":"uint256"}],"stateMutability":"view","type":"function"}]';
const contractAddress = "0x0527e400502d0cb4f214dd0d2f2a323fc88ff924";
const linkContractABI = '[{"inputs":[],"name":"claimToken","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"requestId","type":"bytes32"},{"internalType":"uint256","name":"randomness","type":"uint256"}],"name":"fulfillRandomness","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"userProvidedSeed","type":"uint256"}],"name":"getRandomNumber","outputs":[{"internalType":"bytes32","name":"requestId","type":"bytes32"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"hash","type":"string"}],"name":"mintBadge","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"_keyHash","type":"bytes32"},{"internalType":"uint256","name":"_fee","type":"uint256"},{"internalType":"uint256","name":"_seed","type":"uint256"}],"name":"requestRandomness","outputs":[{"internalType":"bytes32","name":"requestId","type":"bytes32"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_fToken","type":"address"}],"name":"setFAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"badges","outputs":[{"internalType":"bytes32[]","name":"","type":"bytes32[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"colors","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"faucetAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isReg","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"member","outputs":[{"internalType":"string","name":"Hash","type":"string"},{"internalType":"bytes32","name":"Plasma","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"randomResult","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"soliders","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}]';
const linkContractAddress = "0x15b531245Fb5a3d2711e02eEFe3e069b23c06FE6";
const signer = provider.getSigner();



export default function App() {
  const [email, setEmail] = useState("");
  const [publicAddress, setPublicAddress] = useState("");
  const [balUser, setUserBal] = useState("");
  const [sendXTZAmount, setSendXTZAmount] = useState(0);
  const [contractoperationGroupID, setContractoperationGroupID] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userMetadata, setUserMetadata] = useState({});
  const [transactionOperationGroupID, setTransactionOperationGroupID] = useState("");
  const [amtRaised, setAmtRaised] = useState("");
  const [isSolider, setIsSolider] = useState(false);
  const [encryptThisData,setEncryptedData] = useState("");
  const [rawInput,setRawData] = useState("");
  const [addCID,setCID] = useState("");
  const [addReg,setReg] = useState("");
  const [col,setCol]=useState([]);
  useEffect(() => {
    magic.user.isLoggedIn().then(async magicIsLoggedIn => {
      setIsLoggedIn(magicIsLoggedIn);
      if (magicIsLoggedIn) {
        const { email, publicAddress } = await magic.user.getMetadata();
        setPublicAddress(publicAddress);
        setEmail(email.split('@')[0]);
        

       //const signer = provider.getSigner();

        // Get user's Ethereum public address
        const address = await signer.getAddress();

        // Get user's balance in ether
        const balance = ethers.utils.formatEther(
          await provider.getBalance(address) // Balance is in wei
        );
        setUserBal(balance);
          console.log("eth_Addr:"+address+"\n signer:"+"\n Balance:"+balance);
          amtR();
        
          
      }
    });
  }, [isLoggedIn]);

  const login = async () => {
    await magic.auth.loginWithMagicLink({ email });
    setIsLoggedIn(true);
  };

  const logout = async () => {
    await magic.user.logout();
    setIsLoggedIn(false);
  };
  
   
  
  
  const encrypt = async () =>{
    //Public which for Org to decode the encrypted data.
    const daoPK ='5eed5fa3a67696c334762bb4823e585e2ee579aba3558d9955296d6c04541b426078dbd48d74af1fd0c72aa1a05147cf17be6b60bdbed6ba19b08ec28445b0ca';

    const signedMessage = await signer.signMessage(rawInput);
    const wrappedSignedData = {msg:rawInput,signedMessage};

    //console.log(encryptThisData);
    const eMsg = await EthCrypto.encryptWithPublicKey(
      daoPK
    , JSON.stringify(wrappedSignedData)  );
    const eMsgstr = EthCrypto.cipher.stringify(eMsg);
    console.log(eMsgstr);
   setEncryptedData(eMsgstr);
  };
 
  const amtR = async ()=>{
    const contract = new ethers.Contract(contractAddress,contractABI,signer);
    const contractR = new ethers.Contract(linkContractAddress,linkContractABI,signer);
  
    const message = await contract.balanceOf('0x15b531245Fb5a3d2711e02eEFe3e069b23c06FE6');
    setAmtRaised(ethers.utils.formatEther(message));
    const isReg = await contractR.isReg();
    const colors = await contractR.badges();
    
    setCol(colors);
    setReg(isReg);
    console.log(colors[0].slice(-5),isReg);

  };


  
  

  const addIPFS = async()=>{
    //console.log(encryptThisData);
    const {cid} = await ipfs.add(encryptThisData);
    console.log(cid);
    setCID(cid);

  }
  const claim = async()=>{
    const contract = new ethers.Contract(linkContractAddress,linkContractABI,signer);
    const fau = await contract.claimToken();
    const receiptC = await fau.wait();
    amtR();
  }
  const conReg = async()=>{
    const contract = new ethers.Contract(linkContractAddress,linkContractABI,signer);
    
    // Send transaction to smart contract to update message
    const tx = await contract.mintBadge(addCID);

    

    // Wait for transaction to finish
    const receipt = await tx.wait();
    
    claim();
    console.log(receipt);
    
  
    
  }
  

  return (
    
    <div className="App">
      
      {!isLoggedIn ? (
        <div>
          <div className="container">
          <img width="50%" src={logo}/>
          </div>
          
          <div className="container gtc-2">
            <div>
            <h1>Please sign up or login</h1>
            </div>
          <div>
            <input
              type="email"
              name="email"
              required="required"
              placeholder="Enter your email"
              onChange={event => {
                setEmail(event.target.value);
              }}
            />
            <button onClick={login}>Send</button>
          </div>
        
          </div></div>
      ) : (
        <div>
          <Header email={publicAddress} logout={logout} Reg={addReg} amtRaised={amtRaised}/>
          <div className="container pad-top-4">
            

            <div className="info lemon">
              <div>Bal: {balUser>0? balUser+"ETH":<a href="https://faucet.rinkeby.io/" target="_blank"><button>Get ETH</button></a>}</div>
              <div>Req: <a href='#'>0</a></div>
              <div>Rinkeby Network</div>
              
            </div>
          
            
          </div>
          <div className="container scanvas">
          <ul><h1> Soliders Canvas </h1>

                
                {
                col.map((value, index) => {
                  const divStyle = {
                    
                    display: 'inline-block',
                    minWidth:20,
                    minHeight:20,
                    backgroundColor: '#' + value.slice(-6) ,
                  };
                  
                  
                  return <li key={index} style={divStyle} ></li>
                })}
            </ul>
          </div>
          { !addReg?

          <div className="container">
            
            <h1>Become a Plasma Solider!</h1>
            
             <input
              type="text"
              name="destination"
              className="full-width"
              required="required"
              placeholder="Enter ASL, Blood type and contact info"

              onChange={event => {
                setRawData(event.target.value);
              }}
            />
            {
              encryptThisData ?
                  <div>
                    
                    <input
              disabled
              type="text"
              name="amount"
              className="full-width"
              required="required"
              placeholder="Encrypted Data"

              value={encryptThisData}
              
                  />
             </div>
                  :
                  <div/>
            }
           
            <input
              disabled
              type="text"
              name="amount"
              className="full-width"
              required="required"
              placeholder="IPFS PUSH"

              value={addCID}
              onChange={event => {
                setEncryptedData(event.target.value);
              }}
            />
           
            <button id="btn-encrypt" onClick={encrypt}>
              Encrypt data
            </button>

            { encryptThisData?
            <button id="btn-send-txn" onClick={addIPFS}>
              PUSH TO IPFS
            </button>
            : <div></div>
            }
            { addCID?
            <button id="btn-send-txn" onClick={conReg}>
              Create Profile
            </button>:<div></div>}


          </div>
          :<div className="container gtc-2">

            <div>
              <div className="card ">
              <h3>Faucet</h3>
              <p >Claim free tokens</p>
              <div className="visual">
                <button onClick={claim}>Claim</button>
              </div>
            </div>
            </div>
            <div>
            <div>
              <div className="card ">
              <h3>PCDAO</h3>
              <p >Participate in Governance</p>
              <div className="visual">
                <a href="#">
                <button>Visit PCDAO</button>
                </a>
              </div>
            </div>
            </div>
            </div>
          </div>
          }
         
        </div>
      )}

      
        <div className="container footer">
          <div>Powered with:</div>
          <div>Chainlink</div>
          <div>IPFS</div>
          <div>Magic link</div>
          <div>Aragon</div>
          <div>Wyre</div>

        </div>
     

    </div>
  );
}

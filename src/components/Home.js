import React, { Component } from 'react';


class Home extends React.Component {
  render() {
    <div>
    <div className="container pad-top-4">
    <div className="info">

        <a 
            href={`https://rinkeby.etherscan.io/address/${publicAddress}`}
            target="_blank">
            {email}
        </a>
        <button onClick={logout}>Logout</button>
    </div>
    </div>

    <div className="container">
    <h1>Play Blackjack</h1>
    {
      transactionOperationGroupID ?
            <div>
                <div>
                Send transaction success
                </div>
                <div className="info">
                <a
                    href={`https://carthagenet.tzstats.com/${transactionOperationGroupID}`}
                    target="_blank"
                >
                    {transactionOperationGroupID}
                </a>
                </div>
            </div>
            :
            <div/>
    }
    <input
    type="text"
    name="destination"
    className="full-width"
    required="required"
    placeholder="Destination address"
    onChange={event => {
        setDestinationAddress(event.target.value);
    }}
    />
    <input
    disabled
    type="text"
    name="amount"
    className="full-width"
    required="required"
    placeholder="Amount in XTZ"
    value='500000'
    onChange={event => {
        setSendXTZAmount(event.target.value);
    }}
    />
    <button id="btn-send-txn" >
    PLAY BLACKJACK
    </button>
    </div>
    <div className="container" >
    <span>Game id:0x12333</span>
    <div className="green info">
    <h1>Dealer score: 0</h1>
    <div id="deck">
    <span className='h1-b4'>DECK</span>
    <div className="back"></div>
    </div>
    <div className="con-flex" id="dealer">
    <div className="card clubs">
    <div className="top rank">4</div>
    <div className="suit">♣</div>
    <div className="bottom rank">4</div>
    </div>
    <div className="card clubs">
    <div className="top rank">4</div>
    <div className="suit">♣</div>
    <div className="bottom rank">4</div>
    </div>
        </div>
    
    </div>
    <div class="green info">
    <h1>Player score: 0</h1>
    <div class="con-flex" id="player">
        <div class="card clubs">
        <div class="top rank">4</div>
        <div class="suit">♣</div>
        <div class="bottom rank">4</div>
        </div>
        <div class="card clubs">
        <div class="top rank">4</div>
        <div class="suit">♣</div>
        <div class="bottom rank">4</div>
        </div>
    </div>
    </div>
    <button id="btn-deploy" className="btn-wm" >
    Deal
    </button>
    <button id="btn-deploy" className="btn-wm" >
    HIT
    </button>
    <button id="btn-deploy" className="btn-wm" >
    STAND
    </button>
    </div>
    <div classNameName="container" hidden>
    <h1>Smart Contract</h1>
    <div classNameName="info">
    <a
        href={`https://carthagenet.tzstats.com/${contractoperationGroupID}`}
        target="_blank"
    >
        {contractoperationGroupID}
    </a>
    </div>
    <button id="btn-deploy" >
    Deploy Contract
    </button>
    </div>
    </div>
  }
}
export default Home;

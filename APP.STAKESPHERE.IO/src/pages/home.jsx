import React, { useState, useEffect } from "react";
import Web3 from "web3";
import TokenStakingABI from "../artifacts/contracts/Staking.sol/TokenStaking.json";
import './Home.css'; 
import "../App.css";
import sphere from "../imagestake/sphere (2).png";
import sphere2 from "../imagestake/sphere (3).png";
import star1 from "../imagestake/star-img.png";
import star2 from "../imagestake/star-img (1).png";
import star3 from "../imagestake/star-img (2).png";
import { Tooltip } from "react-tooltip";
const Home = () => {
  const [web3, setWeb3] = useState(undefined);
  const [stakeAmount, setStakeAmount] = useState(0);
  const [stakingPeriod, setStakingPeriod] = useState(12);
  const [commitmentIndex, setCommitmentIndex] = useState(0);
  const [startDate, setStartDate] = useState(""); 
  const [endDate, setEndDate] = useState(""); 
  const [message, setMessage] = useState("");
  const [totalStakedAmount, setTotalStakedAmount] = useState(0);
  const [getNetwork, setGetNetwork] = useState(undefined);
  const [contracts, setContracts] = useState(undefined);
  const [contractAddress, setContractAddress] = useState(undefined);
  const [mmStatus, setMmStatus] = useState("Not connected!");
  const [isConnected, setIsConnected] = useState(false);
  const [accountAddress, setAccountAddress] = useState(undefined);
  const [stakingSuccess, setStakingSuccess] = useState(false);
  const [userTotalStakedAmount, setUserTotalStakedAmount] = useState(0);

  const [showBox, setShowBox] = useState(true); // Initially set it to true to show the box

  useEffect(() => {
    (async () => {
      // Define web3
      if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        setWeb3(web3);
        // get networkId
        const networkId = await web3.eth.getChainId();
        setGetNetwork(networkId);
        // INSERT deployed smart contract address
        const contractAddress = "0xE63731D425A77066cc9a1b2CAf3EAFE59609D07f";
        setContractAddress(contractAddress);
        // Instantiate smart contract instance
        const TokenStaking = new web3.eth.Contract(
          TokenStakingABI.abi,
          contractAddress
        );
        setContracts(TokenStaking);
        // Set provider
        TokenStaking.setProvider(window.ethereum);
      } else {
        setMmStatus("⚠️ No wallet detected! Please install Metamask.");
      }
    })();
  }, []);

  // Connect to Metamask wallet
  async function connectWallet() {
    // Check Metamask status
    if (window.ethereum) {
      setMmStatus("✅ Metamask detected!");
      try {
        // Metamask popup will appear to connect the account
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        // Get address of the account
        setAccountAddress(accounts[0]);
        setIsConnected(true);

                // // Call fetchUserTotalStakedAmount to update the user's total staked amount
                // await fetchUserTotalStakedAmount();

         // Hide the box when the wallet is connected
        setShowBox(false);
      } catch (error) {
        console.log("Error: ", error);
      }
    } else {
      setMmStatus("⚠️ No wallet detected! Please install Metamask.");
    }
      
  }

  useEffect(() => {
    const fetchUserTotalStakedAmount = async () => {
      if (contracts && accountAddress) {
        try {
          // Call the getStakedAmount function in your smart contract
          const userStakedAmountInWei = await contracts.methods.getStakedAmount(accountAddress).call();
          // Convert the user's staked amount from Wei to FIL
          const userStakedAmountInFIL = web3.utils.fromWei(userStakedAmountInWei, "ether");
          // Update the state with the user's total staked amount in FIL
          setUserTotalStakedAmount(userStakedAmountInFIL);
        } catch (error) {
          console.error("Error fetching user's total staked amount:", error);
        }
      }
    };
    // Check if the user is connected before fetching the total staked amount
    if (isConnected) {
      fetchUserTotalStakedAmount();
    }
  }, [contracts, accountAddress, isConnected]);

  

  // useEffect(() => {
  //   const fetchTotalStakedAmount = async () => {
  //     if (contracts) {
  //       try {
  //         const totalStaked = await contracts.methods.getTotalStakedAmount().call();
  //         setTotalStakedAmount(totalStaked);
  //       } catch (error) {
  //         console.error("Error fetching total staked amount:", error);
         
  //       }
  //     }
  //   };
  //   fetchTotalStakedAmount();
  // }, [contracts]);

  // // total staked amount
  // const fetchUserTotalStakedAmount = async () => {
  //   if (contracts && accountAddress) {
  //     try {
  //       // Call the getStakedAmount function in your smart contract
  //       const userStakedAmountInWei = await contracts.methods.getStakedAmount(accountAddress).call();
  //       // Convert the user's staked amount from Wei to FIL
  //       const userStakedAmountInFIL = web3.utils.fromWei(userStakedAmountInWei, "ether");
  //       // Update the state with the user's total staked amount in FIL
  //       setUserTotalStakedAmount(userStakedAmountInFIL);
  //     } catch (error) {
  //       console.error("Error fetching user's total staked amount:", error);
  //     }
  //   }
  // };
  

  const handleStake = async () => {
    if (!contracts || !web3 || !accountAddress) {
      console.warn("Contract, web3, or account not properly initialized.");
      return;
    }
    try {
      const stakeInWei = web3.utils.toWei(stakeAmount.toString(), "ether");
      console.log("Staking amount in Wei:", stakeInWei);
      // Call the stake() method and get the returned values directly
      const commitmentIndex = await contracts.methods.stake(stakingPeriod).send({ from: accountAddress, value: stakeInWei });
      // The returned value is the commitment index directly
      const index = commitmentIndex.events.CommitmentAdded.returnValues.index;
      // The staking end time is directly returned as well
      const stakingEndTimeInSeconds = commitmentIndex;
      console.log("Stake successful! Commitment Index:", index);
      // The start time stamp doesn't seem to be returned, so you can use the current time instead
      const startTimeStamp = Math.floor(Date.now() / 1000);
      const startDate = new Date(startTimeStamp * 1000).toLocaleDateString();
      console.log("Start Date:", startDate);
      // As mentioned earlier, it's unclear where this end timestamp is coming from, but you can use the current time as well
      const endTimeStamp = Math.floor(Date.now() / 1000) + stakingPeriod * 30 * 24 * 60 * 60; // Assuming each month has 30 days
      const endDate = new Date(endTimeStamp * 1000).toLocaleDateString();
      console.log("End Date:", endDate);
      setMessage("Stake successful!"); //Set the stake successfully to show on the front end
      setStakingSuccess(true);
      // Fetch the updated user's staked amount after the stake
      const userStakedAmountInWei = await contracts.methods.getStakedAmount(accountAddress).call();
      // Convert the user's staked amount from Wei to FIL
      const userStakedAmountInFIL = web3.utils.fromWei(userStakedAmountInWei, "ether");
      // Update the state with the user's total staked amount in FIL
      setUserTotalStakedAmount(userStakedAmountInFIL);
      setCommitmentIndex(index); // Set the commitment index to show on the front end
      setStartDate(startDate); // Set the start date to show on the front end
      setEndDate(endDate); // Set the end date to show on the front end
    } catch (error) {
      console.error("Error staking tokens:", error);
      setMessage("Error staking tokens: " + error.message);
    }
  };
  




  // // total staked amount
  // const fetchUserTotalStakedAmount = async () => {
  //   if (contracts && accountAddress) {
  //     try {
  //       // Call the getStakedAmount function in your smart contract
  //       const userStakedAmountInWei = await contracts.methods.getStakedAmount(accountAddress).call();
  //       // Convert the user's staked amount from Wei to FIL
  //       const userStakedAmountInFIL = web3.utils.fromWei(userStakedAmountInWei, "ether");
  //       // Update the state with the user's total staked amount in FIL
  //       setUserTotalStakedAmount(userStakedAmountInFIL);
  //     } catch (error) {
  //       console.error("Error fetching user's total staked amount:", error);
  //     }
  //   }
  // };
//withdrawal
const handleWithdraw = async () => {
  if (!contracts || !web3 || !accountAddress) {
    console.warn("Contract, web3, or account not properly initialized.");
    return;
  }
  if (!commitmentIndex) {
    setMessage("Please provide a commitment index for withdrawal.");
    return;
  }
  try {
    const commitmentCount = await contracts.methods.getCommitment().call();
    if (commitmentIndex < 0 || commitmentIndex >= commitmentCount) {
      setMessage("Invalid commitment index provided.");
      return;
    }
    const commitment = await contracts.methods.commitments(commitmentIndex).call();
    if (commitment.isWithdrawn) {
      setMessage("This commitment has already been withdrawn.");
      return;
    }
    if (commitment.staker.toLowerCase() !== accountAddress.toLowerCase()) {
      setMessage("You are not the staker of this commitment.");
      return;
    }
    if (Date.now() / 1000 < commitment.endTime) {
      setMessage("Staking period is not over yet.");
      return;
    }
    await contracts.methods.withdraw(commitmentIndex).send({ from: accountAddress });
    setMessage("Withdrawal successful!");
  } catch (error) {
    console.error("Error withdrawing tokens:", error);
    setMessage("Error withdrawing tokens: " + error.message);
  }
};

  const handleStakingPeriodChange = (e) => {
    setStakingPeriod(e.target.value);
  };
  return (
    

    <div className="w-screen relative h-screen z-50 font-grotesk font-bold text-center">
      <img className="absolute bottom-0 left-0 " src={sphere} alt="pic1" />
      <img className="absolute top-0 right-0" src={sphere2}  alt="pic2"/>
      <img className="absolute bottom-[20%] right-[5%]" src={star1}  alt="pic3"/>
      <img className="absolute bottom-[8%] left-[20%]" src={star2} alt="pic4" />
      <img className="absolute top-[10%] left-[10%]" src={star3} alt="pic5" />
            <div className="flex flex-col justify-center items-center mt-10 leading-9">  
            <p className="font-medium text-4xl">FileCoin Staking</p>
            <p className="font-normal text-xl mt-3 mb-5 relative z-20">
              Unrivaled FileCoin staking experience
            </p>

            {showBox && (

              <div className="h-max md:w-[425px] w-fit bg-white relative z-50 flex flex-col p-7 items-start box gap-6 ">
            <div className="text-xl font-normal">
              <span className="px-3 py-2 bg-[#00FFE0] rounded-[39px]">Stake</span>
              <span className="ml-3 p-3">Unstake</span>
            </div>
         
            <div  className=" w-full flex  relative flex-col items-start cursor-not-allowed">
              <div>
                Stake Amount <span className="font-light">(FIL)</span>
              </div>
          <Tooltip id="my-tooltip1"/>
              <div data-tooltip-id="my-tooltip1" data-tooltip-content="Connect Wallet" className="h-[43px] w-full rounded-[39px] border-[#00FFE0] flex justify-between items-center px-4 py-6 border-2 mt-2">
                <span className="font-normal">0.0</span>
                <span>MAX</span>
              </div>
            </div>
            <div className=" w-full flex  relative cursor-not-allowed flex-col items-start">
              <div>
                Staking Period <span className="font-light">(in Months)</span>
              </div>
              <Tooltip id="my-tooltip1"/>
  
              <div data-tooltip-id="my-tooltip1" data-tooltip-content="Connect Wallet" className="h-[43px] w-full rounded-[39px] border-[#00FFE0]  flex justify-between items-center px-4 py-6 border-2 mt-2">
                <span className="font-normal">0</span>
                <span>MAX</span>
              </div>
            </div>
          </div>

            )}
            


            <div >
                {!isConnected ? (
                    <div className="walletbtn">
                    <button   onClick={connectWallet}>Connect Wallet</button>
                    </div>
                ) : (
                <div >
                <p>User Total Staked Amount: {userTotalStakedAmount} FIL</p>

                    <br />
                    <div className="h1text">
                    <div className="h-max md:w-[425px] w-fit relative z-50 flex flex-col p-7 items-start  gap-6 ">
                      <div className="text-xl font-bold">
                        <span className="px-5 py-2 bg-[#00FFE0] rounded-[39px]">Stake</span>
                      </div>    
                      <div className=" w-full flex  relative flex-col items-start cursor-not-allowed">      
                       <div>
                          Stake Amount <span className="font-light">(FIL)</span>
                        </div>
                      <div>
                        <input  className="h-[43px] w-full rounded-[39px] border-[#00FFE0] flex justify-between items-center px-12 py-6 border-2 mt-2"
                                  
                                  placeholder="Staking Amount"
                                  value={stakeAmount}
                                  onChange={(e) => setStakeAmount(e.target.value)}/>
                                  <Tooltip id="my-tooltip1"/>
                        </div>
                      </div>
                      
                      <div className=" w-full flex  relative cursor-not-allowed flex-col items-start">
                            <div>
                              Staking Period <span className="font-light">(in Months)</span>
                            </div>
                            <div >
                            <select className="rounded-[39px] border-[#00FFE0] px-16 py-4 border-2 mt-2 text-black"
                              value={stakingPeriod}
                              onChange={handleStakingPeriodChange}
                              >
                              <option value="" >Select Staking Period</option>
                                  <option value="18">18 Months</option>
                            </select>
                            </div>
                      </div>
                  </div>  
                    <div className="walletbtn " ><button  onClick={handleStake}>Stake Tokens</button></div><br/>
                    

                    {stakingSuccess && (
                      
                      <div className="stake-after">
                        <div className="successMessage"><p >{message}</p></div>
                        <div className="stakesuccess"><p>Commitment Index: {commitmentIndex}</p>
                        <p>Start Date: {startDate}</p>
                        <p>End Date: {endDate}</p>
                        
                        <p className="notemsg">Note down the Commitment index value {commitmentIndex} for Unstaking FILs</p>

                        </div>
                      </div>
                    )}    
                    
                    </div><br/>
                    <div className="h1text">
                    <div className="h-max md:w-[425px] w-fit relative z-50 flex flex-col p-7 items-start  gap-4 ">
                    <div className="text-xl font-bold">
                    <span className="px-3 py-2 bg-[#00FFE0] rounded-[39px]">Unstake</span>
                  </div>
                  <div className=" w-full flex  relative flex-col items-start cursor-not-allowed">
                      <div>
                        Commitment Index 
                      </div>
                    </div>
                    <input className="h-[43px]  rounded-[39px] border-[#00FFE0] flex justify-between items-center px-12 py-6 border-2 mt-2"
                    type="text"
                    value={commitmentIndex}
                    onChange={(e) => setCommitmentIndex(e.target.value)}
                    />
                    <br />
                    </div>
                    <div className="walletbtn "><button onClick={handleWithdraw}>Withdraw Tokens</button></div>
                    <p  className="successMessage">{message}</p>
                    </div>
                </div>
                
                )}
            </div>
            </div>
            </div>
           
  );
};

export default Home;


const alchemyKey = "wss://eth-sepolia.g.alchemy.com/v2/1-ra2sF0voR8q9ixkPBqHe4wUQXnFjKz"
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(alchemyKey);
const contractABI = require('../contract-abi.json')
const contractAddress = "0x6c8d3bbc2EE291ce5d1a6008B23db3470ccdA6ab";

export const helloWorldContract = new web3.eth.Contract(
    contractABI,
    contractAddress
);

export const loadCurrentMessage = async () => { 
  const message = await helloWorldContract.methods.message().call();
  return message;
};

export const connectWallet = async () => {
    try {
        const accounts = await web3.eth.getAccounts();
        if (accounts.length > 0) {
            return {
                address: accounts[0],
                status: "👆 Write a message in the text-field above."
            };
        } else {
            return {
                address: " ",
                status: "🦊 Connect to MetaMask using the top right button."
            };
        }
    } catch (error) {
        return {
            address: " ",
            status: "😢 " + error.message
        };
    }
};

export const getCurrentWalletConnected = async () => {
    if (typeof window.ethereum === 'undefined') {
        return {
            address: "",
            status: (
                <p>
                    {" "}
                    🦊{" "}
                    <a target="_blank" href={`https://metamask.io/download`}>
                        You must install MetaMask, a virtual Ethereum wallet, in your browser.
                    </a>
                </p>
            )
        };
    }

    try {
        // Request user permission to access Ethereum accounts
        await window.ethereum.request({ method: "eth_requestAccounts" });
        
        // Retrieve Ethereum accounts
        const accounts = await window.ethereum.request({ method: "eth_accounts" });

        if (accounts.length > 0) {
            return {
                address: accounts[0], // Make sure accounts[0] is a valid Ethereum address
                status: "👆 Write a message in the text-field above"
            };
        } else {
            return {
                address: "", // Return an empty string if no account is available
                status: "🦊 Connect to MetaMask using the top right button."
            };
        }
    } catch (error) {
        return {
            address: "",
            status: "😢 " + error.message
        };
    }
};


export const updateMessage = async (address, message) => {
    if (!window.ethereum || address === null) {
        return {
            status:
            "💡 Connect your metamask wallet to update the message on the blockchain.",
        };
    }
    
    if (message.trim() === "") {
        return {
            status: "❌ Your message cannot be empty",
        }
    }

    //set up transaction parameters
    const transactionParameters = {
        to: contractAddress,
        data: helloWorldContract.methods.update(message).encodeABI(),
    };

    try {
        const txHash = await window.ethereum.request({
            method: "eth_sendTransaction",
            params: [transactionParameters],
        });
        return {
            status: (
                <span>
                    ✅{" "}
                    <a target="_blank" href={`https://sepolia.etherscan.io/tx/${txHash}`}>
                        View the status of your transaction on Etherscan!
                    </a>
                    <br/>
                    ℹ Once the transaction is verified by the network, the message will be updated automatically.
                </span>
            ),
        };
    } catch (error) {
        return {
            status: "😢 " + error.message
        };
    }
};


 

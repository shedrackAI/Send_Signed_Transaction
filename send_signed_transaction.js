const { ethers } = require("ethers");

const INFURA_ID = 'ADD YOU INFURA ID'
const provider = new ethers.providers.JsonRpcProvider(`https://kovan.infura.io/v3/${INFURA_ID}`)

const account1 = 'ADD YOUR WALLET 1'; // sender
const account2 = 'ADD YOUR WALLET 2'; // recipient

const privateKey1 = 'Add your private key'; // sender private key
const wallet = new ethers.Wallet(privateKey1, provider);

const main = async () => {
    const senderBalanceBefore = await provider.getBalance(account1)
    const recieverBalanceBefore = await provider.getBalance(account2)

    console.log(`\nSender balance before: ${ethers.utils.formatEther(senderBalanceBefore)}`)
    console.log(`reciever balance before: ${ethers.utils.formatEther(recieverBalanceBefore)}\n`)

    const tx = await wallet.sendTransaction({
        to: account2, 
        value: ethers.utils.parseEther("0.05"),
    })

    // Wait for transaction to be Mined
     await tx.wait()
     console.log(tx);

     const senderBalanceAfter = await provider.getBalance(account1)
    const recieverBalanceAfter = await provider.getBalance(account2)

    console.log(`\nSender balance after: ${ethers.utils.formatEther(senderBalanceAfter)}`)
    console.log(`reciever balance after: ${ethers.utils.formatEther(recieverBalanceAfter)}\n`)
}

main()

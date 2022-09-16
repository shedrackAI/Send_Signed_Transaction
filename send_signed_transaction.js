const { ethers } = require("ethers");

const INFURA_ID = 'dbee5a9cdd864392bd99f204bd74de53'
const provider = new ethers.providers.JsonRpcProvider(`https://kovan.infura.io/v3/${INFURA_ID}`)

const account1 = '0x10dC891312d60F6612200590dE40A7243e2238A6'; // sender
const account2 = '0xf590150865ebc5bb7711d614e7001e9b166402Ac'; // recipient

const privateKey1 = 'fc0ffb63b1e40416a0abbf2e387a52e07b2ded82c307e8c6f0cf06d0cc3e5deb'; // sender private key
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
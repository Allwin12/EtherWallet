# EtherWallet
Ether wallet webapp using django and ether.js

The home page looks like this.

![Image of homepage](https://github.com/Allwin12/EtherWallet/blob/master/screenshots/homepage.png)

The users will have two options.    
1. Create wallet
2. Import wallet

# Create wallet

If we click on create wallet a wallet address will be generated. Each address will have a primary key and a mnemonic phrase that can be used to import our address on other wallets. A .txt file is generated which will hold our primary key and mnemonic phrase. Enter the name and save the .txt file. This will be helpful to import our address later, either on this wallet or other wallets.


If we click on create wallet a prompt window appears which will enable us to specify the name of our .txt file.
The screen looks like this.

![Image of homepage](https://github.com/Allwin12/EtherWallet/blob/master/screenshots/createwallet.png)

Let's just say i give the name as walletkey.txt

The walletkey.txt will have the following data.

>0xeb4cb48020ca6339db3f955870186b6e2f5019f99820aa5298d49b76a23d5dea
>mercy recycle syrup ticket grit lamp pony matrix action banana menu tumble

The first line is the primary key and the next line is the mnemonic phrase.

After this our wallet homepage opens.

We can see our address and balance here.

![Image of Wallet1](https://github.com/Allwin12/EtherWallet/blob/master/screenshots/wallet1.png)
![Image of Wallet2](https://github.com/Allwin12/EtherWallet/blob/master/screenshots/wallet2.png)
![Image of Wallet3](https://github.com/Allwin12/EtherWallet/blob/master/screenshots/wallet3.png)

# Test Eher

By default the wallet is connected to Ropsten test network and not on the main ethereum network. We have a button called 
get test ether on the walletpage.

![Image of Button](https://github.com/Allwin12/EtherWallet/blob/master/screenshots/wallet2%20(1).png)

clicking on this takes us to https://faucet.ropsten.be/. The page looks like this.

![Image of faucet](https://github.com/Allwin12/EtherWallet/blob/master/screenshots/faucet.png)

Here we should specify our wallet address (e.g 0x0a1d81AB2608f3220B9dFBb0a8f55A7f0416597e) and click "send me test ether". A test ether of amount 1 will be added to our account. if we go back and refresh our account we can see that our balance now is "1.0" ether  which was previously "0.0" ethers.

![Image of Updatedbalance](https://github.com/Allwin12/EtherWallet/blob/master/screenshots/updatedbalance.png)

# Send ethers
I am using metamask to demonstrate the send ethers. Metamask is a chrome extension and a ethereum wallet. I have another account created in metamask and connected to ropsten test network. (note: both the wallet addresses must be connected to a same network. i,e Ropsten test network here)

The metamask wallet looks like this. Click on the account name and copy the address. This is the receiver address. We are going to send some ethers from our wallet to this account on the metamask wallet.

![Image of metamask](https://github.com/Allwin12/EtherWallet/blob/master/screenshots/metamaskwallet.png)

# Transfer

1) Go to our wallet. 
2) Type in or paste the receiver address. (0xb7Da0F9E26f47d6A22480560F7C260c8b40e94b9)
3) Enter the amount of ethers to be sent. (0.4 ethers)
4) Click send.
5) Our transaction summary is shown in (https://ropsten.etherscan.io/tx/0x0f53a86ba921895688ed6023d99b680f8efbabd3b05f85dc49f47b3e1386841c). once the status is complete, the new balance is updated in both the accounts and our transactions are reflected.

![Image of Transfer](https://github.com/Allwin12/EtherWallet/blob/master/screenshots/transfer.png)

# Transaction summary (pending)

![Image of Etherscan](https://github.com/Allwin12/EtherWallet/blob/master/screenshots/etherscan.png)

# Transaction summary (Success)

Once the transaction succeeds we can see the updated balances in our account.

![Image of ethersuccess](https://github.com/Allwin12/EtherWallet/blob/master/screenshots/etherscansuccess.png)


# Updated balance

![Image of Metbalance](https://github.com/Allwin12/EtherWallet/blob/master/screenshots/metamaskupdatedbalance.png)

We can see that the balance of our metamask account is now 0.4 ethers, that we sent from our wallet.

![Image of Updatedwalletbalance](https://github.com/Allwin12/EtherWallet/blob/master/screenshots/updatedwalletbalance.png)

Our wallet balance is now 0.599979 i.e, the 0.4 ethers that we sent minus the gas fee.

Our wallet works and our transaction is complete.


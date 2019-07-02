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


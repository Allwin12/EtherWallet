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

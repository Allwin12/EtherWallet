function pkimport()
{
    var privateKey = document.getElementById("pk").value;
    wallet = new ethers.Wallet(privateKey);
    address = wallet.address;
    localStorage.setItem("address",address);
	localStorage.setItem("privatekey",privateKey);
	path = window.location.origin;
	path = path+'/wallet/';
	window.open(path,"_self");
}

function phraseimport()
{
    mnemonic = document.getElementById("phrase").value;
    mnemonicWallet = ethers.Wallet.fromMnemonic(mnemonic);
    address = mnemonicWallet.address;
    privateKey = mnemonicWallet.privateKey;
    localStorage.setItem("address",address);
	localStorage.setItem("privatekey",privateKey);
	path = window.location.origin;
	path = path+'/wallet/';
	window.open(path,"_self");
}
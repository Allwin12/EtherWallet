function create()
{
    randomWallet = ethers.Wallet.createRandom();
	console.log(randomWallet);
	mnemonic = randomWallet.signingKey.mnemonic;
	var address = randomWallet.signingKey.address;
	privateKey = randomWallet.signingKey.privateKey;
	console.log(mnemonic);
	console.log(address);
	console.log(privateKey);
	function download(filename, text) {
 	var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

	var filename = prompt("Save your mnemonic phrase and private key to your local storage.\n Enter the file name");
	download(filename,privateKey+'\n'+mnemonic);
	localStorage.setItem("address",address);
	localStorage.setItem("privatekey",privateKey);
    window.open('wallet/',"_self");
}


function fun()
{
    window.open('import/',"_self");
}
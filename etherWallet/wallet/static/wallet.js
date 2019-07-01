window.onload = function() {
            document.getElementById("address").innerHTML = localStorage.getItem("address");
            document.getElementById("sender").innerHTML = localStorage.getItem("address");
           	provider = ethers.getDefaultProvider('ropsten');
	        address = localStorage.getItem("address");
	        provider.getBalance(address).then((balance) => {
	        etherString = ethers.utils.formatEther(balance);
	        localStorage.setItem("balance",etherString);
    	    document.getElementById("balance").innerHTML = etherString;
    	    document.getElementById("amount").placeholder = etherString - 0.000021;
        });
        }


function calculate()
{
     var x = document.getElementById("amount").value;
     x =  parseFloat(0.000021) + parseFloat(x);
     if (x >  document.getElementById("amount").placeholder)
     {
           document.getElementById("balancecheck").innerHTML = "insufficient balance";
           document.getElementById("balancecheck").style.color = "#FF7400";
           document.getElementById("amount").value='';
     }
     if (x <  document.getElementById("amount").placeholder)
     {
           document.getElementById("balancecheck").innerHTML = "Funds available";
           document.getElementById("balancecheck").style.color = "#EBF5FB";
     }
     document.getElementById("cost").innerHTML = "Cost : "  + x;
}
function sendmoney()
{
    provider = ethers.getDefaultProvider('ropsten');
    privateKey = localStorage.getItem('privatekey');
    senderaddress = document.getElementById("receiveraddress").value;
    var x = ethers.utils.getAddress(senderaddress);
    wallet = new ethers.Wallet(privateKey, provider);
    tx = {
    gasLimit: 21000,
    to:senderaddress,
    value: ethers.utils.parseEther(document.getElementById("amount").value)
    };

    sendPromise = wallet.sendTransaction(tx);
    sendPromise.then((tx) => {
    console.log(tx.hash);
    window.open("https://ropsten.etherscan.io/tx/"+tx.hash,"_self");
    });
}

function test()
{
    window.open("https://faucet.ropsten.be/");
}
function logout()
{
    localStorage.clear();
    path = window.location.origin;
    window.open(path,"_self");
}
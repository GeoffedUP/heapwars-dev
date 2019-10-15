<template>





<body>
    

  <div class="wrapper">
    <top class="top">
      <h1></h1>
    </top>
    <article class="box">

      <div class="fakeimg" style="height: 100%;">
        <h4>Track your Shuffle Monster Tokens</h4>
        <p align="center">
          <font size="2px" Style="font-weight: 50;">paste your wallet addresses below</font>
          <font size="2" style="color: #a8a8a8a4; font-weight: 50;"> <br><i>input one address per line</i></font>
          <textarea id="myTextarea" placeholder="0x69696562885eB3C9a609f957efd150DF93BA8c2e
0x3A9FfF453d50D4Ac52A6890647b823379ba36B9E
0xAb5801a7D398351b8bE11C439e05C5B3259aeC9B
0x1Db3439a222C519ab44bb1144fC28167b4Fa6EE6
0x4Cdc86fa95Ec2704f0849825f1F8b077deeD8d39" style="height: 125px">
</textarea>
        </p>
        <input type="submit" value="Get Heap Results" class="btn btn-success" onclick="myFunction()" />
        
      </div>
    </article>
    <aside class="aside aside-1">
      <div class="fakeimg-1" style="height: 100%;">
        <h4>My Heap Spots</h4>
        <div id="mySpots">
          <div id="addy"></div>
        </div>
      </div>
    </aside>
    <aside class="aside aside-2">
      <div class="fakeimg-2" style="height: 100%;">
        <h4>My Address Balances</h4>
        <div id="myBalances"></div>
        <div id="addy2"></div>
      </div>
    </aside>

  </div>



</body>

</template>



<script>



import { readWeb3, getToken } from '../web3.js';



function shortAddress(from) {
    return `${from.slice(0, 21)}...${from.slice(-5)}`;
}

function formatAmount(amount, maxDigits = 6)  {
    if (amount.toString().length <= maxDigits) {
        return amount.toString();
    }

    const intDigits = amount.toFixed(0).toString().length;
    const decDigits = maxDigits - intDigits;

    const decimals = (decDigits > 0) ? decDigits : 0;

    return Number(amount.toFixed(decimals)).toString();
}


export default {
  name: 'Eth',
  data: function() {
    return {
        transfers: this.transfers
    }
  },


    methods:{
      click_transfer: function(item) {
        var redirectWindow = window.open(`https://etherscan.io/tx/${item.tx}`, '_blank');
        redirectWindow.location;
      },
  },



}





    // let addresses = [];

    // function myFunction() {
    //     addresses = document.getElementById("myTextarea").value.split(/\r?\n/);
    //     $('#mySpots')[0].innerHTML = ''
    //     $('#myBalances')[0].innerHTML = ''

    //     addresses.map(address => {
    //         console.log('address - looping!', address)
    //         getHeapIndex(address).then(function (result) {
    //             console.log(address);
    //             let h =
    //                 `<font size="2px" Style="font-weight: 100;"><a style="color: #ffffff" href="https://etherscan.io/address/${address}" target="_blank">${address}</a></br>^  <font size="3" style="color: #ff3c00f8; font-weight: 600;">is # ${result} in the Heap</font> </br></br>`;
    //             console.log(h);
    //             $('#mySpots').append(h);
    //         });

    //         getBalance(address).then(function (result) {
    //             let h =
    //                 `<font size="2px" Style="font-weight: 100;"><a style="color: #ffffff" href="https://etherscan.io/address/${address}" target="_blank">${address}</a></br>^ Has</font> <font size="3" style="color: #ff3c00f8; font-weight: 600;">${web3.utils.fromWei(result, 'ether')} SHUF</font>  </br></br>`;
    //             console.log('@@@', h);
    //             $('#myBalances').append(h);
    //         });
    //     })
    // }


    // if (typeof web3 !== 'undefined') {
    //     web3 = new Web3(web3.currentProvider);
    // } else {
    //     // set the provider you want from Web3.providers
    //     //web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
    //     web3 = new Web3(new Web3.providers.HttpProvider(
    //         'https://mainnet.infura.io/v3/d49aab007464452cab5a8c32653bb437'))
    // }
    // var shuffle = new web3.eth.Contract(shuffleABI, contractAddress);

    // shuffle.methods.heapTop().call().then(function (result) {
    //     $('#heapTop').html(web3.utils.fromWei(result[1], 'ether'));
    // });

    // function getHeapIndex(addy) {
    //     return shuffle.methods.heapIndex(addy).call()
    // }

    // function getBalance(addy) {
    //     return shuffle.methods.balanceOf(addy).call()
    // }




</script>


<style scoped>
.icon{
    font-size: 33px;
    color: black;
    background-color: white;
    padding: 16px;
    margin: 16px;
}
.icon:hover {
  padding: 18px;
  margin: 14px;
  text-decoration: none;
}
.background {
    position: static;
    width: 100%;
    padding: 0;
    padding: 60px;
    background: linear-gradient(181.07deg, #21540F 9.11%, #153413 83.74%), #153312;
}
.prof {
    width: 256px;
    height: 256px;
}
.me {
    margin-left: 30px;
}
.title{
    position: static;

    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 30px;
    text-align: left;
    line-height: 93.19%;
    /* or 23px */

    display: flex;
    letter-spacing: -0.02em;

    color: #FFFFFF;
}
.profile{
    position: static;

    font-family: Poppins;
    font-style: normal;
    font-size: 16px;
    text-align: left;
    /* or 23px */
    color: #FFFFFF;
}
.lk{
    text-align: left;
}
@media screen and (max-width: 767px) {
  .mobile-top-margin {
      padding-top:44px;
      margin-left: 0px;
    }
}
</style>

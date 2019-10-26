<template>
  <div class="content">



<div class="w3-row-padding">

      <div class="top-2 w3-margin-bottom">
  <div class="w3-badge">

<!--
<table class="w3-table-all w3-hoverable w3-green2 w3-card-4">
            <tbody>
              <tr>
    <th colspan="2">
    
    
    <h4 align="center">RawHeap</h4></th>
  </tr>
                    <tr class="w3-hoverable">

    <th>Address</th>
    <th>Amount</th>
  </tr>

  </tbody>
  <tbody class="w3-hoverable">
                <tr class="w3-hover-green" v-for="item in fullHeap" v-bind:key="item.address">

      <td><span><b><font color="#ccc" size="3">{{ item.heapaddress }}</font></b></span></td> 
      <td><span> With: <b><font color="#fffb00">{{ item.heapbalance }} SHUF</font></b></span></td>
       </tr>
             </tbody>
          </table>
-->







        </div>
     </div>
  </div>



   
  </div>
</template>




<script>

  import EditProfileForm from './UserProfile/EditProfileForm.vue';
  import UserCard from './UserProfile/UserCard.vue';
  import { readWeb3, getToken, getHeap } from '../web3.js';
  import env  from '../env.js';
  import { aggregate } from '@makerdao/multicall';


  function shortAddress(from) {
    return `${from.slice(0, 6)}...${from.slice(-4)}`;
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
    components: {
      EditProfileForm,
      UserCard
    },

    data: function() {
    return {
        // transfers: this.transfers,
        // winners: this.winners,
        // joinheap: this.joinheap,
        // leaveheap: this.leaveheap,
        fullHeap: this.fullHeap
    }
  },

  methods:{
      // click_transfer: function(item) {
      //   var redirectWindow = window.open(`https://etherscan.io/tx/${item.tx}`, '_blank');
      //   redirectWindow.location;
      // },

      // click_winner: function(item) {
      //   var redirectWindow = window.open(`https://etherscan.io/tx/${item.wintx}`, '_blank');
      //   redirectWindow.location;
      // },

      //       click_joinheap: function(item) {
      //   var redirectWindow = window.open(`https://etherscan.io/token/0x3a9fff453d50d4ac52a6890647b823379ba36b9e?a=${item.joinaddress}`, '_blank');
      //   redirectWindow.location;
      // },
      
            click_leaveheap: function(item) {
        var redirectWindow = window.open(`https://etherscan.io/token/0x3a9fff453d50d4ac52a6890647b823379ba36b9e?a=${item.leaveaddress}`, '_blank');
        redirectWindow.location;
      },
  },

      created: async function() {
      // Demostration
      // how to load all heap positions at once
      const heapContract = getHeap(readWeb3());
      const heapSize = parseInt(await heapContract.methods.topSize().call());
      const multicallConfig = { multicallAddress: '0xeefba1e63905ef1d7acba5a8513c70307c1ce441', rpcUrl: env.ethNode, };

      // Create watcher
      const rawResult = await aggregate(
        [...Array(heapSize).keys()].map((v) => { return {
          target: heapContract.address,
          call: ['entry(uint256)(address,uint256)', v],
          returns: [
            [`EA_${v}`],
            [`EB_${v}`]
          ]
        }}),
        multicallConfig
      );

      const result = [...Array(heapSize).keys()].map((v) => { return {
        address: rawResult.results[`EA_${v}`],
        balance: rawResult.results[`EB_${v}`]
      }});

      console.log(result);
      // End Demostration


  this.fullHeap = [...Array(heapSize).keys()].map((v) => { return {
      heapaddress: rawResult.results[`EA_${v}`],
      heapaddress_short: shortAddress(rawResult.results[`EA_${v}`]),
      heapbalance: formatAmount(parseFloat(rawResult.results[`EB_${v}`].toString()) / 10 ** 18)
      }
    }
  );

  // this.transfers = [];
  //   const reparter = getToken(readWeb3());
  //       reparter.events.Transfer({
  //           fromBlock: 8617285
  //       },
  //       (error, event) => {
  //           if (this.transfers.length > 15) {
  //               this.transfers.pop();
  //           }
  //           if (event) {
  //               this.transfers.unshift({
  //                   address: event.returnValues._from,
  //                   address2: event.returnValues._to,
  //                   address_short: shortAddress(event.returnValues._from),
  //                   address_short2: shortAddress(event.returnValues._to),
  //                   amount: formatAmount(parseFloat(event.returnValues._value.toString()) / 10 ** 18),
  //                   tx: event.transactionHash,
  //                   block: event.blockNumber
  //               });
  //           }
  //       }
  //   );
  //   this.winners = [];
  //   const reparter2 = getToken(readWeb3());
  //   reparter2.events.Winner({
  //           fromBlock: 8617285
  //       },
  //        (error, event) => {
  //           if (this.winners.length > 15) {
  //               this.winners.pop();
  //           }
  //           if (event) {
  //               this.winners.unshift({
  //                   winaddress: event.returnValues._addr,
  //                   winaddress_short: shortAddress(event.returnValues._addr),
  //                   winamount: formatAmount(parseFloat(event.returnValues._value.toString()) / 10 ** 18),
  //                   wintx: event.transactionHash,
  //                   winblock: event.blockNumber
  //               });
  //           }
  //       }
  //   );

  //   this.joinheap = [];
  //   const reparter3 = getHeap(readWeb3());
  //   reparter3.events.JoinHeap({
  //           fromBlock: 8617285
  //       },
  //        (error, event) => {
  //           if (this.joinheap.length > 20) {
  //               this.joinheap.pop();
  //           }
  //           if (event) {
  //               this.joinheap.unshift({
  //                   joinaddress: event.returnValues._address,
  //                   joinaddress_short: shortAddress(event.returnValues._address),
  //                   joincurrent: formatAmount(parseFloat(event.returnValues._balance.toString()) / 10 ** 18),
  //                   joinprev: event.returnValues._prevSize,
  //                   jointx: event.transactionHash,
  //                   joinblock: event.blockNumber
  //               });
  //           }
  //       }
  //   );

    //     this.leaveheap = [];
    // const reparter4 = getHeap(readWeb3());
    // reparter4.events.LeaveHeap({
    //         fromBlock: 8617285
    //     },
    //      (error, event) => {
    //         if (this.leaveheap.length > 20) {
    //             this.leaveheap.pop();
    //         }
    //         if (event) {
    //             this.leaveheap.unshift({
    //                 leaveaddress: event.returnValues._address,
    //                 leaveaddress_short: shortAddress(event.returnValues._address),
    //                 leavecurrent: formatAmount(parseFloat(event.returnValues._balance.toString()) / 10 ** 18),
    //                 leaveprev: event.returnValues._prevSize,
    //                 leavetx: event.transactionHash,
    //                 leaveblock: event.blockNumber
    //             });
    //         }
    //     }
    // );
  }
}

</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>



/* Hot it works? */
.container{
    width: auto;
}
.my-auto{
    margin-top: auto;
    margin-bottom: auto;
}
.title{
    position: static;
    max-width: 731px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 60px;
    line-height: 93.19%;
    text-align: left;
    /* or 33px */

    display: flex;
    align-items: center;
    letter-spacing: -0.02em;

    color: #000000;
}

.description{
    position: static;
    font-family: Poppins;
    font-style: normal;
    font-weight: 200;
    font-size: 25px;
    text-align: left;
    /* or 18px */
    align-items: center;
    color: #000000;
}

.main{
    margin-top: 66px;
    margin-bottom: 66px;
}

@media screen and (max-width: 767px) {
    .margin-mobile {
        /* padding: 25px; */
        margin-left: 16px;
        margin-right: 16px;
    }
}


</style>

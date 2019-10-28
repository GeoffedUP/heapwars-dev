<template>
    <div class="content">
   <div class="w3-row-padding">
      <div class="w3-hover-shadow">
        <div class="w3-container w3-card-4 w3-green3 w3-round w3-padding-16">

<b-table-simple hover small caption-top responsive>
    <caption>Full Heap List</caption>
        <b-thead head-variant="dark">
        </b-thead>
    <b-tbody>
      <b-tr>
        <b-th><h5>Address</h5></b-th>
        <b-th class="text-right"><h5>Amount</h5></b-th>
      </b-tr>
       <b-tr class="w3-hover-green" v-for="item in fullHeap" v-bind:key="item.address">
        <b-td><b><font color="#c6e2cd" size="3">{{ item.heapaddress }}</font></b></b-td>
        <b-td class="text-right"><font color="#c6e2cd"></font><b><font color="#fffb00">{{ item.heapbalance }} SHUF</font></b></b-td>
      </b-tr>
          </b-tbody>
    <b-tfoot>
      <b-tr>
        <b-td colspan="2" class="text-right">
          Total: <b>512</b>
        </b-td>
      </b-tr>
    </b-tfoot>
  </b-table-simple>


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
  import { TablePlugin } from 'bootstrap-vue'


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
 }
}

</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>



.container{
    width: auto;
}
.w3-green {

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

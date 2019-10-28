<template>
    <div class="content">
   <div class="w3-row-padding">
      <div class="w3-hover-shadow">
        <div class="w3-container w3-card-4 w3-green3 w3-round w3-padding-16">

<b-table-simple hover small caption-top responsive>
    <caption>Latest Winners</caption>
        <b-thead head-variant="dark">
        </b-thead>
    <b-tbody>
      <b-tr>
        <b-th><h5>Address</h5></b-th>
        <b-th class="text-right"><h5>Amount</h5></b-th>
        <b-th class="text-right"><h5>Block</h5></b-th>
      </b-tr>
       <b-tr class="w3-hover-green" v-on:click="click_winner(item)" v-for="item in winners" v-bind:key="item.wintx">
       <b-td><font size="3"><font color="#00d812">Winner!</font></font><br><span><b><font color="#c6e2cd" size="3">{{ item.winaddress }}</font></b></span></b-td>
        <b-td class="text-right"><b><font color="#ffe600">{{ item.winamount }} SHUF</font></b></b-td>
        <b-td class="text-right"><b><font color="#ffffff">{{ item.winblock }}</font></b></b-td>
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
        winners: this.winners
    }
  },

  methods:{
      click_winner: function(item) {
        var redirectWindow = window.open(`https://etherscan.io/tx/${item.wintx}`, '_blank');
        redirectWindow.location;
      },
  },

created: async function() {
    this.winners = [];
    const reparter2 = getToken(readWeb3());
    reparter2.events.Winner({
            fromBlock: 8617285
        },
         (error, event) => {
            if (this.winners.length > 15) {
                this.winners.pop();
            }
            if (event) {
                this.winners.unshift({
                    winaddress: event.returnValues._addr,
                    winaddress_short: shortAddress(event.returnValues._addr),
                    winamount: formatAmount(parseFloat(event.returnValues._value.toString()) / 10 ** 18),
                    wintx: event.transactionHash,
                    winblock: event.blockNumber
                });
            }
        }
    );
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

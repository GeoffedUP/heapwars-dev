<template>
<!-- Navigation Bar -->

<nav>
    <div class="navbar navigation w3-card-4">
        <a href="./">
            <i class="fas fa-home" style="font-size:20px;color:#ffd000;"></i>&nbsp;&nbsp;Home</a>
        <a href="https://github.com/shufflemonster" target="_blank">
            <i class="fab fa-github-alt" style="font-size:20px;color:#ffd000;"></i>&nbsp;&nbsp;Github
        </a>
        <a href="https://medium.com/shufflemonster" target="_blank">

            <i class="fab fa-medium-m" style="font-size:20px;color:#ffd000;"></i>&nbsp;&nbsp;Medium</a>
       
        <a href="https://t.me/shuftoken" target="_blank">

            <i class="fab fa-telegram-plane" style="font-size:20px;color:#ffd000;"></i>&nbsp;&nbsp;Telegram</a>
      
        <a href="https://twitter.com/ShuffleToken" target="_blank"><i class="fab fa-twitter" style="font-size:20px;color:#ffd000;"></i>&nbsp;&nbsp;Twitter</a>
       
        <a href="https://www.reddit.com/r/ShuffleMonster/" target="_blank">

            <i class="fab fa-reddit-alien" style="font-size:20px;color:#ffd000;"></i>&nbsp;&nbsp;Reddit</a>
    </div>
</nav>
</template>

<script>
import { getToken, readWeb3 } from '../web3.js';

export default {
  name: 'Navbar',
  data: function(){
      return {
          airdrop_restarted: this.airdrop_restarted,
          top_pos: this.top_pos
        };
  },
  created: async function() {
        this.top_pos = "...";
        const token = getToken(readWeb3());
        const result = await token.methods.heapTop().call();
        this.top_pos = (result[1] / 10 ** 18).toFixed(0);
  },
  methods: {
    open_uniswap: function() {
        var redirectWindow = window.open(`https://uniswap.exchange/swap/0x3a9fff453d50d4ac52a6890647b823379ba36b9e`, '_blank');
        redirectWindow.location;
    },
    open_bamboo: function() {
        var redirectWindow = window.open(`https://bamboorelay.com/trade/SHUF2-WETH`, '_blank');
        redirectWindow.location;
    },
    open_telegram: function() {
        var redirectWindow = window.open(`https://t.me/shuftoken`, '_blank');
        redirectWindow.location;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>



</style>

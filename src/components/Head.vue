
<template>
<div class="header">
    <a class="logo" href="./">
        
        <p>
        <transition v-on:appear="animate_glow">
          <div class="card-glow">
<img class="card-glow" height="95" src="../assets/spinning-eye-big.gif" />
          </div>
        </transition>
        </p>
      
        <span class="logo" align="right">
            <font style="font-size: 30px; color: #ffffff; font-weight: 600;">
                Stats.Shuffle.Monster
            </font>
            <br />
            <font style="font-size: 20px; font-weight: 600;">Heap Tracker & Token Stats
            </font>
        </span>
    </a>
</div>
</template>

<script>


const animate_times = 120;

function random(min, max) {
  return (Math.random() * (max - min)) + min;
}

export default {
  name: 'Head',
  methods: {
    animate_glow: function(el) {
      // const animate_glow = this.animate_glow;
      for (let i = 0; i < animate_times; i++) {
        el.velocity({opacity: random(0.5, 1)}, {
          duration: random(250, 1000),
        });
      }
    },
    animate_eye: function(el) {
      var pos = 'rotateZ(0deg)';
      for (let i = 0; i < animate_times; i++) {
        var new_pos = "rotateZ("+random(0, 360)+"deg)"
        el.velocity({transform: [new_pos, pos]}, {
          delay: random(0, 5000),
          duration: random(250, 3000)
        })
        pos = new_pos;
      }
    }
  }
}

</script>

<style scoped>


</style>

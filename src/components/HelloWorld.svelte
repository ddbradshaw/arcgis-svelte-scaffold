<script lang="ts">
  import { zoomTo } from '../Map';

  function handleClick() {
    zoomTo([-83.04691283484665, 42.33458564083483]);
  }
</script>

<div class="hello">
  hello world <button on:click={handleClick}>zoom</button>
</div>

<style>
  .hello {
    position: absolute;
    z-index: 1000;
    padding: 20px;
    bottom: 40px;
    left: 20px;
    background: white;
  }
</style>

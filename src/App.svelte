<script lang="ts">
  import MapView from './components/MapView.svelte';
  import HelloWorld from './components/HelloWorld.svelte';
</script>

<MapView />
<HelloWorld />

<style>
  :global(body) {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    font-family: Arial, Helvetica, sans-serif;
  }
</style>

<script lang="ts">
  import { onMount } from 'svelte';
  import { initialize } from '../Map';

  onMount(() => {
    initialize('map');
  });
</script>

<div id="map" />

<style>
  #map {
    position: absolute;
    width: 100%;
    height: 100%;
  }
</style>

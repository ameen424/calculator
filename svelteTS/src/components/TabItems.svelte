<script lang="ts">
  import { getContext, onMount } from "svelte";
  const { setTabItem } = getContext("Tab");

  let panel;

  export let label;
  onMount(() => {
    setTabItem(label, panel);
  });
</script>

<div bind:this={panel} style="width:100%; height:100%;">
  <slot />
</div>

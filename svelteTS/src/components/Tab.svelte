<script lang="ts">
  import { setContext } from "svelte";

  let tabs = [];
  setContext("Tab", {
    setTabItem: (label, tab) => {
      if (tabs.length != 0) {
        tab.style.display = "none";
      }
      tabs = tabs.concat([{ label, elem: tab, active: tabs.length == 0 }]);
    },
  });

  let click = (index) => {
    tabs.forEach((t, i) => {
      t.elem.style.display = "none";
      t.active = index == i;
    });
    tabs[index].elem.style.display = "block";
  };
</script>

<div style="display: flex; height:100%; flex-direction: column;">
  <ul>
    {#each tabs as tab, i}
      <li class={tab.active ? "active" : ""}>
        <span on:click={() => click(i)}>{tab.label}</span>
      </li>
    {/each}
  </ul>

  <div class="box">
    <slot />
  </div>
</div>

<style>
  .box {
    padding: 10px;
    border: 1px solid #dee2e6;
    border-radius: 0 0 0.5rem 0.5rem;
    border-top: 0;
    background-color: #fff;
    flex: 1;
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
    border-bottom: 1px solid #dee2e6;
  }
  li {
    margin-bottom: -1px;
  }

  span {
    border: 1px solid transparent;
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
    display: block;
    padding: 0.5rem 1rem;
    cursor: pointer;
  }

  span:hover {
    border-color: #e9ecef #e9ecef #dee2e6;
  }

  li.active > span {
    color: #495057;
    background-color: #fff;
    border-color: #dee2e6 #dee2e6 #fff;
  }
</style>

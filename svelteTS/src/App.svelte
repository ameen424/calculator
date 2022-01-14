<script lang="ts">
  // import Scoreboard from "./components/Scoreboard.svelte";
  // import Apifetch from "./components/Apifetch.svelte";
  // import Table from "./components/Table.svelte";
  // import Insert from "./components/Insert.svelte";
  // import Git from "./components/Git.svelte";
  // import Sort from "./components/Sort.svelte";
  // import Post from "./components/Post.svelte";
  import Fetch from "./components/Fetch.svelte";
  import Post from "./components/Post.svelte";
  import Put from "./components/Put.svelte";
  import Delete from "./components/Delete.svelte";
  import Tab from "./components/Tab.svelte";
  import TabItems from "./components/TabItems.svelte";
</script>

<main>
  <h1>HTTP REQUEST</h1>
  <Tab>
    <TabItems label="FETCH">
      <Fetch />
    </TabItems>
    <TabItems label="POST">
      <Post />
    </TabItems>
    <TabItems label="PUT">
      <Put />
    </TabItems>
    <TabItems label="DELETE">
      <Delete />
    </TabItems>
  </Tab>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: auto;
    margin: 0 auto;
  }
</style>

<script lang="ts">
  let loading: boolean = false;
  let data: Array<{ id: number; title: string; body: string; userId: number }> =
    [];
  let id: number;
  let title: string;

  const loadData = async () => {
    loading = true;
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    data = await response.json();

    /*
        making async api call to get the data
      */
    if (response.ok) {
      loading = false;
    } else {
      console.log("Error occured while loading");
    }
  };
</script>

<main>
  <input bind:value={id} placeholder="Enter Id" />
  <input bind:value={title} placeholder="Enter Title " />
  <br />

  <button
    on:click={() => {
      data = [...data, { userId: 1, id: id, title: title, body: "" }];
      //   spread operator
    }}>Add</button
  >
  <br />

  <button on:click={loadData}>Load Data</button>

  <table>
    {#if loading === true}
      Loading...
    {:else}
      <tr>
        <td>Id</td>
        <td>Title</td>
      </tr>
      {#each data as item}
        <tr>
          <td>{item.id}</td>
          <td>{item.title.toUpperCase()}</td>
          <br />
        </tr>
      {/each}
    {/if}
  </table>
</main>

<style>
  main {
    color: rgb(19, 105, 139);
  }
</style>

<script>
  let loading = false;
  let todos = "";

  const loadData = async () => {
    loading = true;
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    todos = await response.json();

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
  <button on:click={loadData}>Load Data</button>

  <table>
    {#if loading === true}
      Loading...
    {:else}
      <tr>
        <td>Id</td>
        <td>Title</td>
      </tr>
      {#each todos as item}
        <tr>
          <td>{item.id}</td>
          <td>{item.title.toUpperCase()}</td>
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

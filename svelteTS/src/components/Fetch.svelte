<script lang="ts">
  let file: boolean = false;
  let displaydata: boolean = false;
  let getdata: any = "";
  let API: string;

  const loadData = async () => {
    file = true;
    const res = await fetch(API);
    getdata = await res.json();
    if (res.ok) {
      file = false;
    } else {
      alert("Error occured while loading the file");
    }
  };
</script>

<input bind:value={API} placeholder="Enter Api" /> <br />

<button
  class="button"
  on:click={() => {
    loadData();
    displaydata = true;
  }}>Fetch Data</button
>

<div class="container">
  <table>
    {#if file === true}
      Loading...
    {:else if displaydata === true}
      <tr>
        <td>Id</td>
        <td>Title</td>
        <td>Body</td>
      </tr>
      {#each getdata as user}
        <tr>
          <td>{user.id}</td>
          <td>{user.title}</td>
          <td>{user.body}</td>
        </tr>
      {/each}
    {/if}
  </table>
</div>

<style>
  .container {
    max-width: auto;
  }

  .button {
    color: white;
    background-color: black;
  }
</style>

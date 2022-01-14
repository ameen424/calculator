<script lang="ts">
  let loadfile: boolean = false;
  let getdata: any = "";
  let API: string = "";
  let id: number;
  let login: string;

  const loadData = async () => {
    loadfile = true;
    const res = await fetch(API);
    getdata = await res.json();
    if (res.ok) {
      loadfile = false;
    } else {
      console.log("Error occured while loading the file");
    }
  };
</script>

<main>
  <h4>Enter URL</h4>
  <input bind:value={API} placeholder="Enter Api " /> <br /> <br />
  <input bind:value={id} placeholder="Enter Id" /> <br />
  <input bind:value={login} placeholder="Enter Login " />
  <br />

  <button
    on:click={() => {
      getdata = [...getdata, { id: id, login: login }];
    }}>Add</button
  >
  <br />

  <button on:click={loadData}>Get Data</button>

  <table>
    {#if loadfile === true}
      Loading...
    {:else}
      <tr>
        <td>Id</td>
        <td>Login</td>
        <td>Image</td>
      </tr>
      {#each getdata as user}
        <tr>
          <td>{user.id}</td>
          <td>{user.login.toUpperCase()}</td>
          <img class="ims" src={user.avatar_url} alt="Not found" />
        </tr>
      {/each}
    {/if}
  </table>
</main>

<style>
  main {
    color: rgb(158, 6, 229, 0.7);
    text-align: center;
  }
  .ims {
    max-width: 50%;
    height: fit-content;
  }
</style>

<script lang="ts">
  let loadfile: boolean = false;
  let getdata = [];
  let API: string = "https://api.github.com/users";
  let id: number;
  let login: string;
  let sorteddata = [];

  function compare(a, b) {
    let A = a.login.toUpperCase();
    let B = b.login.toUpperCase();
    if (A < B) {
      return -1;
    }
    if (A > B) {
      return 1;
    }
    return 0;
  }

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
  $: sorteddata = getdata;
</script>

<main>
  <input bind:value={id} placeholder="Enter Id" />
  <input bind:value={login} placeholder="Enter Login " />
  <br />

  <button
    on:click={() => {
      getdata = [...getdata, { id: id, login: login }];
      getdata.sort(compare);
    }}>Add</button
  >
  <br />
  <button
    on:click={() => {
      sorteddata = getdata.sort(compare);
    }}>Sort</button
  >

  <button
    on:click={() => {
      loadData();
    }}>Get Data</button
  >

  <table>
    {#if loadfile === true}
      Loading...
    {:else}
      <tr>
        <td>Id</td>
        <td>Login</td>
        <td>Image</td>
      </tr>
      {#each sorteddata as user}
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

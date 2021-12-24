<script>
  let file = false;
  let getdata = "";
  let API = "https://api.github.com/users";

  const loadData = async () => {
    file = true;
    const res = await fetch(API);
    getdata = await res.json();
    if (res.ok) {
      file = false;
    } else {
      console.log("Error occured while loading the file");
    }
  };
</script>

<main>
  <button on:click={loadData}>Get Data</button>

  <table>
    {#if file === true}
      Loading...
    {:else}
      <tr>
        <td>Id</td>
        <td>Login</td>
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

<script lang="ts">
  let result: any = "";
  let Id: number;
  //   let jsondata: { Id: number; title: string; body: string } = {
  //     Id,
  //     title: "",
  //     body: "",
  //   };

  async function Delete() {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${Id}`,
      {
        method: "DELETE",
      }
    );

    const json = await res.json();
    result = JSON.stringify(json);
  }
</script>

<h2>DELETE METHOD</h2>

<input bind:value={Id} placeholder="Enter Id" /><br />

<br />
<button
  class="button"
  type="button"
  on:click={() => {
    Delete();
  }}
>
  Delete
</button>
<p style="font-weight : bold">Result:</p>
<pre style="font-size :large">
  {result}
  </pre>

<style>
  .button {
    color: white;
    background-color: green;
  }
</style>

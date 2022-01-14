<script lang="ts">
  let Title: string;
  let Body: string;
  let result: any = "";
  let Id: number;
  let jsondata: { Id: number; title: string; body: string } = {
    Id,
    title: "",
    body: "",
  };

  async function doPut() {
    jsondata.Id = Id;
    jsondata.title = Title;
    jsondata.body = Body;
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${Id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          jsondata,
        }),
      }
    );

    const json = await res.json();
    result = JSON.stringify(json);
  }
</script>

<h2>PUT METHOD</h2>

<input bind:value={Id} placeholder="Enter Id" /><br />
<input bind:value={Title} placeholder="Enter Name" /><br />
<input bind:value={Body} placeholder="Enter Body" />
<br />
<button
  class="button"
  type="button"
  on:click={() => {
    doPut();
  }}
>
  Put
</button>
<br />
<p style="font-weight : bold">Result:</p>
<pre style="font-size:large">
{result}
</pre>

<style>
  .button {
    color: white;
    background-color: green;
  }
</style>

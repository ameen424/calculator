<script lang="ts">
  let Title: string;
  let Body: string;
  let result: any = "";
  let jsondata: { title: string; body: string } = { title: "", body: "" };

  async function doPost() {
    jsondata.title = Title;
    jsondata.body = Body;
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(jsondata),
    });

    const json = await res.json();
    result = JSON.stringify(json);
  }
</script>

<h2>POST METHOD</h2>
<button
  class="button"
  type="button"
  on:click={() => {
    doPost();
  }}
>
  Post it
</button>
<br />
<input bind:value={Title} placeholder="Enter Name" /><br />
<input bind:value={Body} placeholder="Enter Body" />
<p style="font-weight : bold">Result:</p>
<pre style="font-size:large">
{result}
</pre>

<style>
  .button {
    color: white;
    background-color: blue;
  }
</style>

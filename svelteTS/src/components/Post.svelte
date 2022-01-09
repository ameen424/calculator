<script lang="ts">
  let foo;
  let bar;
  let result = "";

  async function doPost() {
    const res = await fetch("https://httpbin.org/post", {
      method: "POST",
      body: JSON.stringify({
        foo,
        bar,
      }),
    });

    const json = await res.json();
    result = JSON.stringify(json);
  }
</script>

<input bind:value={foo} />
<input bind:value={bar} />
<br />
<button type="button" on:click={doPost}> Post it. </button>
<p>Result:</p>
<pre>
{result}
</pre>

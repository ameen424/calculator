<script>
  import UploadCSV from "upload-csv-svelte";

  let index = 0;

  function sortByColumn(a, colIndex) {
    a.sort(sortFunction);

    function sortFunction(a, b) {
      if (a[colIndex] === b[colIndex]) {
        return 0;
      } else {
        return a[colIndex] < b[colIndex] ? -1 : 1; // terinary operator
      }
    }

    return a;
  }

  let data;
  let header;
</script>

<UploadCSV
  onUpload={(file) => {
    console.log("this is the parsed file: ", file);
    header = file[0];
    file.shift();
    data = file;
  }}
/>

{#if data}
  <select
    name="sort"
    bind:value={index}
    on:change={() => {
      data = sortByColumn(data, header.indexOf(index));
    }}
  >
    {#each header as head}
      <option value={head}>{head}</option>
    {/each}
  </select>
  <table class="tabh">
    <tr>
      {#each header as head}
        <td>{head}</td>
      {/each}
    </tr>
    {#each data as rows}
      <tr>
        {#each rows as col}
          <td>{col}</td>
        {/each}
      </tr>
    {/each}
  </table>
{/if}

<style>
  .tabh {
    color: rgb(59, 59, 196);
  }
</style>

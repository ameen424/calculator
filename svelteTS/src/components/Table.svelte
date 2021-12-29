<script lang="ts">
  let columns: string[] = ["Name", "Email", "Phone Number"];
  let data: any = [
    ["John", "john@example.com", "(353) 01 222 3333"],
    ["Mark", "mark@gmail.com", "(01) 22 888 4444"],
    ["Eoin", "eoin@gmail.com", "0097 22 654 00033"],
    ["Sarah", "sarahcdd@gmail.com", "+322 876 1233"],
    ["Afshin", "afshin@mail.com", "(353) 22 87 8356"],
  ];

  let newRow: string[] = [...columns];

  function addRow() {
    data = [...data, [...newRow]];
    newRow = columns;
  }

  function deleteRow(rowToBeDeleted) {
    data = data.filter((row) => row != rowToBeDeleted);
  }
</script>

<table>
  <tr class="new">
    {#each newRow as column}
      <td contenteditable="true" bind:innerHTML={column} />
      <!-- contenteditable  it ststes that the specified element is  changeable or not editable -->
    {/each}
    <button on:click={addRow}> add </button>
  </tr>
  <br />
  <tr>
    {#each columns as column}
      <th>{column}</th>
    {/each}
  </tr>

  {#each data as row}
    <tr>
      {#each row as cell}
        <td contenteditable="true" bind:innerHTML={cell} />
      {/each}
      <button on:click={() => deleteRow(row)}> X </button>
    </tr>
  {/each}
</table>

<style>
  .new {
    color: grey;
  }
  .new td:focus {
    color: black;
  }
</style>

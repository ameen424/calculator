<script>
  import { personData } from "./personData.js";

  let sortedPersonData = personData;
  const tableHeaders = Object.keys(personData[0]);

  let selectecHeader = "id";

  const sortByNumber = (tableHeader) => {
    sortedPersonData = sortedPersonData.sort((obj1, obj2) => {
      return obj1[tableHeader] - obj2[tableHeader];
    });
    selectecHeader = tableHeader;
  };

  const sortByString = (tableHeader) => {
    sortedPersonData = sortedPersonData.sort((obj1, obj2) => {
      if (obj1[tableHeader] < obj2[tableHeader]) {
        return -1;
      } else if (obj1[tableHeader] > obj2[tableHeader]) {
        return 1;
      }
      return 0;
    });

    selectecHeader = tableHeader;
  };
</script>

<table id="myTable">
  <tr>
    {#each tableHeaders as header}
      <th
        class:highlighted={selectecHeader === header}
        on:click={() =>
          header === "id" || header === "age"
            ? sortByNumber(header)
            : sortByString(header)}
        >{header.replace("_", " ")}
      </th>
    {/each}
  </tr>

  {#each sortedPersonData as person}
    <tr>
      <td>{person.id}</td>
      <td>{person.first_name}</td>
      <td>{person.last_name}</td>
      <td>{person.age}</td>
      <td>{person.job_title}</td>
      <td>{person.country}</td>
    </tr>
  {/each}
</table>

<style>
  table {
    border-spacing: 0;
    width: 100%;
    border: 1px solid #ddd;
  }
  th {
    text-transform: uppercase;
    cursor: pointer;
  }
  .highlighted {
    color: rgb(51, 170, 218);
  }

  th,
  td {
    text-align: left;
    padding: 16px;
  }

  tr:nth-child(even) {
    background-color: #f2f2f2;
  }
</style>

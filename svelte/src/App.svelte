<script>
  import Csvreader from "./components/Csvreader.svelte";
  // import Table from "./components/Table.svelte";
  // import Form from "./components/Form.svelte";

  // let id ;
  // let name ='';
  // let price = 5;

  // function edit(event){
  // 	({id, name, price } = event.detail);
  // }
</script>

<main>
  <!-- <h1>Product Details</h1>
	<Form bind:price bind:id bind:name/>

	<Table  on:edit={edit}/> -->
  <h1>CSV Reader</h1>
  <Csvreader />
</main>

<style>
  main {
    flex: 1;
    align-content: center;
    justify-content: center;
    width: 80%;
    margin: 0 auto;
  }
</style>

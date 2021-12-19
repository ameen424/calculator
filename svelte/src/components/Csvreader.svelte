<script>
import UploadCSV from 'upload-csv-svelte';


let data ;
// $: config = {
//     init: {
//         name: 'file.name',
//         keys:[...data[0]],
//         index:data[0][0],
//         data:data
//     },
//     features: {
//         sortable: {
//             key: data[0][0]
//         }
//     }
// }


</script>


<UploadCSV onUpload={(file) => {console.log("this is the parsed file: ", file);data = file} }/>
    {#if data}
        <table class="tabh">
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
    .tabh{
        color: rgb(59, 59, 196);
    }
</style>
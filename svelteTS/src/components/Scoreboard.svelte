<script lang="ts">
  import Player from "./Player.svelte";
  import Add from "./Add.svelte";

  let players: any[] = [
    {
      name: "John",
      points: 53,
    },
    {
      name: "Smith",
      points: 45,
    },
    {
      name: "Sara",
      points: 34,
    },
    {
      name: "Mosh",
      points: 85,
    },
  ];

  const addPlayer = (e) => {
    const newPlayer = e.detail;
    players = [...players, newPlayer];
  };

  const removePlayer = (e) => {
    players = players.filter((player) => player.name !== e.detail);
  };
</script>

<div class="container">
  <Add on:addplayer={addPlayer} />
  {#if players.length === 0}
    <p>No Players</p>
  {:else}
    {#each players as player}
      <Player
        name={player.name}
        points={player.points}
        on:removeplayer={removePlayer}
      />
    {/each}
  {/if}
</div>

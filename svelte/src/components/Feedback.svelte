<script>
  let data = [
    {
      id: 1,
      name: "jack",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio animi nisi enim ratione dolore, quis reprehenderit, fugiat quam veritatis amet ipsa? Perferendis sunt tenetur eligendi quaerat aspernatur id rerum quasi sed error est soluta libero rem quibusdam, placeat ab officia eum non nesciunt nobis mollitia dolore similique sint? Quasi, sequi.",
    },
    {
      id: 2,
      name: "smith",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio animi nisi enim ratione dolore, quis reprehenderit, fugiat quam veritatis amet ipsa? Perferendis sunt tenetur eligendi quaerat aspernatur id rerum quasi sed error est soluta libero rem quibusdam, placeat ab officia eum non nesciunt nobis mollitia dolore similique sint? Quasi, sequi.",
    },
    {
      id: 3,
      name: "vinod",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio animi nisi enim ratione dolore, quis reprehenderit, fugiat quam veritatis amet ipsa? Perferendis sunt tenetur eligendi quaerat aspernatur id rerum quasi sed error est soluta libero rem quibusdam, placeat ab officia eum non nesciunt nobis mollitia dolore similique sint? Quasi, sequi.",
    },
  ];
</script>

<div class="feedback">
  {#each data as d}
    <div>
      <br /> <span class="as">{d.id}</span> <span class="am">{d.name}</span>
    </div>
    <div>
      <br />
      {d.text} <br />
    </div>
  {/each}
</div>

<style>
  .feedback {
    font-size: larger;
    color: #fff;
    border-radius: 10px;
  }

  .am {
    font-size: larger;
    font-weight: bold;
    margin-left: 10px;
  }

  .as {
    font-size: larger;
  }
</style>

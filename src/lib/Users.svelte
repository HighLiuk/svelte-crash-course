<script>
  import user1 from "../assets/img/user1.png"
  import user2 from "../assets/img/user2.png"
  import user3 from "../assets/img/user3.png"

  let users = [
    {
      image: user1,
      name: "John",
      email: "john@bitfumes.com",
    },
    {
      image: user2,
      name: "Jeni",
      email: "jenie@bitfumes.com",
    },
    {
      image: user3,
      name: "Hacker",
      email: "hacker@bitfumes.com",
    },
  ]
</script>

<div>
  <h1>List of Users</h1>

  {#each users as user}
    <div>
      <img src={user.image} alt={user.name} />

      <p>{user.name}</p>

      <p>{user.email}</p>
    </div>
  {/each}
</div>

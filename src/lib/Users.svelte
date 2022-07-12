<script>
  import user1 from "../assets/img/user1.png"
  import user2 from "../assets/img/user2.png"
  import user3 from "../assets/img/user3.png"
  import User from "./User.svelte"

  const getUsers = () => [
    {
      id: 1,
      image: user1,
      name: "John",
      email: "john@bitfumes.com",
    },
    {
      id: 2,
      image: user2,
      name: "Jeni",
      email: "jenie@bitfumes.com",
    },
    {
      id: 3,
      image: user3,
      name: "Hacker",
      email: "hacker@bitfumes.com",
    },
  ]
</script>

<div>
  <h1 class="text-2xl text-center mt-10">List of Users</h1>

  {#each getUsers() as user, i (user.id)}
    <User {user} {i} />
  {:else}
    <p>No users found</p>
  {/each}
</div>

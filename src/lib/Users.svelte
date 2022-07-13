<script>
  import user1 from "../assets/img/user1.png"
  import user2 from "../assets/img/user2.png"
  import user3 from "../assets/img/user3.png"
  import FilterUser from "./FilterUser.svelte"
  import User from "./User.svelte"

  let users = [
    {
      id: 1,
      image: user1,
      name: "John",
      email: "john@bitfumes.com",
      active: true,
    },
    {
      id: 2,
      image: user2,
      name: "Jeni",
      email: "jenie@bitfumes.com",
      active: true,
    },
    {
      id: 3,
      image: user3,
      name: "Hacker",
      email: "hacker@bitfumes.com",
      active: false,
    },
  ]

  $: filteredUsers = users

  const filter = ({ detail }) => {
    if (detail === "all") {
      filteredUsers = users
      return
    }

    filteredUsers = users.filter(
      (user) => user.active === (detail === "active")
    )
  }

  const remove = ({ detail }) => {
    users = users.filter((user) => user.id !== detail)
  }
</script>

<div>
  <h1 class="text-2xl text-center mt-10">List of Users</h1>

  <FilterUser on:filter={filter} />

  {#each filteredUsers as user, i (user.id)}
    <User {user} {i} on:remove={remove} />
  {:else}
    <p>No users found</p>
  {/each}
</div>

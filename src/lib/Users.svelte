<script>
  import user1 from "../assets/img/user1.png"
  import user2 from "../assets/img/user2.png"
  import user3 from "../assets/img/user3.png"
  import FilterUser from "./FilterUser.svelte"
  import NewUser from "./NewUser.svelte"
  import User from "./User.svelte"

  let status = "all"
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

  $: filteredUsers =
    status === "all"
      ? users
      : users.filter((user) => user.active === (status === "active"))

  const filter = ({ detail }) => (status = detail)

  const remove = ({ detail }) => {
    users = users.filter((user) => user.id !== detail)
  }

  const add = ({ detail }) => {
    const user = {
      ...detail,
      id: users.length + 1,
      image: user1,
    }

    users = [...users, user]
  }
</script>

<div class="container mx-auto">
  <h1 class="text-2xl text-center mt-10">List of Users</h1>

  <div class="flex justify-between items-center mx-4">
    <FilterUser on:filter={filter} />

    <NewUser on:newUser={add} />
  </div>

  {#each filteredUsers as user, i (user.id)}
    <User {user} {i} on:remove={remove} />
  {:else}
    <p>No users found</p>
  {/each}
</div>

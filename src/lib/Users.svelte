<script>
  import user1 from "../assets/img/user1.png"
  import user2 from "../assets/img/user2.png"
  import user3 from "../assets/img/user3.png"
  import User from "./User.svelte"

  const users = [
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

  let filteredUsers = users

  const filter = (e) => {
    const status = e.target.value

    if (status === "all") {
      filteredUsers = users
      return
    }

    filteredUsers = users.filter(
      (user) => user.active === (status === "active")
    )
  }
</script>

<div>
  <h1 class="text-2xl text-center mt-10">List of Users</h1>

  <div class="ml-4 mt-4">
    <label for="user-filter">Filter User</label>

    <select
      on:change={filter}
      class="ml-4 py-2 px-4 border rounded-lg cursor-pointer"
      name="user-filter"
      id="user-filter"
    >
      <option value="all">All</option>
      <option value="active">Active</option>
      <option value="inactive">Inactive</option>
    </select>
  </div>

  {#each filteredUsers as user, i (user.id)}
    <User {user} {i} />
  {:else}
    <p>No users found</p>
  {/each}
</div>

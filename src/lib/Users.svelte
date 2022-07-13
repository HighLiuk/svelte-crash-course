<script>
  import user1 from "../assets/img/user1.png"
  import FilterUser from "./FilterUser.svelte"
  import NewUser from "./NewUser.svelte"
  import User from "./User.svelte"
  import { users } from "../store"

  let status = "all"

  $: filteredUsers =
    status === "all"
      ? $users
      : $users.filter((user) => user.active === (status === "active"))

  const filter = ({ detail }) => (status = detail)

  const remove = ({ detail }) => {
    $users = $users.filter((user) => user.id !== detail)
  }

  const add = ({ detail }) => {
    const user = {
      ...detail,
      id: $users.length + 1,
      image: user1,
    }

    $users = [...$users, user]
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

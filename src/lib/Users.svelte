<script>
  import { cubicOut } from "svelte/easing"
  import { tweened } from "svelte/motion"
  import FilterUser from "./FilterUser.svelte"
  import NewUser from "./NewUser.svelte"
  import User from "./User.svelte"
  import { add, remove, users } from "../store"
  import { onMount } from "svelte"

  let status = "all"

  $: filteredUsers =
    status === "all"
      ? $users
      : $users.filter((user) => user.active === (status === "active"))

  const filter = ({ detail }) => (status = detail)

  const progress = tweened(0, { easing: cubicOut, duration: 1000 })

  onMount(() => progress.set(filteredUsers.length))
</script>

<div class="container mx-auto">
  <h1 class="text-2xl text-center mt-10">List of Users</h1>

  <div class="flex justify-between items-center mx-4">
    <FilterUser on:filter={filter} />

    <NewUser on:newUser={add} />
  </div>

  <progress class="w-11/12 mx-auto block" min="0" max="10" value={$progress} />

  {#each filteredUsers as user, i (user.id)}
    <User {user} {i} on:remove={remove} />
  {:else}
    <p>No users found</p>
  {/each}
</div>

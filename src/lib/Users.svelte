<script>
  import user1 from "../assets/img/user1.png"
  import user2 from "../assets/img/user2.png"
  import user3 from "../assets/img/user3.png"

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

  {#each getUsers() as { name, email, image, id }, i (id)}
    <div
      class="flex m-5 bg-white border p-2 rounded-lg shadow-md hover:shadow-lg cursor-pointer items-center"
    >
      <p class="w-10">{i + 1}</p>

      <img class="rounded-full w-16 h-16 mx-4" src={image} alt={name} />

      <p class="mx-4 w-20">{name}</p>

      <p class="mx-4 w-20">{email}</p>
    </div>
  {:else}
    <p>No users found</p>
  {/each}
</div>

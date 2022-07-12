<script>
  import user1 from "../assets/img/user1.png"
  import user2 from "../assets/img/user2.png"
  import user3 from "../assets/img/user3.png"

  let users = [
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
  <h1>List of Users</h1>

  {#each users as { name, email, image, id }, i (id)}
    <div>
      <p>{i + 1}</p>

      <img src={image} alt={name} />

      <p>{name}</p>

      <p>{email}</p>
    </div>
  {/each}
</div>

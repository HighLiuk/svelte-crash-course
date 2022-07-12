<script>
  let users = [
    {
      image: "https://cdn-icons-png.flaticon.com/128/3135/3135715.png",
      name: "John",
      email: "john@bitfumes.com",
    },
    {
      image:
        "https://cdn-icons.flaticon.com/png/128/706/premium/706807.png?token=exp=1657639948~hmac=2a867069d486825adc49f9752090597c",
      name: "Jeni",
      email: "jenie@bitfumes.com",
    },
    {
      image:
        "https://cdn-icons.flaticon.com/png/128/924/premium/924915.png?token=exp=1657639948~hmac=e807472a9f41cbe68e74df75bee68207",
      name: "Hacker",
      email: "hacker@bitfumes.com",
    },
  ]
</script>

<div>
  <h1>List of Users</h1>

  <div>
    <img src={users[0].image} alt={users[0].name} />

    <p>{users[0].name}</p>

    <p>{users[0].email}</p>
  </div>

  <div>
    <img src={users[1].image} alt={users[1].name} />

    <p>{users[1].name}</p>

    <p>{users[1].email}</p>
  </div>

  <div>
    <img src={users[2].image} alt={users[2].name} />

    <p>{users[2].name}</p>

    <p>{users[2].email}</p>
  </div>
</div>

import { useState } from "react"

const ListRander = () => {
    const [list] = useState(["Renan", "Mateheus", "Gustavo", "Jorge"]);

    const [users, setUsers] = useState([
        {id: 1, name: "Matheus", idade: 28},
        {id: 2, name: "Gustavo", idade: 44},
        {id: 3, name: "Maikon", idade: 67},
    ]);

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4);

        setUsers((prevUsers) => {
            return prevUsers.filter((user) => randomNumber !== user.id)
        });
    }

  return (
    <div>
        <ul>
        {list.map((item, i) => (
            <li key={i}>{item}</li>
        ))}
        </ul>

        <ul>
        {users.map((user) => (
                <li key={user.id}>{user.name} - {user.idade}</li>
            ))}
        </ul>

        <button onClick={deleteRandom}> Delete Random User</button>
    </div>
  )
}

export default ListRander
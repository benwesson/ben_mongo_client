import { useEffect,useState } from 'react'
import axios from 'axios'



export function App() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3000/api/users')
    .then(users => setUsers(users.data))
    .catch(err =>  console.log(err))

  },[])
  return (
    <div>
      <table>
          <thread>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Gender</th>
            </tr>
          </thread>
          <tbody>
            {
              users.map(user => {
                return <tr>
                  <td>{user.first_name}</td>
                  <td>{user.last_name}</td>
                  <td>{user.gender}</td>
                </tr>
              })
            }
          </tbody>
      </table>


    </div>
  )

}

import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8081/usuarios")
      .then((res) => res.json())
      .then((data) => setUserData(data))
      .then((data) => console.log(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="__userTable">
      <table>
        <thead>
          <th>ID</th>
          <th>Nome</th>
          <th>Email</th>
          <th>Senha</th>
        </thead>
        <tbody>
          {userData.map((data, i) => (
            <tr key={i}>
              <td>{data.id_usuario}</td>
              <td>{data.nome_usuario}</td>
              <td>{data.email_usuario}</td>
              <td>{data.senha_usuario}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;

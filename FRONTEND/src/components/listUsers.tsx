import { useEffect, useState } from "react";

interface userData {
  id_usuario: number;
  nome_usuario: string;
  email_usuario: string;
  senha_usuario: string;
}

// App page
const ListUsers = () => {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8081/users")
      .then((res) => res.json())
      .then((data) => setUserData(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="__user--table">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Senha</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((data: userData, i: number) => (
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
};

export default ListUsers;

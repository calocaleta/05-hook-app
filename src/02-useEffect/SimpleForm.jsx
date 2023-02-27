import { useEffect, useState } from "react"

export const SimpleForm = () => {

  const [formState, setFormState] = useState({
    username: 'strider',
    email: 'fernando@google.com'
  });

  const { username, email } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value
    });
  }

  useEffect(() => {
    alert('Use effect called');
  });

  return (
    <>
      <h1>Simple Form</h1>
      <hr />
      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />

      <input
        type="text"
        className="form-control mt-2"
        placeholder="cgarcia@stsac.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />

    </>
  )
}
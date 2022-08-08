import { useParams } from "react-router-dom";
import { Navigate, useNavigate, Route, Routes } from "react-router-dom";

//Navigate = redirect

export default function Post() {
  const params = useParams();
  const status = 200;

  if (status === 404) {
    return <Navigate to="/notfound" />;
  }

  const onClick = () => {
    Navigate("/about");
  };

  return (
    <div>
      <h1>Post {params.id} </h1>
      <p>Name: {params.name} </p>
      <button onClick={onClick}>Click</button>
      <Routes>
        <Route path="/show" element={<h1>Hello World</h1>} />
      </Routes>
    </div>
  );
}

//it shows when you wanna show something in a specific route

import { VscBug, VscGlobe } from "react-icons/vsc";

export const Posts = () => {
  return (
    <button
      onClick={() => {
        fetch("https://jsonplaceholder.typicode.csom/posts")
          .then((response) => response.json())
          .then((data) => console.log(data))
          .catch((error) => console.error(error));
      }}
    >
      <VscBug /><VscGlobe />
      Traer Datos
    </button>
  );
};

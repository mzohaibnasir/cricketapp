// import axios from "axios";
// import React from "react";

// const baseURL =
//   "https://api.cricapi.com/v1/series?apikey=7d2dc5ae-9763-41fe-8f0d-00217c6a0d8f&offset=0";

// export default function App() {
//   const [post, setPost] = React.useState(null);

//   React.useEffect(() => {
//     axios.get(baseURL).then((response) => {
//       setPost(response.data);
//     });
//   }, []);

//   if (!post) return null;

//   return (
//     <div>
//       <h1>{post.title}</h1>
//       <p>{post.body}</p>
//     </div>
//   );
// }

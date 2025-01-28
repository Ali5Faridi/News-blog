

// import "./App.css";
// import Layout from "./Layout";
// import { Route, Routes } from "react-router-dom";
// import IndexPage from "./components/IndexPage";
// import LoginPage from "./components/LoginPage";
// import RegisterPage from "./components/RegisterPage";
// import CreatePost from "./components/CreatePost";
// import PostPage from "./components/PostPage";
// import EditPost from "./components/EditPost";

// function App() {
//   return (
//     <userContextProvider>
//       <Routes>
//       <Route path="/" element={<Layout />}>
//         <Route index element={<IndexPage />} />
//         <Route path="/login"element={<LoginPage />} />
//         <Route path="/register" element={<RegisterPage />} />
//         <Route path="create" element={<CreatePost />} />
//         <Route path="/post/:id" element={<PostPage/>} />
//         <Route path="/edit/:id" element= {<EditPost />} />
//       </Route>
//     </Routes>
//       </userContextProvider>

    
//   );
// }

// export default App;

import "./App.css";
import Layout from "./Layout";
import { Route, Routes } from "react-router-dom";
import IndexPage from "./components/IndexPage";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import CreatePost from "./components/CreatePost";
import PostPage from "./components/PostPage";
import EditPost from "./components/EditPost";
import { UserProvider } from "./UserContext"; // وارد کردن UserProvider

function App() {
  return (
    <UserProvider> {/* استفاده از UserProvider با U بزرگ */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="/post/:id" element={<PostPage />} />
          <Route path="/edit/:id" element={<EditPost />} />
        </Route>
      </Routes>
    </UserProvider>
  );
}

export default App;



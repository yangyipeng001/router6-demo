import React from "react";

// ! lesson1
// import {
//   BrowserRouter as Router,
//   HashRouter as Router,
//   MemoryRouter as Router,
//   Routes,
//   Route,
//   Link,
//   Outlet,
//   useNavigate,
//   useParams,
//   useResolvedPath,
// } from "react-router-dom";

// export default function App(props) {
//   return (
//     <div className="app">
//       <Router>
//         <Routes>
//           <Route path="/" element={<Layout />}>
//             <Route index element={<Home />} />
//             {/* <Route path="product" element={<Product />} /> */}
//             <Route path="product" element={<Product />}>
//               <Route path=":id" element={<ProductDetail />} />
//             </Route>
//             <Route path="*" element={<NoMatch />} />
//           </Route>
//         </Routes>
//       </Router>
//     </div>
//   );
// }

// function Layout() {
//   return (
//     <div>
//       <Link to="/">首页</Link>
//       <Link to="product">商品</Link>
//       <Outlet />
//     </div>
//   );
// }

// function Home() {
//   return (
//     <div>
//       <h1>Home</h1>
//     </div>
//   );
// }

// function Product() {
//   const path = useResolvedPath("123");
//   console.log("path", path); //sy-log
//   return (
//     <div>
//       <h1>Product</h1>
//       <Link to="123">详情</Link>
//       <Outlet />
//     </div>
//   );
// }

// function ProductDetail() {
//   const params = useParams();
//   const navigate = useNavigate();
//   return (
//     <div>
//        <h1>ProductDetail</h1>
//       <h1>ProductDetail: {params.id}</h1>
//       <button
//         onClick={() => {
//           navigate("/");
//         }}
//       >
//         go home
//       </button>
//     </div>
//   );
// }

// function NoMatch() {
//   return (
//     <div>
//       <h1>NoMatch</h1>
//     </div>
//   );
// }


// ! lesson2
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { BrowserRouter as Router, Routes, Route } from "./mini-react-router";

// export default function App(props) {
//   return (
//     <div className="app">
//       <Router>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="product" element={<Product />} />
//         </Routes>
//       </Router>
//     </div>
//   );
// }

// function Home() {
//   return (
//     <div>
//       <h1>Home</h1>
//     </div>
//   );
// }

// function Product() {
//   return (
//     <div>
//       <h1>Product</h1>
//     </div>
//   );
// }


// ! lesson3
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link,
//   Outlet,
// } from "react-router-dom";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link,
// } from "./mini-react-router";

// export default function App(props) {
//   return (
//     <div className="app">
//       <Router>
//         <Routes>
//           <Route path="/" element={<Layout />}>
//             <Route path="/" element={<Home />} />
//             <Route path="product" element={<Product />} />
//           </Route>
//         </Routes>
//       </Router>
//     </div>
//   );
// }

// function Layout(props) {
//   return (
//     <div className="border">
//       <Link to="/">首页</Link>
//       <Link to="/product">商品</Link>

//       {/* <Outlet /> */}
//     </div>
//   );
// }

// function Home() {
//   return (
//     <div>
//       <h1>Home</h1>
//     </div>
//   );
// }

// function Product() {
//   return (
//     <div>
//       <h1>Product</h1>
//     </div>
//   );
// }


// ! lesson4
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link,
//   Outlet,
// } from "react-router-dom";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link,
//   Outlet,
// } from "./mini-react-router";

// export default function App(props) {
//   return (
//     <div className="app">
//       <Router>
//         <Routes>
//           <Route path="/" element={<Layout />}>
//             <Route path="/" element={<Home />} />
//             <Route path="product" element={<Product />} />
//           </Route>
//         </Routes>
//       </Router>
//     </div>
//   );
// }

// function Layout(props) {
//   return (
//     <div className="border">
//       <Link to="/">首页</Link>
//       <Link to="/product">商品</Link>

//       <Outlet />
//     </div>
//   );
// }

// function Home() {
//   return (
//     <div>
//       <h1>Home</h1>
//     </div>
//   );
// }

// function Product() {
//   return (
//     <div>
//       <h1>Product</h1>
//     </div>
//   );
// }


// ! lesson5
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link,
  // Outlet,
  // useNavigate,
// } from "react-router-dom";

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link,
//   Outlet,
//   useNavigate,
//   useParams,
// } from "./mini-react-router";

// export default function App(props) {
//   return (
//     <div className="app">
//       <Router>
//         <Routes>
//           <Route path="/" element={<Layout />}>
//             <Route path="/" element={<Home />} />
//             <Route path="product" element={<Product />}>
//               <Route path=":id" element={<ProductDetail />} />
//             </Route>
//           </Route>
//         </Routes>
//       </Router>
//     </div>
//   );
// }

// function Layout(props) {
//   return (
//     <div className="border">
//       <Link to="/">首页</Link>
//       <Link to="/product">商品</Link>

//       <Outlet />
//     </div>
//   );
// }

// function Home() {
//   return (
//     <div>
//       <h1>Home</h1>
//     </div>
//   );
// }

// function Product() {
//   return (
//     <div>
//       <h1>Product</h1>

//       <Link to="/product/123">商品详情</Link>

//       <Outlet />
//     </div>
//   );
// }

// function ProductDetail() {
//   let navigate = useNavigate();
//   const params = useParams();
//   return (
//     <div>
//       <h1>ProductDetail</h1>
//       <p>{params.id}</p>
//       <button onClick={() => navigate("/")}>go home</button>
//     </div>
//   );
// }


// ! lesson6
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link,
//   Outlet,
//   useNavigate,
//   useParams,
//   Navigate,
//   useLocation,
// } from "react-router-dom";
// import { AuthProvider, useAuth } from "./auth";

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link,
//   Outlet,
//   useNavigate,
//   useParams,
// } from "./mini-react-router";

// export default function App(props) {
//   return (
//     <div className="app">
//       <AuthProvider>
//         <Router>
//           <Routes>
//             <Route path="/" element={<Layout />}>
//               <Route path="/" element={<Home />} />
//               <Route path="product" element={<Product />}>
//                 <Route path=":id" element={<ProductDetail />} />
//               </Route>
//               <Route
//                 path="user"
//                 element={
//                   <RequiredAuth>
//                     <User />
//                   </RequiredAuth>
//                 }
//               />
//               <Route path="login" element={<Login />} />
//               <Route path="*" element={<NoMatch />} />
//             </Route>
//           </Routes>
//         </Router>
//       </AuthProvider>
//     </div>
//   );
// }

// function Layout(props) {
//   return (
//     <div className="border">
//       <Link to="/">首页</Link>
//       <Link to="/product">商品</Link>
//       <Link to="/user">用户中心</Link>
//       <Link to="/login">登录</Link>
//       <Outlet />
//     </div>
//   );
// }

// function Home() {
//   return (
//     <div>
//       <h1>Home</h1>
//     </div>
//   );
// }

// function Product() {
//   return (
//     <div>
//       <h1>Product</h1>

//       <Link to="/product/123">商品详情</Link>

//       <Outlet />
//     </div>
//   );
// }

// function ProductDetail() {
//   let navigate = useNavigate();
//   const params = useParams();
//   return (
//     <div>
//       <h1>ProductDetail</h1>
//       <p>{params.id}</p>
//       <button onClick={() => navigate("/")}>go home</button>
//     </div>
//   );
// }

// // 路由守卫
// function RequiredAuth({ children }) {
//   const auth = useAuth();
//   const location = useLocation();

//   if (!auth.user) {
//     return <Navigate to={"/login"} state={{ from: location }} replace={true} />;
//   }

//   return children;
// }

// function User() {
//   const auth = useAuth();
//   const navigate = useNavigate();

//   return (
//     <div>
//       <h1>User</h1>
//       <p>{auth.user?.username}</p>
//       <button
//         onClick={() => {
//           auth.signout(() => navigate("/login"));
//         }}
//       >
//         退出登录
//       </button>
//     </div>
//   );
// }

// function Login() {
//   const auth = useAuth();
//   const navigate = useNavigate();
//   const location = useLocation();
//   const from = location.state?.from.pathname || "/";

//   if (auth.user) {
//     return <Navigate to={from} />;
//   }

//   const submit = (e) => {
//     const formData = new FormData(e.currentTarget);
//     const username = formData.get("username");
//     auth.signin({ username }, () => {
//       navigate(from, { replace: true });
//     });
//   };

//   return (
//     <div>
//       <h1>Login</h1>
//       <form onSubmit={submit}>
//         <input type="text" name="username" />
//         <button type="submit">login</button>
//       </form>
//     </div>
//   );
// }

// function NoMatch() {
//   return (
//     <div>
//       <h1>404</h1>
//     </div>
//   );
// }


// ! lesson7
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link,
//   Outlet,
//   useNavigate,
//   useParams,
//   Navigate,
//   useLocation,
// } from "react-router-dom";

// import {AuthProvider, useAuth} from "./auth";

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link,
//   Outlet,
//   Navigate,
//   useNavigate,
//   useParams,
//   useLocation,
// } from "./mini-react-router";

// export default function App(props) {
//   return (
//     <div className="app">
//       <AuthProvider>
//         <Router>
//           <Routes>
//             <Route path="/" element={<Layout />}>
//               <Route path="/" element={<Home />} />
//               <Route path="product" element={<Product />}>
//                 <Route path=":id" element={<ProductDetail />} />
//               </Route>
//               <Route
//                 path="user"
//                 element={
//                   <RequiredAuth>
//                     <User />
//                   </RequiredAuth>
//                 }
//               />
//               <Route path="login" element={<Login />} />
//               <Route path="*" element={<NoMatch />} />
//             </Route>
//           </Routes>
//         </Router>
//       </AuthProvider>
//     </div>
//   );
// }

// function Layout(props) {
//   return (
//     <div className="border">
//       <Link to="/">首页</Link>
//       <Link to="/product">商品</Link>
//       <Link to="/user">用户中心</Link>
//       <Link to="/login">登录</Link>
//       <Outlet />
//     </div>
//   );
// }

// function Home() {
//   return (
//     <div>
//       <h1>Home</h1>
//     </div>
//   );
// }

// function Product() {
//   return (
//     <div>
//       <h1>Product</h1>

//       <Link to="/product/123">商品详情</Link>

//       <Outlet />
//     </div>
//   );
// }

// function ProductDetail() {
//   let navigate = useNavigate();
//   const params = useParams();
//   return (
//     <div>
//       <h1>ProductDetail</h1>
//       <p>{params.id}</p>
//       <button onClick={() => navigate("/")}>go home</button>
//     </div>
//   );
// }

// function RequiredAuth({children}) {
//   const auth = useAuth();
//   const location = useLocation();

//   if (!auth.user) {
//     return <Navigate to={"/login"} state={{from: location}} replace={true} />;
//   }

//   return children;
// }

// function User() {
//   const auth = useAuth();
//   const navigate = useNavigate();

//   return (
//     <div>
//       <h1>User</h1>
//       <p>{auth.user?.username}</p>
//       <button
//         onClick={() => {
//           auth.signout(() => navigate("/login"));
//         }}>
//         退出登录
//       </button>
//     </div>
//   );
// }

// function Login() {
//   const auth = useAuth();
//   const navigate = useNavigate();
//   const location = useLocation();
//   const from = location.state?.from.pathname || "/";

//   if (auth.user) {
//     return <Navigate to={from} />;
//   }

//   const submit = (e) => {
//     const formData = new FormData(e.currentTarget);
//     const username = formData.get("username");
//     auth.signin({username}, () => {
//       navigate(from, {replace: true});
//     });
//   };

//   return (
//     <div>
//       <h1>Login</h1>
//       <form onSubmit={submit}>
//         <input type="text" name="username" />
//         <button type="submit">login</button>
//       </form>
//     </div>
//   );
// }

// function NoMatch() {
//   return (
//     <div>
//       <h1>404</h1>
//     </div>
//   );
// }


// ! lesson8
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link,
//   Outlet,
//   useNavigate,
//   useParams,
//   Navigate,
//   useLocation,
// } from "react-router-dom";

// import { AuthProvider, useAuth } from "./auth";
// // import About from "./pages/About";

// // import {
// //   BrowserRouter as Router,
// //   Routes,
// //   Route,
// //   Link,
// //   Outlet,
// //   Navigate,
// //   useNavigate,
// //   useParams,
// //   useLocation,
// // } from "./mini-react-router";

// const About = React.lazy(() => import("./pages/About"));

// export default function App(props) {
//   return (
//     <div className="app">
//       <AuthProvider>
//         <Router>
//           <Routes>
//             <Route path="/" element={<Layout />}>
//               <Route path="/" element={<Home />} />
//               <Route path="product" element={<Product />}>
//                 <Route path=":id" element={<ProductDetail />} />
//               </Route>
//               <Route
//                 path="user"
//                 element={
//                   <RequiredAuth>
//                     <User />
//                   </RequiredAuth>
//                 }
//               />
//               <Route path="login" element={<Login />} />
//               <Route
//                 path="about"
//                 element={
//                   <React.Suspense fallback={<h1>loading...</h1>}>
//                     <About />
//                   </React.Suspense>
//                 }
//               />

//               <Route path="*" element={<NoMatch />} />
//             </Route>
//           </Routes>
//         </Router>
//       </AuthProvider>
//     </div>
//   );
// }

// function Layout(props) {
//   return (
//     <div className="border">
//       <Link to="/">首页</Link>
//       <Link to="/product">商品</Link>
//       <Link to="/user">用户中心</Link>
//       {/* <Link to="/login">登录</Link> */}
//       <Link to="/about">关于</Link>

//       <Outlet />
//     </div>
//   );
// }

// function Home() {
//   return (
//     <div>
//       <h1>Home</h1>
//     </div>
//   );
// }

// function Product() {
//   return (
//     <div>
//       <h1>Product</h1>

//       <Link to="/product/123">商品详情</Link>

//       <Outlet />
//     </div>
//   );
// }

// function ProductDetail() {
//   let navigate = useNavigate();
//   const params = useParams();
//   return (
//     <div>
//       <h1>ProductDetail</h1>
//       <p>{params.id}</p>
//       <button onClick={() => navigate("/")}>go home</button>
//     </div>
//   );
// }

// function RequiredAuth({ children }) {
//   const auth = useAuth();
//   const location = useLocation();

//   if (!auth.user) {
//     return <Navigate to={"/login"} state={{ from: location }} replace={true} />;
//   }

//   return children;
// }

// function User() {
//   const auth = useAuth();
//   const navigate = useNavigate();

//   return (
//     <div>
//       <h1>User</h1>
//       <p>{auth.user?.username}</p>
//       <button
//         onClick={() => {
//           auth.signout(() => navigate("/login"));
//         }}
//       >
//         退出登录
//       </button>
//     </div>
//   );
// }

// function Login() {
//   const auth = useAuth();
//   const navigate = useNavigate();
//   const location = useLocation();
//   const from = location.state?.from.pathname || "/";

//   if (auth.user) {
//     return <Navigate to={from} />;
//   }

//   const submit = (e) => {
//     const formData = new FormData(e.currentTarget);
//     const username = formData.get("username");
//     auth.signin({ username }, () => {
//       navigate(from, { replace: true });
//     });
//   };

//   return (
//     <div>
//       <h1>Login</h1>
//       <form onSubmit={submit}>
//         <input type="text" name="username" />
//         <button type="submit">login</button>
//       </form>
//     </div>
//   );
// }

// function NoMatch() {
//   return (
//     <div>
//       <h1>404</h1>
//     </div>
//   );
// }


// ! lesson9
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link,
//   Outlet,
//   NavLink,
//   useNavigate,
//   useParams,
//   Navigate,
//   useLocation,
//   useMatch,
//   useResolvedPath,
// } from "react-router-dom";

import { AuthProvider, useAuth } from "./auth";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
  Navigate,
  useNavigate,
  useParams,
  useLocation,
  useMatch,
  useResolvedPath,
} from "./mini-react-router";

// import About from "./pages/About";

const About = React.lazy(() => import("./pages/About"));

export default function App(props) {
  return (
    <div className="app">
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="product" element={<Product />}>
                <Route path=":id" element={<ProductDetail />} />
              </Route>
              <Route
                path="user"
                element={
                  <RequiredAuth>
                    <User />
                  </RequiredAuth>
                }
              />
              <Route path="login" element={<Login />} />

              <Route
                path="about"
                element={
                  <React.Suspense fallback={<h1>loading...</h1>}>
                    <About />
                  </React.Suspense>
                }
              />

              <Route path="*" element={<NoMatch />} />
            </Route>
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

function CustomLink({ to, ...rest }) {
  const resolved = useResolvedPath(to);
  console.log("to", to, resolved); //sy-log
  const match = useMatch({ path: resolved.pathname, end: true });

  return <Link to={to} {...rest} style={{ color: match ? "red" : "black" }} />;

  // return (
  //   <NavLink
  //     to={to}
  //     {...rest}
  //     style={({ isActive }) => ({ color: isActive ? "red" : "black" })}
  //   />
  // );
}

function Layout(props) {
  return (
    <div className="border">
      <CustomLink to="/">首页</CustomLink>
      <CustomLink to="/product">商品</CustomLink>
      <CustomLink to="/user">用户中心</CustomLink>
      {/* <CustomLink to="/login">登录</CustomLink> */}
      <CustomLink to="/about">关于</CustomLink>

      <Outlet />
    </div>
  );
}

function Home() {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}

function Product() {
  return (
    <div>
      <h1>Product</h1>

      <CustomLink to="/product/123">商品详情</CustomLink>
      {/* <CustomLink to="123">商品详情</CustomLink> */}

      <Outlet />
    </div>
  );
}

function ProductDetail() {
  let navigate = useNavigate();
  const params = useParams();
  return (
    <div>
      <h1>ProductDetail</h1>
      <p>{params.id}</p>
      <button onClick={() => navigate("/")}>go home</button>
    </div>
  );
}

function RequiredAuth({ children }) {
  const auth = useAuth();
  const location = useLocation();

  if (!auth.user) {
    return <Navigate to={"/login"} state={{ from: location }} replace={true} />;
  }

  return children;
}

function User() {
  const auth = useAuth();
  const navigate = useNavigate();

  return (
    <div>
      <h1>User</h1>
      <p>{auth.user?.username}</p>
      <button
        onClick={() => {
          auth.signout(() => navigate("/login"));
        }}
      >
        退出登录
      </button>
    </div>
  );
}

function Login() {
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from.pathname || "/";

  if (auth.user) {
    return <Navigate to={from} />;
  }

  const submit = (e) => {
    const formData = new FormData(e.currentTarget);
    const username = formData.get("username");
    auth.signin({ username }, () => {
      navigate(from, { replace: true });
    });
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={submit}>
        <input type="text" name="username" />
        <button type="submit">login</button>
      </form>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h1>404</h1>
    </div>
  );
}
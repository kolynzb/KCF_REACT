import Home from "./pages/Home";
import "./styles/moviestyles.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Navbar from "./components/Navbar";
import MovieDetails from "./pages/MovieDetails";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//   },
//   {
//     path: "about",
//     element: <AboutUs />,
//   },
// ]);
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Home />}>
      <Route path="about" element={<AboutUs />} />
      <Route // sent to loaders
        loader={async ({ params }) => {
          return fetch(
            `https://api.themoviedb.org/3/movie/${params.movieId}?api_key=1b26809a9f6f50bf9da2b56a2234c3ab&language=en-US`
          ); // abc
        }}
        path="movie/:movieId"
        element={MovieDetails}
      />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

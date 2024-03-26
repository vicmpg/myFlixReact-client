import {useState, useEffect} from "react";
import { MovieView } from "../movie-view/movie-view";
import { LoginView } from "../login-view/login-view";
import { SignupView } from "../signup-view/signup-view";
import {NavigationBar} from "../navigation-bar/navigation-bar";
import { ProfileView } from "../profile-view/profile-view";
import { Row, Col } from "react-bootstrap";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { MovieCard } from "../movie-card/movie-card";

export const MainView = () => {
  // const storedUser = JSON.parse(localStorage.getItem("user")); // got an error 'SyntaxError: "undefined" is not valid JSON'
  const storedUser = localStorage.getItem("user"); //works as as it should
  const storedToken = localStorage.getItem("token");
  const parseUser = JSON.parse(storedUser)


  const [movies, setMovies] = useState([]);
  const [user, setUser] = useState(storedUser ? parseUser : null);
  const [token, setToken] = useState(storedToken ? storedToken : null);
  useEffect(() => {
    //console.log(token, user)
    if(!token) {
      return
    }
    fetch(`https://myflix-z4g1.onrender.com/movies`, {
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` }
		})
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        const moviesFromApi = data.map((movie) => {
            return {
                _id: movie._id,
                Title: movie.Title,
                ImagePath: movie.ImagePath,
                Description: movie.Description,
                Year: movie.Year,
                Genre: {
                    Name: movie.Genre.Name
                },
                Director: {
                    Name: movie.Director.Name
                }
            };
        });
        setMovies(moviesFromApi);
    });
}, [token]);


return (
  <BrowserRouter>
      <NavigationBar
          user={user}
          onLoggedOut={() => setUser(null)}
      />
      <Row className="justify-content-center my-5">
          <Routes>
              {/* Return SignupView if not logged in, otherwise mainpage */}
              <Route
              path="/signup"
              element={
                  <>
                      {user? (
                          <Navigate to="/" />
                      ) : (
                          <Col md={5}>
                              <SignupView />
                          </Col>
                      )}
                  </>
              }
              />
              {/* Return LoginView if not logged in, otherwise mainpage */}
              <Route 
                  path="/login"
                  element={
                      <>
                          {user ? (
                              <Navigate to="/" />
                          ) : (
                              <Col md={5}>
                                  <LoginView 
                                      onLoggedIn={(user, token) => {
                                          setUser(user);
                                          setToken(token);
                                      }}
                                  />
                              </Col>
                          )}
                      </>
                  }
              />
              {/* Return MovieView if logged in, otherwise LoginView */}
              <Route 
                  path="/movies/:movieId"
                  element={
                      <>
                          {!user ? (
                              <Navigate to="/login" replace />
                          ) : movies.length === 0 ? (
                              <Col>The list is empty</Col>
                          ) : (
                              <Col md={8}>
                                  <MovieView movies={movies} />
                              </Col>
                          )}
                      </>
                  }
              />
              {/* Return MovieCards if logged in, otherwise LoginView */}
              <Route 
              path="/"
              element={
                  <>
                      {!user ? (
                          <Navigate to="/login" replace />
                      ) : movies.length === 0 ? (
                          <Col>The list is empty</Col>
                      ) : (
                          <>
                              {movies.map((movie) => (
                                  <Col md={6} lg={4} xl={3} className="mb-5 col-8" key={movie._id}>
                                      <MovieCard movie={movie} />
                                  </Col>
                              ))}
                          </>
                      )}
                  </>
              }
              />
              {/* Return ProfileView if logged in, otherwise LoginView */}
              <Route
              path="/profile"
              element={
                  <>
                      {!user ? (
                          <Navigate to="/login" replace />
                      ) : (
                          <Col>
                              <ProfileView 
                              user={user}
                              token={token}
                              movies={movies}
                              setUser={setUser}
                              />
                          </Col>
                      )}
                  </>
              }
              />
          </Routes>
      </Row>
  </BrowserRouter>
  );
};
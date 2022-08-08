import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import FeedbackList from "./components/feedback/FeedbackList";
import FeedbackStats from "./components/feedback/FeedbackStats";
import FeedbackForm from "./components/feedback/FeedbackForm";
import AboutPage from "./components/pages/AboutPage";
import AboutIconLink from "./components/shared/AboutIconLink";
import Post from "./components/pages/Post";
import { FeedbackProvider } from "./components/context/FeedbackContext";
//curly braces: it's not a default export, just a simple export const(function)

export default function App() {

  return (
    <FeedbackProvider>
      <Router>
        <Header></Header>
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList  />
                </>
              }
            />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/post/:id/:name/*" element={<Post />} />
          </Routes>
          <AboutIconLink></AboutIconLink>
        </div>
      </Router>
    </FeedbackProvider>
  );
}

// the * sign shows that it can be more information on the route,
// see: Post.jsx

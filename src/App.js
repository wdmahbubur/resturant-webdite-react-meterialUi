import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Blog from './components/Blog/Blog';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import NotFound from './components/NotFound/NotFound';
import Home from './components/Home/Home';
import MealDetails from './components/MealDetails/MealDetails'
import CategoryDetails from './components/CategoryDetails/CategoryDetails';
import Footer from './components/Footer/Footer';
import SearchResult from './components/SearchResult/SearchResult';

function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/blog">
            <Blog></Blog>
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/categoryDetails/:strCategory">
            <CategoryDetails></CategoryDetails>
          </Route>
          <Route path="/mealDetails/:idMeal">
            <MealDetails></MealDetails>
          </Route>
          <Route path="/search/:searchValue">
            <SearchResult></SearchResult>
          </Route>
          <Route exact path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>

      <Footer></Footer>
    </div>

  );
}

export default App;

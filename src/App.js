import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Categories from './Pages/Categories';
import CategoryList from './Pages/CategoryList';
import RecipeDetails from './Pages/RecipeDetails';
import './App.css';

export default function App() {
  return (
    <>
      {/* header of page that appears in all the pages */}
      <header className="aap-header fixed-top"> My Recipe App</header>
        <BrowserRouter>
          <section style={{marginBottom: "50px"}}>
            <Routes>
              {/* Landing/Category Page */}
              <Route exact path="/" element={ <Categories /> }/>
              {/* Page that display all the recipes for the selected category */}
              <Route path="/categoryList/:category" element={ <CategoryList /> }/>
              {/* Page that displays the recipe */}
              <Route path="/recipeDetails/:recipeID" element={ <RecipeDetails /> }/>
            </Routes>
          </section>
        </BrowserRouter>
      {/* footer of page that appears in all the pages */}
      <footer className="aap-footer fixed-bottom"></footer>
    </>
  );
}
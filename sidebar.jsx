import React from "react";
import "../stylesheets/sidebar.css";
import { useRouteMatch } from "react-router-dom";

const Sidebar = () => {
  const { url, path } = useRouteMatch();
  console.log(`url: ${url}. path: ${path}`);

  return (
    <div>
      <ul>
        <li>
          <a href={`/products/face`} className="header">
            Face
          </a>
          <ul>
            <li>
              <a className="subcategory">Foundation</a>
            </li>
            <li>
              <a className="subcategory">Concealer</a>
            </li>
          </ul>
        </li>
        <li>
          <a href={`/products/eyes`} className="header">
            Eyes
          </a>
          <ul>
            <li>
              <a className="subcategory">Eyeshadow</a>
            </li>
            <li>
              <a className="subcategory">Eyeliner</a>
            </li>
            <li>
              <a className="subcategory">Lashes</a>
            </li>
          </ul>
        </li>
        <li>
          <a href={`/products/lips`} className="header">
            Lips
          </a>
          <ul>
            <li>
              <a className="subcategory">Lipstick</a>
            </li>
            <li>
              <a className="subcategory">Lipgloss</a>
            </li>
            <li>
              <a className="subcategory">Lipliner</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;

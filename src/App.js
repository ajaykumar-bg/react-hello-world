import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';

import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import NameList from './components/NameList';
import StyleSheets from './components/StyleSheets';
import Forms from './components/Forms';
import LifecycleA from './components/LifecycleA';
import Table from './components/Table';
import RefDemo from './components/RefDemo';
import FocusInput from './components/FocusInput';
import FRParentInput from './components/FRParentInput';
import PortalDemo from './components/PortalDemo';
import Hero from './components/Hero';
import ErrorBoundary from './components/ErrorBoundary';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';

import ClickCounterTwo from './components/ClickCounterTwo';
import HoverCounterTwo from './components/HoverCounterTwo';
import RenderPropsCounter from './components/RenderPropsCounter'

import ComponentC from './components/ComponentC';

import {UserProvider} from './components/userContext'
import Posts from './components/Posts'
import HttpPost from './components/HttpPost'


function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/welcome/">Welcome</Link>
            </li>
            <li>
              <Link to="/greet/">Greet</Link>
            </li>
            <li>
              <Link to="/message/">Message</Link>
            </li>
            <li>
              <Link to="/table/">Table</Link>
            </li>
            <li>
              <Link to="/posts/">Posts</Link>
            </li>
            <li>
              <Link to="/forms/">Forms</Link>
            </li>
            <li>
              <Link to="/refDemo/">RefDemo</Link>
            </li>
            <li>
              <Link to="/portalDemo/">PortalDemo</Link>
            </li>

          </ul>
        </nav>

        <Route path="/" exact component={Hello} />
        <Route path="/welcome/" component={Welcome} />
        <Route path="/greet/" component={Greet} />
        <Route path="/message/" component={Message} />
        <Route path="/posts/" component={Posts} />

        <Route path="/forms/" component={Forms} />
        <Route path="/table/" component={Table} />
        <Route path="/refDemo/" component={RefDemo} />
        <Route path="/portalDemo/" component={PortalDemo} />
        
      </div>
    </Router>
  );
}

export default App;

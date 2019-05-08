import React from 'react';
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


function App() {
  return (
    <div className="App">
      {/* <h1> Hello world </h1> */}
      {/* <Greet name="Peter Dinklage" heroName ="Tyrion"></Greet>
      <Welcome name="Peter Dinklage" heroName ="Tyrion"></Welcome>
      <Hello></Hello>
      <Message></Message>
      <Counter></Counter>
      <FunctionClick />
      <ClassClick />
      <EventBind />
      <ParentComponent />
      <NameList /> */}
      {/* <StyleSheets color="primary"/>
      <StyleSheets /> */}
      {/* <Forms /> */}
      {/* <LifecycleA /> */}
      {/* <Table /> */}
      {/* <RefDemo /> */}
      {/* <FocusInput /> */}
      {/* <FRParentInput /> */}
      {/* <PortalDemo /> */}
      {/* <ErrorBoundary>
        <Hero heroName="Batman"/>
        <Hero heroName="Superman" />
        <Hero heroName="Ironman" />
        <Hero heroName="Jocker" />
      </ErrorBoundary> */}
      {/* <ClickCounter/>
      <HoverCounter /> */}

      <RenderPropsCounter render={
        (count, incrementCount) => 
          <ClickCounterTwo count={count} incrementCount={incrementCount}/>
        }></RenderPropsCounter>

<RenderPropsCounter render={
        (count, incrementCount) => 
          <HoverCounterTwo count={count} incrementCount={incrementCount}/>
        }></RenderPropsCounter>

    </div>
  );
}

export default App;

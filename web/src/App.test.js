import React from "react";
import ReactDOM from 'react-dom'
import {HashRouter, Route} from "react-router-dom";
import { shallow, configure } from 'enzyme';
import App from './App';
import About from "./About";
import Home from "./Home";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Giraffes from "./Giraffes";

configure({ adapter: new Adapter() });

//Tester at appen render uden crash

it('renders with outcrashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HashRouter><App /></HashRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});

//Tester Routes

let pathMap = {};
describe('routes using array of routers', () => {
  beforeAll(() => {
    const component = shallow(<App/>);
    pathMap = component.find(Route).reduce((pathMap, route) => {
      const routeProps = route.props();
      pathMap[routeProps.path] = routeProps.component;
      return pathMap;
    }, {});
    console.log(pathMap)
  })
  it('should show Home component for / router (getting array of routes)', () => {

    expect(pathMap['/']).toBe(Home);
  })
  it('should show About', () => {
    expect(pathMap['/about']).toBe(About);
  })
  it('should show Giraffes', () => {
    expect(pathMap['/giraffes']).toBe(Giraffes);
  })
})

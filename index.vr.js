import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
} from 'react-vr';
import Canvas from "./components/Canvas";
import { LiveTour } from "live-tour-lab";
import Hero from "./components/Hero";
import Display from './components/Display';
//<Canvas src={asset("winter.jpg")}/>
//<Hero entries="heroes"/>

export default class BriteliteVR extends React.Component {
  render() {
    return (
      <View>
        <LiveTour tourURI='live-tour.json'>
          <Hero entries="heroes" />
          <Display entries="displaytxt" />
        </LiveTour>
      </View>
    );
  }
};

AppRegistry.registerComponent('BriteliteVR', () => BriteliteVR);

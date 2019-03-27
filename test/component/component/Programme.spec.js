import React from 'react';
import { shallow, mount } from 'enzyme';
import Programme from '../../../src/components/Programme';

describe("<Programme>", () => {
  it('should render title prop as text', () => {
    const text = "the title";
    const component = shallow(<Programme title={text}/>);
    expect(component.find("h1").text()).toEqual(text);
  });
  it('should display quotes', () => {
    const quotes = [
      "I'd just like to fly a helicopter all around Norfolk. You know, swoop down over a field. Scare a donkey so that it falls into a river. Hover over one of those annoying families that go on holidays on bikes. And shout at them \"get out of the area!\" and watch them panic!",
      "Sunday Bloody Sunday. What a great song. It really encapsulates the frustration of a Sunday, doesn't it?",
      "Jet from Gladiators to host a millennium barn dance at Yeovil aerodrome. Properly policed. It must not, repeat not, turn into an all-night rave.",
      "Wings? They’re only the band The Beatles could've been!"
    ];
    const component = mount(<Programme quotes={quotes} />);
    const quotesInDom = component.find('.quotes');
    quotesInDom.forEach((node, index) => {
      expect(node.text()).toEqual(quotes[index]);
    })
  });
  it('should render randomQuote from the state', () => {
    const randomAlanQuote = "Jet from Gladiators";
    const component = shallow(<Programme randomQuote={randomAlanQuote} />)
    expect(component.find('.randomQuote').text()).toEqual(randomAlanQuote);
  });
});

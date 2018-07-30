import React from 'react';
import { shallow, mount } from 'enzyme';
import Alan from '../../src/components/Alan';
import { expect } from 'chai';

describe("<Alan>", () => {
  it('should render title prop as text', () => {
    const text = "the title";
    const component = shallow(<Alan title={text}/>);
    expect(component.find("h1").text()).to.equal(text);
  });
  it('should display quotes', () => {
    const quotes = [
      "I'd just like to fly a helicopter all around Norfolk. You know, swoop down over a field. Scare a donkey so that it falls into a river. Hover over one of those annoying families that go on holidays on bikes. And shout at them \"get out of the area!\" and watch them panic!",
      "Sunday Bloody Sunday. What a great song. It really encapsulates the frustration of a Sunday, doesn't it?",
      "Jet from Gladiators to host a millennium barn dance at Yeovil aerodrome. Properly policed. It must not, repeat not, turn into an all-night rave.",
      "Wings? They’re only the band The Beatles could've been!"
    ];
    const component = mount(<Alan quotes={quotes} />);
    const quotesInDom = component.find('.quotes');
    quotesInDom.forEach((node, index) => {
      expect(node.text()).to.equal(quotes[index]);
    })
  });
  it('should render randomAlanQuote from the state', () => {
    const randomAlanQuote = "Jet from Gladiators";
    const component = shallow(<Alan randomAlanQuote={randomAlanQuote} />)
    expect(component.find('.randomAlanQuote').text()).to.deep.equal(randomAlanQuote);
  })
});

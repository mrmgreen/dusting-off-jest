import { expect } from 'chai';
import programmeMetaFactory from '../../src/utils/programmeFactory';

describe("programmeFactory", () => {
  it("when called without a recognised programme name will return null", () => {
    expect(programmeMetaFactory('cats')).to.equal(null);
  });
  it("will return an object with the key of title and value of the programme", () => {
    const title = 'Pulp Fiction';
    const result = programmeMetaFactory(title);
    expect(result.title).to.equal(title);
  });
  it("will return an object with a handleClick function", () => {
    const title = 'Pulp Fiction';
    const result = programmeMetaFactory(title);
    expect(result.handleClick).to.be.a('function');
  });
});
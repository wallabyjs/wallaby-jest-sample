import Planet from '../../src/d3/Planet'
const loadShadowsPromise = new Promise((resolve, reject) => {
  resolve([]);
});

it("correctly renders selected planet", () => {
  const svg = createDOMElement("svg");
  const planet = new Planet();

  // Don't load shadows, and return custom data
  spyOn(planet, "loadShadowImages").and.returnValue(loadShadowsPromise);
  spyOnGetter(planet, "data").and.returnValue({
    id: "AA",
    type: "TEST",
    name: "Test Planet",
    isSelected: true,
  });

  planet.append(svg).render(true);
  expect(svg.innerHTML).toMatchSnapshot();
});

describe("events", () => {
  it("correctly fires lock", () => {
    expect(true).toBe(false);
  });

  // it("correctly fires unlock", () => {
  //     expect(true).toBe(false);
  // });
});

function createDOMElement() {
  return {}
}

let handlerInstalled = false;
const afterHandler = () => {
};
export function spyOnGetter(obj, prop) {
  const env = jasmine.getEnv();

  const spy = jasmine.createSpy(`${prop} spy`);
  Object.defineProperty(obj, prop, {
    get: spy,
    configurable: true,
  });

  // TODO - this doesn't actually clean up properly,
  // take a look at http://stackoverflow.com/questions/33148496/how-can-i-spy-on-a-getter-property-using-jasmine/38259654#38259654
  if (!handlerInstalled) {
    handlerInstalled = true;
    env.afterEach(() => afterHandler());
  }
  return spy;
}
/*
describe() -> the description of our testing. It groups single tests into a sequence of tests.  
it() -> defines a single test. 
expect() -> defines the expectations of a test. 
*/

describe("function displaySports", ()=>{
    it("should accept one parameter", ()=>{
        expect(displaySports).toHaveSize(1)
    });
    it("If call the displaySorts function with an empty array, it should return null", ()=>{
        expect(displaySports([])).toEqual(null)
    }
    );
    it(
      "If I call the displaySports function without any value, it should return null ", ()=>{
        expect(displaySports()).toEqual(null)
      }
    );
    it("When I call, displaySports() it returns every sport", ()=>{
        expect(displaySports(["tennis", "soccer", "judo", "karate"])).toEqual(
          "tennis\nsoccer\njudo\nkarate\n");
    });

})
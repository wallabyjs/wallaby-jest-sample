jest.dontMock('../sum');


//var err = new Error(123);
//err._stack = err.stack;
//throw err;

var sum = require.requireActual('../sum');

describe('sum', function () {

//  it('adds 1 + 2 to equal 3', function () {
//    var sum = require('../sum');
////'1'
//    expect(sum(2, 2)).toBe(4);
//  });

  //console.log(jasmine.getEnv().it.only);
  //console.log(jasmine.getEnv().iit);

  //it.only('123', function () {
  //  expect(sum(2, 2)).toBe(4);
  //});

  //it('1224', function () {
  //  var isFinished = false;
  //  runs(function () {
  //    //isFinished = true;
  //    setTimeout(function () {
  //      isFinished = true;
  //    }, 100);
  //    jest.runAllTicks();
  //    jest.runAllTimers();
  //  });
  //  waitsFor(function () {
  //    return isFinished;
  //  });
  //});

  // todo
  pit('adds 2 + 3 to equal 5', function () {
    var sum = require('../sum');

    console.log('test1234');
    expect(sum(2, 2)).toBe(4);

    return new Promise(function (resolve, reject) {
      //setTimeout(function () {
      //  reject(new Error(123));
      //}, 100);
      //jest.runAllTicks();
      //jest.runAllTimers();
      //jest.clearAllTimers();
      resolve(123456);
      //throw new Error(123);
      //resolve('123');
    });
    //return Promise.reject('no reason');

    //new Promise(function (resolve, reject) {
    //  resolve(Promise.reject('no reason')
    //    ['catch'](function () {
    //    ''
    //  }))
    //});
    //  ;

    return new Promise(function (resolve, reject) {
      //reject();
      resolve(123456);
      //throw new Error(123);
      //resolve('123');
    })
      ['catch'](function () {
      ''
    })
      .then(function (p) {
        ''
        throw new Error(p);
      })
      ['catch'](function () {
      ''
    })
  });

  xit('adds 2 + 2 to equal 4', function () {
    var sum = require('../sum');

    console.log('test1');
    expect(sum(2, 2)).toBe(4);
  });
});

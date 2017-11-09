
global.processor = require('../')
      

describe("src/index.ts", function () {
  var assert = require('should');
  var util = require('util');
  var examplejs_printLines;
  function examplejs_print() {
    examplejs_printLines.push(util.format.apply(util, arguments));
  }
  
  

  it("processor():base", function (done) {
    examplejs_printLines = [];
  const path = require('path')
  processor('pwd').then(function (reply) {
    examplejs_print(path.basename(reply.trim()))
    assert.equal(examplejs_printLines.join("\n"), "exec"); examplejs_printLines = [];
    done();
  }).catch(function (err) {
    console.error(err)
  })
  });
          
  it("processor():content is null", function () {
    examplejs_printLines = [];
  examplejs_print(processor(null))
  assert.equal(examplejs_printLines.join("\n"), "null"); examplejs_printLines = [];
  });
          
  it("processor():error", function (done) {
    examplejs_printLines = [];
  processor('@none').then(function () {
  }).catch(function (err) {
    examplejs_print(!!err)
    assert.equal(examplejs_printLines.join("\n"), "true"); examplejs_printLines = [];
    done();
  })
  });
          
});
         

global.processor = require('../')
      

describe("src/index.ts", function () {
  var assert = require('should');
  var util = require('util');
  var examplejs_printLines;
  function examplejs_print() {
    examplejs_printLines.push(util.format.apply(util, arguments));
  }
  
  

  it("processor():base", function () {
    examplejs_printLines = [];
  const path = require('path')
  examplejs_print(path.basename(processor('pwd').trim()))
  assert.equal(examplejs_printLines.join("\n"), "exec"); examplejs_printLines = [];
  examplejs_print(path.basename(processor('echo "汉字"').trim()))
  assert.equal(examplejs_printLines.join("\n"), "汉字"); examplejs_printLines = [];
  });
          
  it("processor():content is null", function () {
    examplejs_printLines = [];
  examplejs_print(processor(null))
  assert.equal(examplejs_printLines.join("\n"), "null"); examplejs_printLines = [];
  });
          
  it("processor():error", function () {
    examplejs_printLines = [];

  (function() {
  examplejs_print(path.basename(processor('pwd')))
  // * throw
  }).should.throw();
  });
          
});
         
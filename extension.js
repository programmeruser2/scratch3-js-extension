class JavascriptExtension {
  getInfo() {
    return {
      id: 'JavascriptExtension',
      name: 'Javascript Extension',
      blocks: [
        {
          opcode: 'execJS',
          blockType: 'command',
          text: 'Run Javascript [code]',
          'arguments': {
            code: {
              type: 'string',
              defaultValue: 'console.log("Hello World");'
            }
          }
        },
        {
          opcode: 'AnonymousJSFunction',
          blockType: 'reporter',
          text: 'JSFunction [code]',
          'arguments': {
            code: {
              type: 'string',
              defaultValue: 'return 0;'
            }
          }
        },
      ],
      menus: {}
    };
  }
  execJS({code}) {
    eval(code);
  }
  AnonymousJSFunction({code}) {
    return eval(`(function() {${code}})();`);
  }
}

Scratch.extensions.register(new JavascriptExtension());

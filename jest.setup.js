beforeAll(() => {
    jest.spyOn(console, 'error').mockImplementation((...args) => {
      if (!args[0].includes('Warning: validateDOMNesting')) {
        console.error(...args);
      }
    });
  });
  
  afterAll(() => {
    console.error.mockRestore();
  });
  
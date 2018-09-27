async function f() {

    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("done!"), 3000)
    });
  
    let result = await promise; // wait till the promise resolves (*)
  
    console.log(result); // "done!"
  }
  
  async function f2()
  {
      await f();
      console.log("All done!");
  }
  
  f2();
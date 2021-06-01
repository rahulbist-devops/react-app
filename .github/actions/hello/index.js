const core = require("@actions/core");
const github = require("@actions/github");

try {
//  throw( new Error("some error message"));
  core.debug('debug message');
  core.warning('warning message');
  core.error('error message');
  core.setSecret(name); // to avoid pinting values in the output, it will show like *****s
  const name = core.getInput("who-to-greet");
  console.log(`Hello ${name}`);  
  const time = new Date();
  core.setOutput("time", time.toTimeString());  
  console.log(JSON.stringify(github, null, "\t"));

  core.exportVariable("Hello", "hello") // simplee export varaiable Hello wth value hello
} catch(error) {
    core.setFailed(error.message);
}
# Legion-Artifact-Calculator
This calculator was inspired by WOWDB's artifact simulator.

Actually, there is no database which have the details of artifact power in chinese. So I store the data in objects in data.js.
It may cause some difficulties when the data need to be update. I highly recommend people who want to fork this repository set up a database and create a API for use instead of the way I do.

The usage of Legion Artifact Calculator is simple.
First, in the index.html, you can create wrapper: 
```<div class="wrapper wrapper-X"></div>``` where X is the number of your target spec.
Then, init the wrapper by: ```makeSVG(dataX, ".wrapper-X", link-color);```.

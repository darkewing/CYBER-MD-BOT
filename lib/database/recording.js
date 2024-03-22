/**

* @project_name : CYBER-MD
* @Developer : Maher-Zubair
* @Version : v.1.5.3
* @license : Apache-2.0

This Project Is Under Apache-2.0 License.
So, No One Have Permission To Copy This Project,
Reupload, Reversed Engineering And Any Kind Of Deobfuscation.
Otherwise, A Legal Github Copyright Action Will Be Taken Against You
Which Result In Removing The Copied Project And Permanantly Banning Of Your Account.
*CYBER-DEXTER

**/

const mongoose = require("mongoose");
const WaSchema1 = new mongoose.Schema({
  id: { type: String, required: true, unique: true, default: "record" },
  presence1: { type: String, default: "false" },
});
const arecording = mongoose.model("Arecording", WaSchema1);
module.exports = { arecording};

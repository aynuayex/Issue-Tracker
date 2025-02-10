const { Schema, model } = require("mongoose");

const issueSchema = new Schema({
  projectId: {type: "ObjectId", ref: "Project", required: true},
  issue_title: { type: String, required: true },
  issue_text: { type: String, required: true },
  created_by: { type: String, required: true },
  assigned_to: {type: String, default: ""},
  open: {type: Boolean, default: true},
  status_text: {type: String, default: ""},
  //   created_on: {type: Date, default: Date.now},
  //   updated_on: {type: Date, default: Date.now},
}, {
    timestamps: {
        createdAt: "created_on",
        updatedAt: "updated_on",
    }
});

module.exports = model("Issue", issueSchema);

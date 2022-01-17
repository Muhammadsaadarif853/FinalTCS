const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ClassSchema = new Schema({
  name: {
    type: String,
    max: 40,
  },
  courses: [
    {
      courseid: {
        type: String,
      },
      name: {
        type: String,
      },
      teacherid: {
        tid: {
          type: Schema.Types.ObjectId,
          ref: "teacher",
        },
      },
      students: [
        {
          sid: {
            type: Schema.Types.ObjectId,
            ref: "student",
          },
        },
      ],
      quizes: [
        {
          question: [
            {
              type: String,
            },
          ],
          answers: [
            {
              type: String,
            },
          ],
          totalmarks: {
            type: Number,
          },
        },
      ],
      assignment: [
        {
          Number: {
            type: Number,
          },
          Questions: [
            {
              question: {
                type: String,
              },
              marks: {
                type: Number,
              },
            },
          ],
          Attempted: [
            {
              studentid: {
                type: String,
              },
              file: {
                type: String,
              },
              filename: {
                type: String,
              },
            },
          ],
          Material: [],
          Results: [
            {
              studentid: {
                type: String,
              },
              GPA: {
                type: Number,
              },
            },
          ],
        },
      ],
    },
  ],
});

module.exports = Class = mongoose.model("class", ClassSchema);

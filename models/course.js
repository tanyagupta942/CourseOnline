let mongoose = require("mongoose");

let courseSchema = new mongoose.Schema({
    course_title: String,
    course_views: String,
    course_img: String,
    course_desc: String,
    course_tags: [],
    course_published: String,
    course_updated: String,
    course_size: String,
    course_link: String,
    course_category: String,
    course_download_link: String,
    related_posts: [[]]
});

module.exports = mongoose.model("Course", courseSchema);

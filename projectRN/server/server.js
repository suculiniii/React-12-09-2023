const express = require('express');
const app = express();
const PORT = 5000;

app.get("/api", (req, res) => {
    res.json({users: [{"video_title":"phasellus sit amet erat nulla tempus vivamus in felis eu sapien cursus vestibulum proin","video_duration":755,"video_views":309710,"video_likes":3495,"video_dislikes":280,"video_comments":407,"video_upload_date":"10/3/2016"},
    {"video_title":"diam vitae quam suspendisse potenti nullam porttitor lacus at turpis donec posuere metus vitae","video_duration":1591,"video_views":299589,"video_likes":593,"video_dislikes":100,"video_comments":529,"video_upload_date":"1/22/2022"},
    {"video_title":"elementum nullam varius nulla facilisi cras non velit nec nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus vel","video_duration":1053,"video_views":722897,"video_likes":8703,"video_dislikes":991,"video_comments":574,"video_upload_date":"9/26/2018"},
    {"video_title":"faucibus orci luctus et ultrices posuere cubilia curae duis faucibus accumsan odio curabitur convallis duis consequat dui","video_duration":1227,"video_views":437765,"video_likes":8017,"video_dislikes":86,"video_comments":809,"video_upload_date":"6/1/2010"},
    {"video_title":"vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae duis faucibus","video_duration":1642,"video_views":22865,"video_likes":8087,"video_dislikes":317,"video_comments":74,"video_upload_date":"11/4/2014"},
    {"video_title":"quam sapien varius ut blandit non interdum in ante vestibulum ante ipsum primis in faucibus orci luctus et ultrices","video_duration":553,"video_views":148693,"video_likes":9252,"video_dislikes":524,"video_comments":738,"video_upload_date":"10/2/2010"},
    {"video_title":"ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet","video_duration":583,"video_views":795145,"video_likes":9195,"video_dislikes":952,"video_comments":29,"video_upload_date":"2/19/2015"},
    {"video_title":"bibendum morbi non quam nec dui luctus rutrum nulla tellus in sagittis dui vel","video_duration":763,"video_views":772031,"video_likes":4194,"video_dislikes":622,"video_comments":384,"video_upload_date":"7/17/2014"},
    {"video_title":"maecenas tristique est et tempus semper est quam pharetra magna ac","video_duration":1210,"video_views":849616,"video_likes":666,"video_dislikes":312,"video_comments":285,"video_upload_date":"1/18/2014"},
    {"video_title":"parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur","video_duration":1274,"video_views":884129,"video_likes":9331,"video_dislikes":31,"video_comments":179,"video_upload_date":"11/8/2011"}]})
})

app.listen(PORT, console.log(`node server of ${PORT}`));
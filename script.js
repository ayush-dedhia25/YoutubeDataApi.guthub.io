$(document).ready(function() {

   $("#search").click(function() {
      const query = $("#query").val();
      const API_KEY = "AIzaSyCUwT4UR5Wnhglu5GtpHxcARkK9Na9uePA";
      const URL = "https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q="+query+"&key="+API_KEY;
      let result = "";
      
      fetch(URL)
      .then(res => res.json())
      .then(data => {
         for (let i = 0; i < data.items.length; i++) {
            const id = data.items[i].id.videoId;
            const title = data.items[i].snippet.title;
            const description = data.items[i].snippet.description;
            const thumbnail = data.items[i].snippet.thumbnails.default.url;
            const channel_owner = data.items[i].snippet.channelTitle;
            const link = "https://www.youtube.com/watch?v="+id;

            result = `
               <div class="col-lg-4 col-md-4 col-sm-12 col-12 mb-5">
                  <div class="card" style="width: 18rem;">
                     <img class="card-img-top" src="${thumbnail}" alt="Card image cap">
                     <div class="card-body">
                        <h5 class="card-title">${title}</h5>
                        <p class="card-text">${description}</p>
                        <a href="${link}" class="btn btn-primary">View on Youtube</a>
                     </div>
                  </div>
               </div>
            `;
            $("#video_container").append(result);
         }
      })
      .catch(err => alert("Error occured!"));
   });

});
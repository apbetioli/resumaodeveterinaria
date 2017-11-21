
$(function() {


  /** reponsive videos **/
  $(".post-cover, .post-content").fitVids();

  if($(".js-posts").length > 0) {
    $(".js-posts").imagesLoaded(function() {
      var container = document.querySelector('.js-posts');
      new Masonry( container, {
        itemSelector: '.js-post'
      });
    });
  }

  $(".posts .post-cover").each(function() {
    // image cover
    var $cover = $("img", $(this));
    if($cover && $cover.length == 1) {
      $(this).html(
              "<img src='" + $cover.attr("src") + "' />" +
                  "<div class='post-image-overlay'>" +
                    "<a href='" + $cover.attr("src") + "' class='preview' data-lightbox='image-" + $(this).data("post") + "'><span class='fa fa-search'></span></a>" +
                    "<a href='" + $(this).data("url") + "' class='link'><span class='fa fa-link'></a></span>" +
                  "</div>").removeClass("hide");
    }

    var $videoCover = $(".fluid-width-video-wrapper", $(this));
    if($videoCover && $videoCover.length == 1) {
      $(this).removeClass("hide");
    }

    var $iframeCover = $("iframe[src*='soundcloud.com']", $(this));
    if($iframeCover && $iframeCover.length == 1) {
      $(this).removeClass("hide");
    }
  });

  /* image lightbox */
  $(".post-content").imagesLoaded(function() {
    $(".post-content img").each(function() {
      var height = $(this).height();
      var width = $(this).width();
      $(this).wrap($("<div class='post-image'></div>").css("height", height).css("width", width));
      $(this).after("<a href='" + $(this).attr("src") + "' data-lightbox='image-post'><div class='post-image-overlay'></div></a>")
    });
  });

  // responsive google map
  $("iframe[src*='google.com']").each(function() {
    $(this).wrap($("<div class='google-map'></div>"));
  });

  // scroll up plugin
  $().showUp('.navbar', {
    upClass: '{{upClass}}',
    downClass: '{{downClass}}'
  });


  if($("#disqus_thread").length > 0) {
    // disqus
    (function() {
      var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
      dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
      (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
    })();
  }

});

function onSuccess(data) {
    var $result = $('#tags');
    console.log($result);
    $.each(data.tags, function (i, tag) {
        $result.append('<li><a href="/tag/' + tag.slug + '/">' + tag.name + '</a></li>');
    });
};

jQuery(document).ready(function () {
    $.get(
        ghost.url.api('tags', {
            limit: 'all',
            order: 'name ASC'
        })
    ).done(onSuccess);
});


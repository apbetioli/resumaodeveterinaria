function onSuccess(data) {
    var $result = $('#tags');
    $.each(data.tags, function (i, tag) {
        $result.append('<div><a class="badge badge-primary" href="/tag/' + tag.slug + '/">' + tag.name + '</a></div>');
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

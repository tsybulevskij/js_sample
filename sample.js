var data = new FormData();
data.append('links', input);
$.ajax({
    type: 'POST',
    url: '/ajax/add-links',
    processData: false,
    contentType: false,
    data: data
}).done(function (data) {
    if(typeof(data) !== 'object')
        return;
    if (data.status == 1) {
        reportProgress('Links are added', true);
        $('#pages').DataTable().ajax.reload(false);
    } else {
        reportProgress(data.errors, false);
    }
}).fail(function () {
    reportProgress('Failed to add links', false);
});

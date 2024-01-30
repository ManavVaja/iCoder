var data = 'https://api-ninjas.com';
var category = 'nature'
$.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/randomimage?category=' + category,
    headers: { 'X-Api-Key': 'egOzLOGd0Y1quVRLudeWRQ==ciuQSgOndtgu462p', 'Accept': 'image/jpg'},
    success: function(result) {
        console.log(result);
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
});
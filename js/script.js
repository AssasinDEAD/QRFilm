$(document).ready(function () {

   let count = 0

   $('.comment_btn').on("click", function () {
      count++
      $('.comment_place').append(function (index) {
         return $('<p>', {
            text: 'Гость ' + count + ': ' + $(".comment_form").val() + ''
         })
      });
      $(".comment_form").val('')
   })

});
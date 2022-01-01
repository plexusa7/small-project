// hyperlink page
const classSuperLink = document.getElementById("app-hyperlink")
function renderUrl() {
    for (let i = 0; i < super_link.length; i++) {
        // Page hyperlink
        classSuperLink.innerHTML += `
        <li class="content">
            <a target="_blank" class="title btn hyper_link_btn" href="${super_link[i]}">
                <i class="far fa-link me-1 small"></i>
                ${title_name[i]}
            </a>
        </li>`
    }
}
renderUrl();


// Total Link (+5)
const countUrl = document.querySelector(".count-link").innerHTML = `
    Total Link
    <span class="text-danger counter">36</span>`
;


// Search Box
$(document).ready(function(){
    $('#search').keyup(function(){
        // Search text
        var text = $(this).val();
        // Hide all content class element
        $('.content').hide();
        // Search 
        $('.content .title:contains("'+text+'")').closest('.content').show();
    });

    $.expr[":"].contains = $.expr.createPseudo(function(arg) {
        return function( elem ) {
            return $(elem).text().toUpperCase().indexOf(arg.toUpperCase()) >= 0;
        };
    });
});

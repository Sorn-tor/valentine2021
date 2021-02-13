
function secondsDiff(d1, d2) {
let secDiff = Math.floor( ( d1 - d2) / 1000 );
return secDiff;
}

function minutesDiff(d1, d2) {
    let seconds = secondsDiff(d1, d2);
    let minutesDiff = Math.floor( seconds / 60 );
    return minutesDiff;
}

function hoursDiff(d1, d2) {
let minutes = minutesDiff(d1, d2);
let hoursDiff = Math.floor( minutes / 60 );
return hoursDiff;
}

function daysDiff(d1, d2) {
let hours = hoursDiff(d1, d2);
let daysDiff = Math.floor( hours / 24 );
return daysDiff;
}

function fromFeb3(){
    var today = new Date();
    var feb3 = new Date(2018, 1, 3, 14, 0, 0, 0);
    var result = daysDiff(today, feb3).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return result;
}


 
$(function() {
    $('#date-from-feb3').append('<div class="date-text">'+fromFeb3() + ' days since </div>').append("<a href='javascript:void(0);' onclick='ajudaUpload()' class='show-hint'>...</a>")
        .append("<div id='the-hint'><br>3 Feb, 2018.</div>");

    
});

function ajudaUpload(){
    console.log('tr');
    $('.show-hint').hide();
    $('#the-hint').css('display', 'inline');
    return false;
}
function sendEmail() { 
    Email.send({
        Host : "smtp.gmail.com",
        Username : "temp.sorn@gmail.com",
        Password : "ThisMailIsTemporary",
        To : 'sorntan19@gmail.com',
        From : "love@gmail.com",
        Subject : "test",
        Body : "unknown"
    }).then(
      message => alert(message)
    );
    // Email.send({

    //     To : 'sorntan19@gmail.com',
    //     From : "nong.tor331@gmail.com",
    //     Subject : "Test Email",
    //     Body : "<html><h2>Header</h2><strong>Bold text</strong><br></br><em>Italic</em></html>"
    //     }).then(
    //         message => alert("mail sent successfully")
    //     );
} 
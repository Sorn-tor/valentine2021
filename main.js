
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

    $('#password-submit').on('click', function(){
        logIn();
    });
});

function logIn(){
    event.preventDefault();
    let userPassword = $('#input-password').val();
    let passwordToLogIn = "SomeRandomPassword";
    if (userPassword == passwordToLogIn){
        $('#authentication').hide();
        $('#main-wrapper').show();

    }
    return false;
}

function ajudaUpload(){
    console.log('tr');
    $('.show-hint').hide();
    $('#the-hint').css('display', 'inline');
    return false;
}

function getRandomArbitary (min, max) {
    return Math.random() * (max - min) + min;
}

// function sendEmail() { 

//     var sp = [
//         {'title': '#1',
//         'imagePath': 'https://raw.githubusercontent.com/Sorn-tor/valentine2021/master/images/2020lastphoto.jpeg',
//         'imageName': '2020lastphoto.jpeg',
//         'caption': 'ภาพที่ถ่ายตอนอยู่ด้วยกันภาพสุดท้ายปี2020',
//         },
//         {'title': '#2',
//         'imagePath': 'https://raw.githubusercontent.com/Sorn-tor/valentine2021/master/images/2_1.jpeg',
//         'imageName': '2_1.jpeg',
//         'caption': 'รูปแรกในมหาลัย @ศกร',
//         },
//         {'title': '#3',
//         'imagePath': 'https://raw.githubusercontent.com/Sorn-tor/valentine2021/master/images/2_2.jpeg',
//         'imageName': '2_2.jpeg',
//         'caption': '@สวยป๋วน',
//         },
//         {'title': '#4',
//         'imagePath': 'https://raw.githubusercontent.com/Sorn-tor/valentine2021/master/images/birthday.JPG',
//         'imageName': 'birthday.JPG',
//         'caption': 'วันเกิดหมูอ้น 21 กันยา 63 ที่ MK',
//         },
//         {'title': '#5',
//         'imagePath': 'https://raw.githubusercontent.com/Sorn-tor/valentine2021/master/images/firstPanootphoto.JPG',
//         'imageName': 'firstPanootphoto.JPG',
//         'caption': 'นี่คือภาพแรก 55555 ขอป้องมา',
//         },
//     ];
//     var rani = Math.floor(getRandomArbitary(0,5));
//     let emailToSend = 'panootpanoot@gmail.com';
//     console.log(rani);
// } 

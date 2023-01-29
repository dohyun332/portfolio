$(document).ready(function() {
    // home 슬라이드 페이드인 아웃
    let fadeIdx = 0;
    let panLength = $(".pan").length;
    fadeInOut();
    setInterval(function() {
        fadeInOut();
    }, 6000);

    function fadeInOut() {
        $(".pan").eq(fadeIdx % panLength).fadeOut(2000);
        $(".pan").eq((fadeIdx+1) % panLength).delay(2000).fadeIn(2000);
        fadeIdx+=1;
    }

    // 어사이드 바로가기
    const home = $("#home");
    const about = $("#about");
    const skills = $("#skills");
    const portfolio1 = $("#portfolio1");
    const portfolio2 = $("#portfolio2");
    const contact = $("#contact");
    $(".aside_menuli").click(function() {
        if($(this).text() == 'HOME') {
            $('html').animate({
                scrollTop: home.offset().top
            }, 500);
        } else if($(this).text() == 'ABOUT') {
            $('html').animate({
                scrollTop: about.offset().top
            }, 500);
        } else if($(this).text() == 'SKILLS') {
            $('html').animate({
                scrollTop: skills.offset().top
            }, 500);
        } else if($(this).text() == 'PORTFORIO 1') {
            $('html').animate({
                scrollTop: portfolio1.offset().top
            }, 500);
        } else if($(this).text() == 'PORTFORIO 2') {
            $('html').animate({
                scrollTop: portfolio2.offset().top
            }, 500);
        } else if($(this).text() == 'CONTACT') {
            $('html').animate({
                scrollTop: contact.offset().top
            }, 500);
        }
    });

    let section = $(".section");
    let section_len = section.length;
    let section_height = section.eq(1).offset().top;
    let initial_pos = $('html').scrollTop();
    let chg_pos;
    let sectionIdx;
    for(let i=0; i<section_len; i++) {
        // console.log("pos", section.eq(i).offset().top);
        if((i*section_height+(section_height/2)) > initial_pos) {
            sectionIdx=i;
            break;
        }
    }
    let scrollChk;
    let heightChk;
    $(window).on("mousewheel", function() {
        clearTimeout(heightChk);
        heightChk = setTimeout(function(){
            // console.log($('html').scrollTop());
            clearTimeout(scrollChk);
            scrollChk = setTimeout(function(){
                scrollOnce();
            }, 250);
        }, 10);
    })
        
    function scrollOnce() {
        chg_pos = $('html').scrollTop();
        console.log('initial', initial_pos);
        console.log('chg', chg_pos);

        if(chg_pos > initial_pos) {
            sectionIdx+=1;
            if(sectionIdx>(section_len-1)) sectionIdx=(section_len-1);
        } else if(chg_pos < initial_pos) {
            sectionIdx-=1;
            if(sectionIdx<0) sectionIdx=0;
        }
        initial_pos = section.eq(sectionIdx).offset().top;
        console.log(sectionIdx, section.eq(sectionIdx));
        $('html').animate({
            scrollTop: section.eq(sectionIdx).offset().top
        }, 100);

    }
})
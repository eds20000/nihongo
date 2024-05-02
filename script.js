var traloi1 = document.querySelectorAll('.test1-1');
var dapan1 =  document.querySelectorAll('.answer1-1');

var traloi2 = document.querySelectorAll('.test2-1');
var dapan2 =  document.querySelectorAll('.answer2-1');

var score_test1 = 0;
var score_test2 = 0;

document.querySelector('.result-btn').onclick = function(){
    score_test1 = 0;
    score_test2 = 0;

    for ( let i =0; i < traloi1.length;++i){
        if (traloi1[i].value===dapan1[i].value && traloi1[i].value != 0 ){
            score_test1+=1;
        }
    }

    var traloi2 = document.querySelectorAll('.test2-1');
    console.log(traloi1);
    var dapan2 =  document.querySelectorAll('.answer2-1');
    console.log(dapan1);
    for ( let i =0; i < traloi2.length;++i){
        if (traloi2[i].value===dapan2[i].value && traloi2[i].value != 0 ){
            score_test2+=1;
        }
    }


    document.querySelector('.test-score_result').innerHTML = score_test1;
    document.querySelector('.test2-score_result').innerHTML = score_test2;
}

// Remove result button

document.querySelector('.result-btn_remove').onclick = function(){

    for ( let i =0; i < traloi1.length;++i){
        traloi1[i].value='';
        dapan1[i].value='';
        
    }
    for ( let i =0; i < traloi2.length;++i){
        traloi2[i].value='';
        dapan2[i].value='';
    }
    score_test1 = 0;
    score_test2 = 0;
    document.querySelector('.test-score_result').innerHTML = score_test1;
    document.querySelector('.test2-score_result').innerHTML = score_test2;
}





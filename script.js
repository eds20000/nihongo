var traloi1 = document.querySelectorAll('.test1-1');
var dapan1 =  document.querySelectorAll('.answer1-1');

var traloi2 = document.querySelectorAll('.test2-1');
var dapan2 =  document.querySelectorAll('.answer2-1');

var score_test1 = 0;
var score_test2 = 0;
var score_test1_total = 0;
var score_test2_total = 0;
document.querySelector('.result-btn').onclick = function(){
    score_test1 = 0;
    score_test2 = 0;
    score_test1_total=0;
    score_test2_total=0;
    for ( let i =0; i < traloi1.length;++i){
        
        if (traloi1[i].value===dapan1[i].value && traloi1[i].value != 0 ){
            score_test1+=1;
            traloi1[i].classList.add('test-right')    
            score_test1_total+=1;
        }
        else if(traloi1[i].value!==dapan1[i].value && traloi1[i].value != 0){
            traloi1[i].classList.add('test-wrong') 
            score_test1_total+=1;
        }
    }
    for ( let i =0; i < traloi2.length;++i){
        if (traloi2[i].value===dapan2[i].value && traloi2[i].value != 0 ){
            score_test2+=1;
            traloi2[i].classList.add('test-right')
            score_test2_total+=1;
        }
        else if(traloi2[i].value!==dapan2[i].value && traloi2[i].value != 0){
            traloi2[i].classList.add('test-wrong')
            score_test2_total+=1; 
        }
    }
       


    document.querySelector('.test-score_result').innerHTML = score_test1;
    document.querySelector(".answer-score_test1").innerHTML = score_test1_total;
    document.querySelector(".answer-score_test2").innerHTML = score_test2_total;
    document.querySelector('.test2-score_result').innerHTML = score_test2;
}

// Remove result button

document.querySelector('.result-btn_remove').onclick = function(){

    for ( let i =0; i < traloi1.length;++i){
        traloi1[i].value='';
        dapan1[i].value='';
        traloi1[i].classList.remove('test-wrong')
        traloi1[i].classList.remove('test-right') 


        
    }
    for ( let i =0; i < traloi2.length;++i){
        traloi2[i].value='';
        dapan2[i].value='';
        traloi2[i].classList.remove('test-wrong')
        traloi2[i].classList.remove('test-right') 
    }
    score_test1 = 0;
    score_test2 = 0;
    document.querySelector('.test-score_result').innerHTML = score_test1;
    document.querySelector('.test2-score_result').innerHTML = score_test2;
}





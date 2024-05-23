var traloi1 = document.querySelectorAll('.test1-1');
var dapan1 =  document.querySelectorAll('.answer1-1');
var diem = document.querySelectorAll('.score-input')

var traloi2 = document.querySelectorAll('.test1-2');
var dapan2 =  document.querySelectorAll('.answer1-2');

var traloi3 = document.querySelectorAll('.test2-1');
var dapan3 =  document.querySelectorAll('.answer2-1');

var score_test1 = 0;
var score_test2 = 0;
var score_test3 = 0;

var score_test1_total = 60;
var score_test2_total = 60;
var score_test3_total = 60;

document.querySelector(".answer-score_test1").innerHTML = score_test1_total;
document.querySelector(".answer-score_test2").innerHTML = score_test2_total;
document.querySelector(".answer-score_test3").innerHTML = score_test3_total;

document.querySelector('.result-btn').onclick = function(){
    score_test1 = 0;
    score_test2 = 0;
    score_test3 = 0;

    

    for ( let i =0; i < traloi1.length;++i){
        score_test1_input = Number(dapan1[i].parentElement.querySelector(".score-input").value);
        if (traloi1[i].value===dapan1[i].value && traloi1[i].value != 0 ){
            if(score_test1_input===0){
                score_test1 += 1;
            }
            else{
                score_test1+=score_test1_input;
            }
            traloi1[i].classList.add('test-right')
            traloi1[i].classList.remove('test-wrong')    
            
        }
        else if(traloi1[i].value!==dapan1[i].value && traloi1[i].value != 0){
            traloi1[i].classList.add('test-wrong') 
            
        }
    }
    for ( let i =0; i < traloi2.length;++i){
        
        score_test2_input = Number(dapan2[i].parentElement.querySelector(".score-input").value);
        if (traloi2[i].value===dapan2[i].value && traloi2[i].value != 0 ){

            if(score_test2_input===0){
                score_test2 += 1;
            }
            else{
                score_test2+=score_test2_input;
            }
            traloi2[i].classList.add('test-right')
            traloi2[i].classList.remove('test-wrong')
            
        }
        else if(traloi2[i].value!==dapan2[i].value && traloi2[i].value != 0){
            traloi2[i].classList.add('test-wrong')
            
        }
    }

    for ( let i =0; i < traloi3.length;++i){

        score_test3_input = Number(dapan3[i].parentElement.querySelector(".score-input").value);
        if (traloi3[i].value===dapan3[i].value && traloi3[i].value != 0 ){

            if(score_test3_input===0){
                score_test3 += 1;
            }
            else{
                score_test3+=score_test3_input;
            }
            traloi3[i].classList.add('test-right')
            traloi3[i].classList.remove('test-wrong')
            
        }
        else if(traloi3[i].value!==dapan3[i].value && traloi3[i].value != 0){
            traloi3[i].classList.add('test-wrong')
            
        }
    }
       


    document.querySelector('.test1-score_result').innerHTML = score_test1;
    document.querySelector('.test2-score_result').innerHTML = score_test2;
    document.querySelector('.test3-score_result').innerHTML = score_test3;
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

    for ( let i =0; i < traloi3.length;++i){
        traloi3[i].value='';
        dapan3[i].value='';
        traloi3[i].classList.remove('test-wrong')
        traloi3[i].classList.remove('test-right') 
    }
    score_test1 = 0;
    score_test2 = 0;
    score_test3 = 0;

    document.querySelector('.test-score_result').innerHTML = score_test1;
    document.querySelector('.test2-score_result').innerHTML = score_test2;
}

//Score hide

document.querySelector('.result-btn_score').addEventListener('click',function(){
    console.log(diem)
    diem.forEach(function (a) {
            a.classList.toggle('hide');
        } 
    )
}
)  





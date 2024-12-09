

const questions = document.querySelector('#faqs');

// 


async function getQuestions(){
    let responce = await fetch('./data/cardsInformation.json');
    let data = await responce.json();
    
    displayQuestions(data.faqs);
}

const displayQuestions = (d)=>{
    d.forEach(element => {
        let card = document.createElement('div');
        let titleDiv = document.createElement('div')
        let titleH5 = document.createElement('h5');
        let smalltext = document.createElement('p');
        let contentDiv = document.createElement('div');
        let content = document.createElement('p');

        card.id = 'questions';
        card.classList.add('content-flex-column2');
        titleDiv.classList.add('titleDiv');
        contentDiv.classList.add('contentDiv');
        contentDiv.style.display = 'none';
        // smalltext.style.display = 'none';

        titleH5.innerHTML=`${element.question}`;
        smalltext.innerHTML = '';
        content.innerHTML = `${element.answer}`;

        card.addEventListener('click', ()=>{
            contentDiv.style.display = contentDiv.style.display === 'none'? 'block':'none';
        })

        titleH5.style.fontWeight = '350';
        smalltext.style.fontSize = '12px';
        smalltext.style.cursor = 'pointer';
        titleDiv.style.cursor = 'pointer';
        // smalltext.style.fontWeight = 'bold';
        // smalltext.style.textShadow = '1px 1px #368977'
        // smalltext.style.backgroundColor = '';
        smalltext.style.color = '#13312B';
        smalltext.style.padding = '5px 10px '
        // smalltext.style.border = "solid 2px #8DCBD8"
        // smalltext.style.borderRadius = '10px'

        titleDiv.addEventListener('mouseover', () =>{
            if (contentDiv.style.display === 'block'){
                smalltext.innerHTML = `show less`;
            }else{
                smalltext.innerHTML = `show more`;
            }
            

        })
        titleDiv.addEventListener('mouseout', ()=>{
            smalltext.innerHTML = '';
           
        })

        
        card.appendChild(titleDiv);
        
        card.appendChild(contentDiv);
        titleDiv.appendChild(titleH5);
        titleDiv.appendChild(smalltext);
        contentDiv.appendChild(content);

        questions.appendChild(card);

    });
}



getQuestions();
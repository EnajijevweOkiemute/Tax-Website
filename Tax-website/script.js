    let paragraph = document.querySelector('p');
    let span = document.querySelector('span');
    let form = document.querySelector('form');
    let userName = document.querySelector('input');
    let password = document.querySelector('input')[1];
    
    form.addEventListener('submit', (e)=>{    
        if(userName.value.length >= 10 || password.value.length >= 10){
            e.preventDefault();
            span.innerText = 'Username must be less than 10 characters';
            span.style.color = '#ff0000';
            }else if (userName.value != NaN || password != NaN){
                e.preventDefault();
                paragraph.innerText = 'Numbers not allowed as usernames and passwords';
                paragraph.style.color = '#ff0000';
            }else{
                paragraph.innerText = '';
            }
            })
    
        
    
    

    
$(document).ready(function() {

    $('.form-contact__input').on('change', function() {
        if ($(this).val().length > 0) {
            $(this).addClass('filled');
        }
    })

    $('.slider').slick({
        arrows: false,
        autoplay:true,
        infinite: true,
        speed: 1000,
        fade: true
    });

    let xhr = new XMLHttpRequest();

    xhr.open('Get', 'https://gorest.co.in/public-api/users?_format=json&access-token=tU1n8PfZEZYwHv-gj3OX87eaVcdIYYdfdKFC');
    
    
    xhr.responseType = 'json';

    xhr.onreadystatechange = function() { 
        if (xhr.readyState != 4) return;
        
        if (xhr.status != 200) {
            console.log( xhr.status + ': ' + xhr.statusText ); 
          } else {
            console.log( xhr.response); 
            let people = xhr.response.result,
            target = document.getElementById('juriUsers');


            for(let i = 0; i < 3; i++){
                let  person = people[i];
            // }
            


            // people.forEach((person) => {
                // if (person.status == 'active'){
                    

                    let html = document.createElement('div');
                    html.classList.add('user');
                    html.classList.add('user--round')

                    html.innerHTML = `
                    
                        <div class="user__wrap"><img class="user__img" src="https://picsum.photos/seed/picsum/300/300" alt="${person.first_name} ${person.last_name}"></div>

                        <div class="user__name" >${person.first_name} ${person.last_name}</div>
                        <div class="user__position">${person.address}</div>
                    
                    `;
                    console.log(person.last_name);

                    target.append(html);
                
            };

          }
        }

      xhr.send();

})


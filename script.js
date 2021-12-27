const hour = document.querySelector('.h'),
      min =document.querySelector('.m'),
      sec = document.querySelector('.s'), 
      hoursNum = document.querySelector('.hours'),
      minNum = document.querySelector('.minutes');


    //   let date = new Date();

    

        function clock() {
            let time = new Date(),
            hours = time.getHours() * 30,
            minutes = time.getMinutes() * 6,
            second = time.getSeconds() * 6;



            hour.style = `transform: rotate(${hours}deg)`;
            min.style = `transform: rotate(${minutes}deg)`;
            sec.style = `transform: rotate(${second}deg)`;

            hoursNum.innerHTML = time.getHours(); 
             minNum.innerHTML = time.getMinutes();

             if (time.getHours() < 10) {
                hoursNum.innerHTML = '0' + time.getHours()
               
            }else {
                hoursNum.innerHTML = time.getHours()
            }
            
            
            if(time.getMinutes() < 10 ) {
                minNum.innerHTML = '0' + time.getMinutes()
            } else {
                minNum.innerHTML = time.getMinutes()
            }

            setTimeout(() => clock(), 1000)  /* Рекурсия это функция внутри себя вызывает саму себя */
        }
      
        clock();


        // setTimeout(() => {
        //     console.log('asdasd');
        // }, 5000)


        // setInterval(() => {
        //     console.log('qweqwe');
        // }, 1000)






const tabsItem = document.querySelectorAll('.tabsItem'),
    tabsContent = document.querySelectorAll('.tabsContentItem')

    // console.log(tabsItem.length);
    // console.log(tansContent.length);

    tabsItem.forEach((item, i ) => {
       item.addEventListener('click', function() {
           removeActiveClass()
           this.classList.add('active');
           tabsContent[i].classList.add('active');
       })
    })

    function removeActiveClass() {
        tabsItem.forEach((item, i) => {
            item.classList.remove('active');
            tabsContent[i].classList.remove('active');
        })
    }


    const watchBtn = document.querySelector('.stopwatch__btn'),
          secondWatch = document.querySelector('.stopwatch__seconds'),
          minuteWatch = document.querySelector('.stopwatch__minutes'),
          hoursWatch = document.querySelector('.stopwatch__hours');

          watchBtn.addEventListener('click', () => {
              if(watchBtn.innerHTML == 'start') {
                  let currentWatch = 0;
                  setTimeout(() => timer(watchBtn, currentWatch), 1000)
                  watchBtn.innerHTML = 'stop'
              }else if (watchBtn.innerHTML == 'stop') {
                  watchBtn.innerHTML = 'reset'
              }else {
                  watchBtn.innerHTML = 'start'
              }
          })


          function timer(item, i) {
              if(item.innerHTML == 'stop') {
                  if(i == 60) {
                      i = 0;
                      secondWatch.innerHTML = i;

                      if(minuteWatch.innerHTML == 59) {
                          minuteWatch.innerHTML = 0;
                          hoursWatch.innerHTML++
                      }else {
                          minuteWatch++
                      }
                  }else{
                      i++
                      secondWatch.innerHTML = i;
                  }
                  setTimeout(() => timer(item, i), 1000)
              }
          }
        
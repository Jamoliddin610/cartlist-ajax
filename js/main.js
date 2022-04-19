let cart_list = document.querySelector('.data__list');
function renderHTML() {
  fetch("https://reqres.in/api/users")
    .then((res) => res.json())

    .then((dat) => {
      console.log(dat.data);
    dat.data.forEach((el)=> {
      console.log(el);
        let li = document.createElement('li')
        li.className = "data__item"
        li.innerHTML = `
            <div class="data__item_box item">
              <div class="item__img_name">
                <div class="item__img-box">
                  <img class="item__img" src="${el.avatar}" alt="img">
                </div>

                <div class="item__name-box">
                  <p class="item__name">${el.last_name}</p>
                  <p class="item__name-tit">${el.first_name}</p>
                </div>
              </div>

              <div class="item__content">
                <ul class="item__left_list">
                  <li class="item__left_item">
                    <p class="item__left_tit">Company</p>
                    <p class="item__right_tit">Epam</p>
                  </li>
                  <li class="item__left_item">
                    <p class="item__left_tit">Email</p>
                    <p class="item__right_tit">${el.email}</p>
                  </li>
                  <li class="item__left_item">
                    <p class="item__left_tit">Phone</p>
                    <p class="item__right_tit">999-876-654-321</p>
                  </li>
                  <li class="item__left_item">
                    <p class="item__left_tit">Website</p>
                    <p class="item__right_tit">kale.biz</p>
                  </li>
                </ul>
              </div>
            </div>
            <button class="removBtn">Remove</button>`;

        cart_list.appendChild(li)
      });

      let carts = document.querySelectorAll('.data__item');
      let btns = document.querySelectorAll('.removBtn');
      carts.forEach((item, i) => {
        btns.forEach((elem, idx) => {
          elem.addEventListener('click', () => {
            if (idx + 1 == i + 1) {
              item.remove()
            }
          })
        })
      })
    })
} renderHTML()

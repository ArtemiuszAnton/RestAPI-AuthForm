const btn = document.querySelector('button');

btn.addEventListener('click', async () => {
    const username = document.querySelector('.username').value;
    const email = document.querySelector('.email').value;
    const phone = document.querySelector('.phone').value;
    const pwd = document.querySelector('.pwd').value;

    const body = JSON.stringify({ username, email, phone, pwd });

    const response = await fetch('http://localhost:3002/user/reg', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: body
    })
    const json = await response.json();
    console.log(json);

    const p_id = document.querySelector('.id_p').innerHTML = json[0].id;
    const p_username = document.querySelector('.username_p').innerHTML = json[0].username;
    const p_phone = document.querySelector('.phone_p').innerHTML = json[0].phone;
    const p_email = document.querySelector('.email_p').innerHTML = json[0].email;
})
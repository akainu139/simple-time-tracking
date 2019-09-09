const usersDiv = document.getElementById("users");

const users = [
    {
        id: 1,
        firstName: "Ime1",
        lastName: "Prezime1",
        checkIns: [],
        checkOuts: [],
        status: true
    },
    {
        id: 2,
        firstName: "Ime2",
        lastName: "Prezime2",
        checkIns: [],
        checkOuts: [],
        status: true
    },
    {
        id: 3,
        firstName: "Ime3",
        lastName: "Prezime3",
        checkIns: [],
        checkOuts: [],
        status: true
    },
];

let output="";
users.forEach(user => {
    output += `
    <div class="user" id=${user.id}>
        <button class="checkIn">Prijava</button>
        <button class="checkOut">Odjava</button>
        <p>${user.firstName} ${user.lastName}</p>
        <p id="prijava${user.id}"></p>
        <p id="odjava${user.id}"></p>
    </div>
    `;
})
usersDiv.innerHTML = output;

const checkIns = Array.from(document.getElementsByClassName("checkIn"));
const checkOuts = Array.from(document.getElementsByClassName("checkOut"));

checkIns.forEach(checkIn => {
    checkIn.addEventListener("click", () => {
        const now = new Date();
        const time = `${now.getDate()}-${now.getMonth()}-${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
        const id = checkIn.parentElement.id;
        users.forEach(user => {
            if(user.id == id && user.status == true)
            {
                user.checkIns.push(time);
                user.status = !user.status;
                document.getElementById("prijava"+user.id).innerText = `Prijava: ${time}`;
                if(document.getElementById("odjava"+user.id).innerText !== '')
                {
                    document.getElementById("odjava"+user.id).innerText = '';
                }
                return;
            }
        })
    })
});

checkOuts.forEach(checkOut => {
    checkOut.addEventListener("click", () => {
        const now = new Date(); 
        const time = `${now.getDate()}-${now.getMonth()}-${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
        const id = checkOut.parentElement.id;
        users.forEach(user => {
            if(user.id == id && user.status == false)
            {
                user.checkOuts.push(time);
                user.status = !user.status;
                document.getElementById("odjava"+user.id).innerText = `Odjava: ${time}`;
                return;
            }
        })
    })
});


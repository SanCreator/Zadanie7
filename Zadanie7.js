let allList = ['san@mail.ru','san1@mail.ru','san2@mail.ru','san3@mail.ru','san4@mail.ru','san1@gmail.com','san2@gmail.com','san5@mail.ru','san6@mail.ru','san7@mail.ru','san8@mail.ru', 'san9@mail.ru', 'san10@mail.ru', 'san3@gmail.com'];
let blackList = ['san1@gmail.com','san2@gmail.com', 'san3@gmail.com'];
function getValidEmails() {
    return allList.filter((mail) => !blackList.includes(mail));
  };

console.log("Все электронные адреса", allList, "Черный список электронных адресов", blackList);
console.log("Все разрешенные электронные адреса", getValidEmails());
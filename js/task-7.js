const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];
let message = '';

const isLoginValid = function (login) {
  let isValidLogin = true;
  
  if (login.length < 4 || login.length > 16) {
    isValidLogin = false;
  }
  
  return isValidLogin;
};

const isLoginUnique = function (allLogins, login) {
  let issaValidLogin = true;
  
  for (const anyLogin of allLogins) {
    if (login === anyLogin) {
      issaValidLogin = false;
    };
  };
  return issaValidLogin;
};

const addLogin = function (allLogins, login) {
  let isValid = isLoginValid(login);
  let isUnique = isLoginUnique(allLogins, login);

  if (!isValid) {
    message = 'Ошибка! Логин должен быть от 4 до 16 символов.';
  }
  
  if (!isUnique) {
    message = 'Такой логин уже используется!';
  }

  if (isValid && isUnique) {
    logins.push(login);
    message = 'Логин успешно добавлен!';
  }

  return message;
};

console.log(addLogin(logins, 'robotGoogles')); // 'Такой логин уже используется!'
console.log(logins);
console.log(addLogin(logins, 'Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(logins);
console.log(addLogin(logins, 'Ajax')); // 'Логин успешно добавлен!'
console.log(logins);
console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(logins);
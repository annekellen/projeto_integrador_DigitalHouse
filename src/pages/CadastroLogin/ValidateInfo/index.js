export default function validateInfo(values) {
  let errors = {};

  if (!values.username.trim()) {
    errors.username = "Preencha o campo nome de usuário";
  }
  // else if (!/^[A-Za-z]+/.test(values.name.trim())) {
  //   errors.name = 'Enter a valid name';
  // }

  if (!values.email) {
    errors.email = "Preencha o campo E-mail";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "O endereço de E-mail é inválido";
  }
  if (!values.password) {
    errors.password = "Preencha o campo Senha";
  } else if (values.password.length < 6) {
    errors.password = "São necessários 6 ou mais caracteres";
  }

  if (!values.password2) {
    errors.password2 = "Preencha o campo Senha";
  } else if (values.password2 !== values.password) {
    errors.password2 = "As senhas não conferem";
  }
  return errors;
}

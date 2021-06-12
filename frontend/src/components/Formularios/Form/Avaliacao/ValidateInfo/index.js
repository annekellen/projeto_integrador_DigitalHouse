export default function validateInfo(values) {
    let errors = {};
  
    if (!values.username.trim()) {
      errors.username = "Preencha com o seu nome";
    }
    // else if (!/^[A-Za-z]+/.test(values.name.trim())) {
    //   errors.name = 'Enter a valid name';
    // }
  
    if (!values.email) {
      errors.email = "Preencha o campo E-mail";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "O endereço de E-mail é inválido";
    }
    if (!values.textarea) {
      errors.textarea = "Escreva aqui a sua mensagem";
    } //else if (values.textarea.length < 6) {
      //errors.textarea = "São necessários 6 ou mais caracteres";
    }

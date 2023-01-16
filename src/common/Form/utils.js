export const isEmailValid = (email) => {
  const validEmail =
    /^([\w]+[\.!#\$%&'\*\+-\/=\?\^_`{\|]{0,1})*[\w]+@{1}[\w]+([-\.][\w]+)+$/gim
  return validEmail.test(email)
}

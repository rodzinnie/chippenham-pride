const isEmailValid = (email) => {
  const validEmail =
    /^([\w]+[\.!#\$%&'\*\+-\/=\?\^_`{\|]{0,1})*[\w]+@{1}[\w]+([-\.][\w]+)+$/gim
  console.log('Tu coś', email.match(validEmail))
  return validEmail.test(email)
}

describe('IsEmailValid', () => {
  test('it should return false if username includes two @', () => {
    const input = 'abc@sdasd@mail.com'
    expect(isEmailValid(input)).toBeFalsy()
  })
  test('it should return false if username finishes with special sign', () => {
    const input = 'abc-@mail.com'
    expect(isEmailValid(input)).toBeFalsy()
  })
  test('it should return false if username does not have two special characters consecutively', () => {
    const input = 'abc..def@mail.com'
    expect(isEmailValid(input)).toBeFalsy()
  })
  test('it should return false if username starts with special character', () => {
    const input = '.abc@mail.com'
    expect(isEmailValid(input)).toBeFalsy()
  })
  test('it should return false if domain includes special character different than . or -', () => {
    const input = 'abc.def@mail#archive.com'
    expect(isEmailValid(input)).toBeFalsy()
  })
  test('it should return false if top-level domain is missing', () => {
    const input = 'abc.def@mail'
    expect(isEmailValid(input)).toBeFalsy()
  })
  test('it should return false if email finishes with special character', () => {
    const input = 'abc.def@mail.'
    expect(isEmailValid(input)).toBeFalsy()
  })
  test('it should return false if domain has two special characters consecutively', () => {
    const input = 'abc.def@mail..com'
    expect(isEmailValid(input)).toBeFalsy()
  })
  test('it should return true if domain includes hyphen', () => {
    const input = 'abc.def@mail-archive.com'
    expect(isEmailValid(input)).toBeTruthy()
  })
  test('it should return true if username includes + sign', () => {
    const input = 'abc.def+trele@mail.com'
    expect(isEmailValid(input)).toBeTruthy()
  })
  test('it should return true if email has multiple domains', () => {
    const input = 'costam@domena.co.uk'
    expect(isEmailValid(input)).toBeTruthy()
  })
  test('it should return true if username includes hyphen', () => {
    const input = 'abc_def@mail.com'
    expect(isEmailValid(input)).toBeTruthy()
  })
  test('it should return true if username includes dot', () => {
    const input = 'abc.def@mail.com'
    expect(isEmailValid(input)).toBeTruthy()
  })
})

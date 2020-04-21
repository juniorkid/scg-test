export default (index) => {
  console.log('index: ', index)
  return findXYZ(index)
}

const findXYZ = (index) => {
  if (index === 0) return 3
  else return findXYZ(index - 1) + ((index - 1) * 2)
}
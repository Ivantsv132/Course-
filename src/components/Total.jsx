const Total = ({ parts }) => {
  const total = parts.reduce((sum, part) => sum + part.exercises, 0)

  return <p>Número total de ejercicios: {total}</p>
}

export default Total

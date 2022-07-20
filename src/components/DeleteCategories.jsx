
export const DeleteCategories = ({ deleteAllCategories }) => {

  const deleteCategory = () => {
    deleteAllCategories([]);
  }

  return (
    <button onClick={ deleteCategory }>Limpiar Historial</button>
  )
}
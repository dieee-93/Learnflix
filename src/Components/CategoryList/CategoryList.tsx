import { useDeleteCategoryMutation, useGetCategoriesQuery } from '@/Context'
import { Box, Button, CircularProgress, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { NoInfo } from '../YoutubeCard/NoInfo'
import { BiPencil, BiTrash } from 'react-icons/bi'

const CategoryList = (): JSX.Element => {
  const { data: categories, isSuccess } = useGetCategoriesQuery()
  const [deleteCategory, { isLoading }] = useDeleteCategoryMutation()
  const handleDeleteCategory = async (id: string): Promise<void> => {
    try {
      await deleteCategory(id)
    } catch (error) {
      console.error('Error al eliminar la categoría:', error)
    }
  }

  if (isSuccess) {
    return <TableContainer component={Paper} sx={{ width: '80%' }}>
  <Table sx={{ minWidth: 650 }} aria-label="simple table">
    <TableHead>
      <TableRow>
      <TableCell>Categorias</TableCell>
      <TableCell align="right">Descripcion</TableCell>
      <TableCell align="right">Color</TableCell>
      <TableCell align="right">Action</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {categories.map((category) => (
        <TableRow
          key={category.id}
          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
          <TableCell component="th" scope="row">
            {category.name}
          </TableCell>
          <TableCell align="right">{category.description}</TableCell>
          <TableCell align="right" ><Box sx={{ backgroundColor: category.color }}>{category.color}</Box></TableCell>
          <TableCell align="right">
            <Button onClick={ () => { handleDeleteCategory(category.id).catch((error) => { console.error('Error al eliminar la categoria', error) }) }}>
                {isLoading ? <CircularProgress/> : <BiTrash/>}
            </Button>
            <Button>
                <BiPencil/>
            </Button>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
</TableContainer>
  } else {
    return <NoInfo/>
  }
}

export default CategoryList

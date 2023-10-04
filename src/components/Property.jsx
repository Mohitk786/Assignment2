import Card from './Card'
import { useParams } from 'react-router'
import { Hotels } from './Hotels'
const Property = (post) => {
    const {id} = useParams()
    const value = Hotels.filter((element)=>element.id===parseInt(id))
  return (
    <div className='flex justify-center gap-6 flex-wrap'>
    <Card {...value[0]}/>
    </div>
  )
}

export default Property
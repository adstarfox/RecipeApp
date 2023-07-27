
import './RecipeCard.css'
import { useNavigate } from 'react-router-dom'

const RecipeCard = ({recipe}) => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate(`/recipe/${recipe.recipe_id}`)
    }
    return (
        <div className='recipe-card'>
            <img src={recipe.image_url} alt={recipe.recipe_name} />
            <h2 className='food-title'>{recipe.recipe_name}</h2>
            <button className='blue-btn' onClick={()=>handleClick()}>See More</button>
        </div>
    )
}

export default RecipeCard
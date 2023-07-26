
import './RecipeCard.css'

const dummy = [{
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK6RUdKeSXk0X7Fj7U1gx06qN1U9tGOiUPyQ&usqp=CAU',
    name: 'Lasagna'
},
{img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK6RUdKeSXk0X7Fj7U1gx06qN1U9tGOiUPyQ&usqp=CAU',
name: 'Lasagna'},
{img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK6RUdKeSXk0X7Fj7U1gx06qN1U9tGOiUPyQ&usqp=CAU',
name: 'Lasagna'}]

const RecipeCard = () => {
    return (
        <>
        <div className='recipe-card'>
            <img src={dummy[0].img} alt={dummy[0].name} />
            <h2 className='food-title'>{dummy[0].name}</h2>
            <button className='blue-btn'>See More</button>
        </div>
        <div className='recipe-card'>
        <img src={dummy[0].img} alt={dummy[0].name} />
        <h2 className='food-title'>Triple Chocolate Mousse Cake</h2>
        <button className='blue-btn'>See More</button>
    </div>
    <div className='recipe-card'>
    <img src={dummy[0].img} alt={dummy[0].name} />
    <h2 className='food-title'>{dummy[0].name}</h2>
    <button className='blue-btn'>See More</button>
</div>
</>
    )
}

export default RecipeCard
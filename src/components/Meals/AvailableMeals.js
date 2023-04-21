import classes from './AvailableMeals.module.css'
const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'vadapov',
      description: 'buns with allu tikki',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Maggie',
      description: 'A german specialty!',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Idli Vada',
      description: 'South Indian food',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
    },
  ];

const AvailableMeals=()=>{
    const mealsList=DUMMY_MEALS.map(meal=><li>{meal.name}</li>)
    return(
        <section className={classes.meals}>
        <ul>
            {mealsList}
        </ul>
    </section>

    )

}
export default AvailableMeals;
  
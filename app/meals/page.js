import Link from "next/link";
import classes from './page.module.css'

export default function MealsPage(){
    return (
    <>
    <header className={classes.header}>
        <h1>
            Delicious meals, created{' '}
            <span className={classes.highlight}>by you</span>
        </h1>
        <p>
            Choose your favorite recipe and cook it yourself. It is easy and fun.
        </p>
        <p classname={classes.link}>
            <Link href="/meals/share">Share your favorite recipe</Link>
        </p>
    </header>
    <main>
        <h1>Selection of Meals</h1>
        <p><Link href="/meals/meal-1">First Meal</Link></p>
        <p><Link href="/meals/meal-2">Second Meal</Link></p>
    </main>
    </>
    )
}
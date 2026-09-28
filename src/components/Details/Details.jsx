
function Details(){
    const spe = {
        dev: "javascript",
        favoriteRecipes: "Tartiflette",
        favoriteGame: "Rocket League",
    }

    return (
        <section>
           <ul>
            <li>Favorite programming language: {spe.dev}</li>
            <li>Favorite recipe: {spe.favoriteRecipes}</li>
            <li>Favorite game: {spe.favoriteGame}</li>
           </ul>
        </section>
    )
}

export default Details
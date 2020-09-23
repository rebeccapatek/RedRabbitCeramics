/**
 *  Ceramics which renders individual ceramic objects as HTML
 */
export const CeramicsComponent = (ceramics) => {
    return `
        <section class="ceramic card">

            <div class="ceramic__title">${ceramics.title}</div>
            <div class="ceramic__type">${ceramics.type}</div>
            <div class="ceramic__price">$ ${ceramics.price}</div>

        </section>
    `
}
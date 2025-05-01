const pages = document.querySelectorAll(".page");
let currentPage = 0;

pages.forEach((page, index) => {
    page.addEventListener("click", async () => {
        if (index === currentPage) {
            page.classList.add("flipped");
            currentPage++;
            await wait(1);
            page.classList.add("resetindex");
        } else if (index === currentPage - 1) {
            page.classList.remove("flipped");
            currentPage--;
            await wait(1);
            page.classList.remove("resetindex");
        }
    });
});


function wait( sec ) {
    return new Promise( resolve => setTimeout( resolve, sec * 1000 ) );
}
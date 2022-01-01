// Home page
const classContainer = document.getElementById("app")
function renderContainer() {
    let DOMSection = ""
    for (let i = 0; i < page.length; i++) {
        // classContainer.innerHTML += `<page src="${page[i]}" frameborder="0" width="100%" height="auto"></page><a href="${link[i]}" target="_blank">Try it Yourself</a>`
        DOMSection += `
        <!-- command Start -->
        <section class="section-area mt-100">
            <div class="container">
                <div id="${sectionId[i]}" class="section-title">
                    <h2>${sectionTitle[i]}</h2>
                </div>
                <div class="row">
                    <div>
                        <iframe src="${page[i]}" frameborder="0" width="100%" height="auto"></iframe>
                        <a href="${page[i]}" target="_blank" class="btn mt-3">Try it Yourself</a>
                    </div>
                </div>
            </div>
        </section>
        <!-- command End -->`
    }
    classContainer.innerHTML = DOMSection
}
renderContainer();

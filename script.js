```javascript
const links = document.querySelectorAll("nav a");

const spider = document.getElementById("spider");
const web = document.getElementById("web");

links.forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );

        spider.style.opacity = "1";
        web.style.height = "250px";

        spider.classList.add("swing");

        setTimeout(() => {

            target.scrollIntoView({
                behavior:"smooth"
            });

            document.body.classList.add("flash");

        },700);

        setTimeout(() => {

            spider.classList.remove("swing");
            document.body.classList.remove("flash");
            spider.style.opacity = "0";
            web.style.height = "0px";

        },1800);

    });

});
```

function check() {
    let email = document.getElementById("email-check").value;
    let regex = /^[\w\.]+@([\w-]+\.)+[\w-]{2,4}$/g
    let ans = email.match(regex)

    if (ans == null) {
        document.querySelector(".email-required").classList.remove("hidden")
        document.querySelector("input").classList.add("wrong")
    } else {
        document.querySelector(".sign-up").remove()
        document.querySelector(".input-data").remove()
        document.querySelector("ol").remove()
        document.querySelector(".email").remove()
        let svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        svg.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64"><defs><linearGradient id="a" x1="100%" x2="0%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FF6A3A"/><stop offset="100%" stop-color="#FF527B"/></linearGradient></defs><g fill="none"><circle cx="32" cy="32" r="32" fill="url(#a)"/><path stroke="#FFF" stroke-width="4" d="m18.286 34.686 8.334 7.98 19.094-18.285"/></g></svg>'
        document.querySelector(".details").insertBefore(svg, document.querySelector(".header"))
        
        document.querySelector(".main").style.cssText = "padding-right: 0px; @media screen (min-width:710px){height: 500px}"
        document.querySelector(".details").style.cssText = "padding: 90px 30px;padding-top: 40px; @media screen (min-width: 710px){padding 50px}"
        document.querySelector("form").style.cssText = "position: absolute; bottom: 50px; width: 85%; @media screen (min-width: 710px){width: 85%; left: 40px}; @media (max-width: 500px) {width:85%}"
        document.querySelector(".subheader").style.cssText = "font-size: 14px"
        document.querySelector("svg").style.cssText = "width: 65px; height: 65px; margin-bottom: 30px"
        document.querySelector(".header").style.cssText = "line-height: 50px"
        if (window.innerWidth > 700) {
            document.querySelector(".details").style.cssText = "padding: 40px 100px 100px 35px; width: 450px; position: relative"
            document.querySelector(".subheader").style.cssText = "padding-left: 5px; width: 375px; margin-bottom: 40px"
        }

        document.querySelector("button").innerHTML = "Dismiss message"
        document.querySelector(".header").innerHTML = "Thanks for subscribing!"
        document.querySelector(".subheader").innerHTML = "A confirmation email has been sent to <strong>"+email+"</strong>. Please open it and click the button inside to confirm your subscription."
        document.querySelector("button").onclick = function () { location.reload() };
    }
}
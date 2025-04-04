(function () {
    emailjs.init("rjolI8D8UnXfNlaNn");
})();

const progressBars = document.querySelectorAll(".progress-bar");
var loading = document.getElementById("loader");
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const sendBtn = document.getElementById("send-email-btn");
    const loader = document.getElementById("loader");

    sendBtn.disabled = true;
    //loader.classList.remove("hidden");
    loader.style.display="block";

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const templateParams = {
        from_name: name,
        from_email: email,
        message: message,
        to_name: "Email Js demo",
        to_email: "mugishaleebruce@gmail.com"
    };

    emailjs.send("service_edfsite", "template_8mqaz25", templateParams)
        .then(function () {
            alert('✅✅✅ Message sent successfully!');
            document.getElementById("contact-form").reset();
        }, function (error) {
            alert('❌ Message failed to send.');
            console.error("EmailJS Error:", error);
        })
        .finally(() => {
            sendBtn.disabled = false;
            loader.style.display="none";
        });
});

document.addEventListener("DOMContentLoaded", function () {



    progressBars.forEach(bar => {
        const targetWidth = parseInt(bar.getAttribute("data-width"));

        function animateBar() {
            let current = 0;
            bar.style.width = "0%";

            const interval = setInterval(() => {
                current++;
                bar.style.width = current + "%";
                bar.textContent = `${bar.textContent.split("(")[0].trim()} (${current}%)`;

                if (current >= targetWidth) {
                    clearInterval(interval);
                    setTimeout(() => {
                        bar.textContent = `${bar.textContent.split("(")[0].trim()} (0%)`;
                        animateBar(); // restart
                    }, 1500);
                }
            }, 30);
        }

        animateBar();
    });
});

new Typed('#typed', {
    strings: ['Web Developer', 'UI/UX Designer', 'Tech Enthusiast', Java Developer],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 1000,
    loop: true
})


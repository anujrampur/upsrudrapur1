const carouselInner = document.querySelector('.carousel-inner');
            const indicators = document.querySelectorAll('.carousel-indicators button');
            let currentIndex = 0;
            const totalSlides = indicators.length;
    
            function goToSlide(index) {
                carouselInner.style.transform = `translateX(-${index * 100}%)`;
                indicators.forEach(indicator => indicator.classList.remove('active'));
                indicators[index].classList.add('active');
            }
    
            function nextSlide() {
                currentIndex = (currentIndex + 1) % totalSlides;
                goToSlide(currentIndex);
            }
    
            // Auto-slide
            setInterval(nextSlide, 5000);
    
            // Indicator click event
            indicators.forEach(button => {
                button.addEventListener('click', () => {
                    currentIndex = parseInt(button.getAttribute('data-index'));
                    goToSlide(currentIndex);
                });
            });
            document.getElementById("contactForm").addEventListener("submit", function (e) {
            // Prevent the default form submission behavior
            e.preventDefault();

            // Get the values from the form fields
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const phone = document.getElementById("phone").value;
            const message = document.getElementById("message").value;

            // Alert a confirmation message with the user's name
            alert(`Form Submitted Successfully!\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`);

            // Optionally, you can log the other form data to the console (for demonstration)
            console.log(`Name: ${name}`);
            console.log(`Email: ${email}`);
            console.log(`Phone: ${phone}`);
            console.log(`Message: ${message}`);

            // You can also clear the form after submission
            document.getElementById("contactForm").reset();
        });
        document.getElementById('enquiryForm').addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the form from submitting normally
            
            const name1 = document.getElementById('name1').value; // Get the user's name
            alert(`Thank you, ${name1}, for your enquiry! We will get back to you soon.`);
            
            // Optionally, reset the form after submission
            this.reset();
          });       
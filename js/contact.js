$("Form").submit(function (e) {
    e.preventDefault();
    const data = { "name": $("#nameInput").val(), "email": $("#emailInput").val(), "title": $("#titleInput").val(), "text": $("#textInput").val() };
    console.log(data);

    fetch('http://localhost:3000/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then(response => response.json())
        .then(status => {
            console.log(status);
            if (status.success) {
                $("#errorMessage").css("display", "none");
                $("#successMessage").css("display", "block");                
            }
            else{
                $("#successMessage").css("display", "none");
                $("#errorMessage").css("display", "block");
                $("#errorMessage").text(status.error)
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
})
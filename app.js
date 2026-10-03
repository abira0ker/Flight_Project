function showMessage(message) {

    const toast =
        document.getElementById("toast");

    if (!toast) {
        return;
    }

    toast.innerText = message;

    toast.classList.add("show");

    setTimeout(() => {

        toast.classList.remove("show");

    }, 2500);

}



function searchFlights() {

    const input =
        document.getElementById("flightSearch");

    const search =
        input.value.toLowerCase();

    const rows =
        document.querySelectorAll(
            ".full-flight-row"
        );


    rows.forEach(row => {

        const text =
            row.innerText.toLowerCase();

        if (text.includes(search)) {

            row.style.display = "grid";

        } else {

            row.style.display = "none";

        }

    });

}
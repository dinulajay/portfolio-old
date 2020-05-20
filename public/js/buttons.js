//Enabling button outline for keyboard only people

$(document).keydown(
    (event) => {

        if (event.key === "Tab") {

            $("body").addClass("accessibility");

        }

        $(document).unbind();

    }
)

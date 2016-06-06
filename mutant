jQuery.ajax({
    url: "https://mutant-school.herokuapp.com/api/v1/mutants",
    type: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    contentType: "application/json",
    data: JSON.stringify({
        "mutant": {
            "eligibility_begins_at": "2010-01-01",
            "power": "Flight",
            "may_advise_beginning_at": "2016-01-01",
            "eligibility_ends_at": "2020-01-01",
            "real_name": "Dave",
            "mutant_name": "Superdave"
        }
    })
})
.done(function(data, textStatus, jqXHR) {
    console.log("HTTP Request Succeeded: " + jqXHR.status);
    console.log(data);
})
.fail(function(jqXHR, textStatus, errorThrown) {
    console.log("HTTP Request Failed");
})
.always(function() {
    /* ... */
});

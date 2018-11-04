var App = {
    launch: launch,
    getBuyerName: getBuyerName,
    getOrganizationName: getOrganizationName,
    getNoOfRows: getNoOfRows,
    getNoOfSeats: getNoOfSeats,
    calculatedSeats: calculatedSeats,
    calculateEstimatedCount: calculateEstimatedCount,
    showExample: showExample,
    addImageBearcat: addImageBearcat,
    displayExploreButtons: displayExploreButtons,
    exploreHtml: exploreHtml,
    exploreCode: exploreCode,
    rememberClicks: rememberClicks
}

function launch() {
    const buyerName = getBuyerName()
    const orgName = getOrganizationName()
    const noOfrows = getNoOfRows()
    const seatsPerRow = getNoOfSeats()
    const totalSeats = calculatedSeats(noOfrows, seatsPerRow)
    const count = calculateEstimatedCount(totalSeats)

    // update page contents 
    $(".displayText").css('display', 'inline-block')  //overwrites display: hidden to make it visible 
    $("#buyer").html(buyerName)
    $("#orgname").html(orgName)
    $("#rows").html(noOfrows)
    $("#seatsperrow").html(seatsPerRow)
    $("#totalseats").html(totalSeats)
    $("#count").html(count)
    $("#displayPlace").html('')

    alert("You have  " + totalSeats + " seats available")
    alert("You have  " + count + " students.")
    $("#count").css("color", "blue")
    $("#count").css("background-color", "yellow")

    showExample(count)
    displayExploreButtons()
}

function cleanInput(inputString) {
    // create a regular expression to find all characters that are not (^) English alphabet chars 
    const re = /[^a-zA-Z]/g
    let justAlpha = inputString.replace(re, '') // strip non-alpha chars out
    return justAlpha
}

function getBuyerName() {
    const MAX_FIRST = 25
    const answer = prompt("What is name of buyer", "Sambi Reddy")
    const justAlphaAnswer = cleanInput(answer)

    if (justAlphaAnswer.length > MAX_FIRST) {
        alert('The given answer was greater than ' + MAX_FIRST + '. Using first' + MAX_FIRST + ' characters.')
        justAlphaAnswer = justAlphaAnswer.substr(0, MAX_FIRST)
    }
    return justAlphaAnswer
}

function getOrganizationName() {
    const MAX_ORG = 30
    const answer = prompt("What is your org name", "Eden")
    const justAlphaAnswer = cleanInput(answer)

    if (justAlphaAnswer.length > MAX_ORG) {
        alert('The given answer was greater than ' + MAX_ORG + '. Using first' + MAX_ORG + ' characters.')
        justAlphaAnswer = justAlphaAnswer.substr(0, MAX_ORG)
    }
    return justAlphaAnswer
}

function getNoOfRows() {
    const DEFAULT_ROWS = 5;
    const MAX_ROWS = 100;
    const MIN_ROWS = 1;
    const answer = prompt("Enter the Number of rows the organization wants to reserve", DEFAULT_ROWS)
    let rows = parseFloat(answer)
    if (Number.isNaN(rows)) {
        alert('The given argument is not a number. Using ' + DEFAULT_ROWS + '.')
        rows = DEFAULT_ROWS
    }
    else if (rows > MAX_ROWS) {
        alert('The given argument is greater than ' + MAX_ROWS + '. Using ' + MAX_ROWS + '.')
        rows = MAX_rows
    }
    else if (rows < MIN_ROWS) {
        alert('The given argument is less than ' + MIN_ROWS + '. Using ' + MIN_ROWS + '.')
        rows = MIN_ROWS
    }
    return rows
}

function getNoOfSeats() {
    const DEFAULT_SEATSPERROW = 5;
    const MAX_SEATSPERROW = 100;
    const MIN_SEATSPERROW = 1;
    const answer = prompt("Enter the number of seats per row the organization wants to reserve", DEFAULT_SEATSPERROW)
    let seatsperrow = parseFloat(answer)
    if (Number.isNaN(seatsperrow)) {
        alert('The given argument is not a number. Using ' + DEFAULT_SEATSPERROW + '.')
        seatsperrow = DEFAULT_seatsperrow
    }
    else if (seatsperrow > MAX_SEATSPERROW) {
        alert('The given argument is greater than ' + MAX_SEATSPERROW + '. Using ' + MAX_SEATSPERROW + '.')
        seatsperrow = MAX_SEATSPERROW
    }
    else if (seatsperrow < MIN_SEATSPERROW) {
        alert('The given argument is less than ' + MIN_SEATSPERROW + '. Using ' + MIN_SEATSPERROW + '.')
        seatsperrow = MIN_SEATSPERROW
    }
    return seatsperrow
}

function calculatedSeats(givenseatsperrow, givenrows) {
    const MIN_VALUE = 1
    const MAX_VALUE = 1000
    if (typeof givenseatsperrow !== 'number' || typeof givenrows !== 'number') {
        return 0;
    }
    if (givenseatsperrow < MIN_VALUE || givenseatsperrow > MAX_VALUE) {
        givenseatsperrow = 0
    }
    if (givenrows < MIN_VALUE || givenrows > MAX_VALUE) {
        givenrows = 0
    }

    // calculate the answer and store in a local variable so we can watch the value
    let totalSeats = givenseatsperrow * givenrows

    // return the result of our calculation to the calling function
    return totalSeats
}

function calculateEstimatedCount(inputtotal) {
    if (typeof inputtotal !== 'number') {
        alert('The given argument is not a number')
    }
    let ct = 0
    if (inputtotal > 1) {
        ct = inputtotal // estimate 1 per square mile
    }
    return ct
}

function showExample(inputCount) {
    for (var i = 0; i < inputCount; i++) {
        addImageBearcat(i)
    }
}

function addImageBearcat(icount) {
    var imageElement = document.createElement("img")
    imageElement.id = "image" + icount
    imageElement.class = "picture"
    imageElement.style.maxWidth = "90px"
    var displayElement = document.getElementById("displayPlace")
    displayElement.appendChild(imageElement)
    document.getElementById("image" + icount).src = "logo.jpg"
}

function displayExploreButtons() {
    $(".displayExploreButtons").css('display', 'block')  //overwrites display: hidden to make it visible 
}

function exploreHtml() {
    alert("Would you like to learn more? \n\n Run the app in Chrome.\n\n" +
        "Right-click on the page, and click Inspect. Click on the Elements tab.\n\n" +
        "Hit CTRL-F and search for displayPlace to see the new image elements you added to the page.\n")
}

function exploreCode() {
    alert("Would you like explore the running code? \n\n Run the app in Chrome.\n\n" +
        "Right-click on the page, and click Inspect. Click on the top-level Sources tab.\n\n" +
        "In the window on the left, click on the .js file.\n\n" +
        "In the window in the center, click on the line number of the getBuyerName() call to set a breakpoint.\n\n" +
        "Click on it again to remove the breakpoint, and one more time to turn it back on.\n\n" +
        "Up on the web page, click the main button to launch the \n\n" +
        "Execution of the code will stop on your breakpoint.\n\n" +
        "Hit F11 to step into the getBuyerName() function.\n" +
        "Hit F10 to step over the next function call.\n\n" +
        "As you hit F11 and step through your code, the values of local variables appear beside your code - very helpful in debugging.\n\n" +
        "Caution: Hitting F11 in VS Code will make your top-level menu disapper. Hit F11 again to bring it back.\n"
    )
}

function rememberClicks() {
    if (localStorage.getItem("clicks")) { // use getter
        const value = Number(localStorage.clicks) + 1  // or property
        localStorage.setItem("clicks", value)  // use setter
    } else {
        localStorage.clicks = 1 // or property
    }
    s = "You have clicked this button " + localStorage.clicks + " times"
    $("#clicks").html(s) // display forever clicks 
}
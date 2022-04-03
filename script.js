// api url
const api_url =
    "https://623d55e87efb5abea68ce31d.mockapi.io/suman/friends/";

// Defining async function
async function getapi(url) {

    // Storing response
    const response = await fetch(url);

    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);
    if (response) {
        hideloader();
    }
    show(data);
}
// Calling that async function
getapi(api_url);

// Function to hide the loader
function hideloader() {
    document.getElementById('loading').style.display = 'none';
}
// Function to define innerHTML for HTML table
function show(data) {
    let tab =
        `<tr>
		<th>Name</th>
		<th>country</th>
		<th>Picture</th>
		<th>id</th>
		</tr>`;

    // Loop to access all rows
    for (let r of data) {
        tab += `<tr>
	<td>${r.name} </td>
	<td>${r.country}</td>
	<td><img src="${r.pics}" alt=""></td>  
	<td>${r.id}</td>		
</tr>`;
    }
    // Setting innerHTML as tab variable
    document.getElementById("employees").innerHTML = tab;
}

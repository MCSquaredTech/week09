
let insert = false; 
console.log(window.location.search);
let addBooks = () => { 
    location.replace("add-book.html"); 
    insert = true;
}

if (window.location.search !== null) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    let isbn = urlParams.get('ISBN');
    let pubDate = urlParams.get('PubDate');
    let title = urlParams.get('Title');
    let urlPath = urlParams.get('URL');
    let author = urlParams.get('Author');
    let price = urlParams.get('Price');
    
    const books = document.getElementById('mustread');
    const newRow = document.createElement('tr'); 
    newRow.innerHTML = (`
            <td>${isbn}</td>
            <td>${pubDate}</td>
            <td><a href=${urlPath} target="_blank">${title}</a></td>
            <td>${author}</td>
            <td>${price}</td>
    `);
    books.appendChild(newRow);
    
}
    



    



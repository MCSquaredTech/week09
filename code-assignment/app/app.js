
$('.add-book').on('submit', () => { 
    let values = $(this).serialize();
    console.log(values);
})
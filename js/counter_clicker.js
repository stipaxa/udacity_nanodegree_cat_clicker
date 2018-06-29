let counter = {};
$('.cats').click(function(e) {
    let cat_id = this.id;
    if (!(cat_id in counter)) {
        counter[cat_id] = 0;
    }
    counter[cat_id] += 1;
    console.log(counter);
    $(this).children(".cat_clicker").html(counter[cat_id]);
});
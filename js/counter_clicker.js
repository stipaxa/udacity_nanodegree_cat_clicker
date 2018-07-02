let counter = {};
$('.cats a').click(function(e) {
    e.preventDefault();
    let cat_id = this.id;
    console.log(cat_id);
    if (!(cat_id in counter)) {
        counter[cat_id] = 0;
    }
    counter[cat_id] += 1;
    console.log(counter);
    $(".cat_label").html(cat_id);
    $(".cat_pict").html($("<img>").attr("src", this.href));
    $(".cat_clicker").html("number of clicks: " + counter[cat_id]);
});

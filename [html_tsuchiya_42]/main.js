

// チェックを二か所入れるとアラート
$("#send").on("click", function () {
    var check = $('input[name="check[]"]:checked').map(function () {
        return $(this).val();
    }).get();

    console.log(check);

    if (check.includes("1") && check.includes("2")) {
        console.log("2重チェック");
        alert("２つ以上のチェックは入れないでください");
    } else if (check.includes("3") && check.includes("4")) {
        console.log("2重チェック");
        alert("２つ以上のチェックは入れないでください");
    } else if (check.includes("5") && check.includes("6")) {
        console.log("2重チェック");
        alert("２つ以上のチェックは入れないでください");
    }
});



// この部分↓でチェックボックスの値を３つ数字で取り出す→一緒なら画像変更
$("#send").on("click", function () {
    var check = $('input[name="check[]"]:checked').map(function () {
        return $(this).val();
    }).get();

    console.log(check);

    if (check.includes("2") && check.includes("3") && check.includes("5")) {
        console.log("経営幹部");
        result = "経営幹部";
        judgment = '<img src="img/top-1.png">';
    } else if (check.includes("2") && check.includes("3") && check.includes("6")) {
        console.log("長距離運転手");
        result = "長距離運転手";
        judgment = '<img src="img/longdriver-1.png">';
        $("#box").html(judgment);
    } else if (check.includes("2") && check.includes("4") && check.includes("5")) {
        console.log("現場責任者");
        result = "現場責任者";
        judgment = '<img src="img/manager-1.png">';
        $("#box").html(judgment);
    } else if (check.includes("2") && check.includes("4") && check.includes("6")) {
        console.log("大型運転手");
        result = "大型運転手";
        judgment = '<img src="img/driver-1.png">';
    } else if (check.includes("1") && check.includes("3") && check.includes("5")) {
        console.log("一般事務職");
        result = "一般事務職";
        judgment = '<img src="img/jimu-1.png">';
    }else if (check.includes("1") && check.includes("3") && check.includes("6")) {
        console.log("ルート配送");
        result = "ルート配送";
        judgment = '<img src="img/rootdriver-1.png">';
        $("#box").html(judgment);
    } else if (check.includes("1") && check.includes("4") && check.includes("5")) {
        console.log("管理助手");
        result = "管理助手";
        judgment = '<img src="img/submanager-1.png">';
        $("#box").html(judgment);
    } else if (check.includes("1") && check.includes("4") && check.includes("6")) {
        console.log("軽貨物便");
        result = "軽貨物便";
        judgment = '<img src="img/keirootdriver-1.png">';
    } 
    $("#box").html(judgment);
    $("#graydisplay").html($("#box").prop('outerHTML'));
    $("#graydisplay").fadeIn(200);
    $("#graydisplay, #graydisplay img").click(function() {
    $("#graydisplay").fadeOut(200);
    });
});


    $("#send2").on("click",function(){
    var random = Math.floor(Math.random() * 6 + 1);
    console.log(random, "ランダムな数字の箱");
    var result =  ""
    var judgment = ""
    if (random === 1) {
    console.log("飛行機");
    result = "飛行機";
    judgment = '<img src="img/starfly.jpg">';
    } else if (random === 2) {
    console.log("大型車");
    result = "大型フルサイズ";
    judgment = '<img src="img/kaiketsu-3.jpg">';
    } else if (random === 3) {
    console.log("２ｔ車");
    result = "２ｔ車";
    judgment = '<img src="img/kaiketsu_1.jpg">';
    }else if (random === 4) {
    console.log("ベンツ");
    result = "ベンツ";
    judgment = '<img src="img/benz-1.jpg">';
    } else if (random === 5) {
    console.log("バイク");
    result = "バイク";
    judgment = '<img src="img/bike-1.jpg">';
    }else if (random === 6) {
    console.log("自転車");
    result = "自転車";
    judgment = '<img src="img/bianchi-1.jpg">';
    } 
    $("#box2").html(judgment);
    });


    // チェックボックスの複数選択の値を取る
    // $(function(){
    //     $('input[name=check]').on('change',function(){
    //         var vals = $('input[name=check]:checked').map(function(){
    //             return $(this).val();
    //         }).get();
    //         (vals);
    //     });
    //     });
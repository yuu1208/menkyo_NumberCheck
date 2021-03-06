var check = function(){

//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
//
// デバッグモード（変数値を全て出力する）
// 0=無効, 1=有効
    var debug = 1;
//
//■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■

    //FORMから番号を取得
    var number = document.getElementById("input_id").value;

    //都道府県コードは12桁中の最初の2桁、西暦コードは最初の3桁から4桁、内部コードは5~11、紛失回数コードは最後の番号	
    var lc_code = number.substr(0,2); //0桁から2文字
    var yr_code = number.substr(2,2);
    var naibu = number.substr(4,7);
    var lost = number.substr(11,1);

    //初期値設定
    var year = "undefined";
    var location = "undefined";
    var lost_text = "undefined";

    //hanteiのIDを持ったspanにデータを入れる
    var result = document.getElementById('hantei'); 

    //西暦判定
    //西暦の下2桁で判定するため、西暦コードが20までなら「20」、21以降は前2桁に「19」が追加される

    //20以下？
    if(yr_code <= 20) { 
        year = 20 + yr_code;
    }
    //21以上？
    else if(yr_code >= 21) { 
        year = 19 + yr_code;
    }

    //都道府県コード（公安委員会指定）参照
    switch(lc_code) {
        case '10':
            location = "北海道";
            break;
        case '11':
            location = "北海道 函館";
            break;
        case '12':
            location = "北海道 旭川";
            break;
        case '13':
            location = "北海道 釧路";
            break;
        case '14':
            location = "北海道 北見";
            break;
        case '20':
            location = "青森県";
            break;
        case '21':
            location = "岩手県";
            break;
        case '22':
            location = "宮城県";
            break;
        case '23':
            location = "秋田県";
            break;
        case '24':
            location = "山形県";
            break;
        case '25':
            location = "福島県";
            break;
        case '30':
            location = "東京都";
            break;
        case '40':
            location = "茨城県";
            break;
        case '41':
            location = "栃木県";
            break;
        case '42':
            location = "群馬県";
            break;
        case '43':
            location = "埼玉県";
            break;
        case '44':
            location = "千葉県";
            break;
        case '45':
            location = "神奈川県";
            break;
        case '46':
            location = "新潟県";
            break;
        case '47':
            location = "山梨県";
            break;
        case '48':
            location = "長野県";
            break;
        case '49':
            location = "静岡県";
            break;
        case '50':
            location = "富山県";
            break;
        case '51':
            location = "石川県";
            break;
        case '52':
            location = "福井県";
            break;
        case '53':
            location = "岐阜県";
            break;
        case '54':
            location = "愛知県";
            break;
        case '55':
            location = "三重県";
            break;
        case '60':
            location = "滋賀県";
            break;
        case '61':
            location = "京都府";
            break;
        case '62':
            location = "大阪府";
            break;
        case '63':
            location = "兵庫県";
            break;
        case '64':
            location = "奈良県";
            break;
        case '65':
            location = "和歌山県";
            break;
        case '70':
            location = "鳥取県";
            break;
        case '71':
            location = "島根県";
            break;
        case '72':
            location = "岡山県";
            break;
        case '73':
            location = "広島県";
            break;
        case '74':
            location = "山口県";
            break;
        case '80':
            location = "徳島県";
            break;
        case '81':
            location = "香川県";
            break;
        case '82':
            location = "愛媛県";
            break;
        case '83':
            location = "高知県";
            break;
        case '90':
            location = "福岡県";
            break;
        case '91':
            location = "佐賀県";
            break;
        case '92':
            location = "長崎県";
            break;
        case '93':
            location = "熊本県";
            break;
        case '94':
            location = "大分県";
            break;
        case '95':
            location = "宮崎県";
            break;
        case '96':
            location = "鹿児島県";
            break;
        case '97':
            location = "沖縄県";
            break;
    }

    //紛失回数に応じてコメントが変わる
    if(lost <= 2) {
        switch(lost) {
        case '0':
            lost_text = "素晴らしい！";
            break;
        case '1':
            lost_text = "財布ごと無くしたのかな？";
            break;
        case '2':
            lost_text = "ん？？また無くしたのか！3度目の正直、次は無くさないように！";
            break;
    }
    }
    //3回以上？
    else if(lost >= 3) {
        lost_text = "なくしすぎ！";
    }

    //結果をhtmlに出力
    result.innerHTML = "<br>あなたは<b>" + year + "</b>年に、<b>" + location + "</b>で、初めて免許を取得したみたいですね。<br>再発行した回数は<b>" + lost + "回！</b>" + lost_text;

    //入力に誤りがあるならエラー表示
    if( !lost || !lc_code || !year || location == 'undefined' || number.length >= 13 ) {
        result.innerHTML = "<span style='color:red'>エラー: 入力が正しく行われていません！</span>";
    }

    //デバッグモードの場合は下記の情報も出力
    if(debug == 1) {
        //debugのHTMLを対象
        var debug_mode = document.getElementById('debug');

        //debugのIDを持ったspanにデータを入れる
        debug_mode.innerHTML = "<br>処理開始...<br><br>運転免許番号: 第 " + number + " 号<br>都道府県番号: " + lc_code + "（" + location + "）" + "<br>取得西暦番号: " + yr_code + "<br>内部登録番号: " + naibu + "<br>再発行歴回数: " + lost + "<br><br>処理完了...";
    }
}
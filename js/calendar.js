$(function(){
	var myDate = new Date();
	var myWeekTbl = new Array("日","月","火","水","木","金","土");
	var myMonthTbl= new Array(31,28,31,30,31,30,31,31,30,31,30,31);
	var myYear = myDate.getFullYear();
	if (((myYear%4)==0 && (myYear%100)!=0) || (myYear%400)==0){
		myMonthTbl[1] = 29;
	}	
	var myMonth = myDate.getMonth();
	var myToday = myDate.getDate();	// 今日の'日'を退避
	myDate.setDate(1);	// 日付を'１日'に変えて、
	var myWeek = myDate.getDay();	// 　'１日'の曜日を取得
	var myTblLine = Math.ceil((myWeek+myMonthTbl[myMonth])/7);	// カレンダーの行数
	var myTable = new Array(7*myTblLine);	// 表のセル数分定義
	 	
	for(i=0; i<7*myTblLine; i++){
		myTable[i] = "　";	// myTableを掃除する
	}
	for(i=0; i<myMonthTbl[myMonth]; i++){
		myTable[i+myWeek] = i+1;	// 日付を埋め込む
	}

	// ***********************	
	//      カレンダーの表示	
	// ***********************	
	$('.calendar-table').append("<strong>",myYear, "年", (myMonth+1), "月カレンダー</strong>");
	$('.calendar-table').append("<table></table>");
	$('.calendar-table').find('table').addClass('table');
	$('.calendar-table').find('table').append('<tr>').addClass('cal-tit');//見出し
	for(i=0; i<7; i++){
		$('.calendar-table').find('table').find('tr').append('<td class="week'+i+'">'+myWeekTbl[i]+'</td>');
		if(i==0){
			$('.calendar-table').find('table').find('tr').find('.week0').addClass('red');
		}
		if(i==6){
			$('.calendar-table').find('table').find('tr').find('.week6').addClass('blue');
		}
	}

	for(i=0; i<myTblLine; i++){
		$('.calendar-table').find('table').append('<tr class="line'+i+'">').addClass('cal-num');//見出し
		for(j=0; j<7; j++){
			var myDat = myTable[j+(i*7)];
			$('.line'+i).append('<td>'+myDat+'</td>');


			// $('.calendar-table').find('table').find('<tr>').append('<td>');


			// document.write("<td align='center' ");	// 列(セル)の作成
			// myDat = myTable[j+(i*7)];	// 書きこむ内容の取得
			// if (myDat==myToday)document.write("bgcolor='#00ffff'>");	// 今日のセルの色
			// else if(j==0) document.write("bgcolor='#ffb6c1'>");	// 日曜のセルの色
			// else document.write("bgcolor='#ffffe0'>");	// 平日のセルの色
			// document.write("<strong>",myDat,"</strong>");	// 日付セット
			// document.write("</td>")
		}
	}
});
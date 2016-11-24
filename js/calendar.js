$(function(){
	var myDate = new Date();
	var myWeekTbl = new Array("日","月","火","水","木","金","土");
	var myMonthTbl= new Array(31,28,31,30,31,30,31,31,30,31,30,31);
	var myYear = myDate.getFullYear();//2016
	if (((myYear%4)==0 && (myYear%100)!=0) || (myYear%400)==0){
		myMonthTbl[1] = 29;
	}	

	var myMonth = myDate.getMonth();
	var myToday = myDate.getDate();	// 今日の'日'を退避

	myDate.setDate(1);	// 日付を'１日'に変えて、
	var myWeek = myDate.getDay();	// 　'１日'の曜日を取得

	var myTblLine = Math.ceil((myWeek+myMonthTbl[myMonth])/7);	// カレンダーの行数
	var myTable = new Array(7*myTblLine);	// 表のセル数分定義
	var myDat;

	CreateDate();
	CreateCalendar();

	$('#pre-btn').click(function(){
		console.log('もどるよ！');
		myMonth = myMonth - 2;
		myWeek = (myWeek - myMonthTbl[myMonth] + 70 ) % 7;
		$(".calendar-month").remove();
		$("table").remove();

		CreateDate();
		CreateCalendar();
	});

	$('#next-btn').click(function(){
		console.log('すすむよ！');
		myWeek = (myWeek + myMonthTbl[myMonth-1]) % 7;
		$(".calendar-month").remove();
		$("table").remove();

		CreateDate();
		CreateCalendar();
	});


	function CreateDate(){

		myTblLine = Math.ceil((myWeek+myMonthTbl[myMonth])/7);	// カレンダーの行数
		myTable = new Array(7*myTblLine);	// 表のセル数分定義
		 	
		for(i=0; i<7*myTblLine; i++){
			myTable[i] = "　";	// myTableを掃除する
		}
		for(i=0; i<myMonthTbl[myMonth]; i++){
			myTable[i+myWeek] = i+1;	// 日付を埋め込む
		}
	}

	function CreateCalendar(){
		myMonth = myMonth + 1
		$('.calendar-table').append('<div class="calendar-month clearfix"></div>');

		$('.calendar-month').append('<div id="pre-btn" class="month-btn">＜</div>');
		$('.calendar-month').append("<p>"+myYear+"年"+ myMonth+ "月</p>");
		$('.calendar-month').append('<div id="next-btn" class="month-btn">＞</div>');

		$('.calendar-table').append("<table colups=3></table>");
		$('.calendar-table').find('table').addClass('table');
		$('.calendar-table').find('table').append('<tr class="week-name">');//見出し
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
			$('.calendar-table').find('table').append('<tr class="line line'+i+'">').addClass('cal-num');//見出し
			for(j=0; j<7; j++){
				myDat = myTable[j+(i*7)];
				$('.line'+i).append('<td class="month'+myMonth+'-data'+myDat+'">'+myDat+'</td>');
			}
		}
	}

});


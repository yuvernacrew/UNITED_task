var milkcocoa = new MilkCocoa('onivuldzq1.mlkcca.com');
var ds = milkcocoa.dataStore('task');

$(function(){
	$('#pstBtn').click(function(){
		var name = $('#name').val();
		var plan = $('#plan').val();
		var msg = $('#msg').val();
		var date1 = $('#dateStart').val();
		var date2 = $('#dateEnd').val();
		var detail = $('#detail').val();


		console.log(name,plan,msg,date1,date2,detail);

		ds.push({ 
			'name' : name ,
			'plan' : plan ,
			'msg' : msg ,
			'date1' : date1 ,
			'date2' : date2 ,
			'detail': detail
		});
	});

	ds.stream().sort('desc').next(function(err, data) {

    for(var i=0;i<data.length;i++){
    	console.log(data[i].value.name);
    	var name = data[i].value.name;
    	var plan = data[i].value.plan;
    	var msg = data[i].value.msg;

    	var dsm1 = data[i].value.date1.slice(5,7);
    	var dsd1 = data[i].value.date1.slice(8,10);
    	var dsm2 = data[i].value.date2.slice(5,7);
    	var dsd2 = data[i].value.date2.slice(8,10);

    	if(dsm1.charAt(0)=='0'){
    		dsm1 = dsm1.substr(1);
    	}

    	if(dsd1.charAt(0)=='0'){
    		dsd1 = dsd1.substr(1);
    	}

    	if(dsm2.charAt(0)=='0'){
    		dsm2 = dsm2.substr(1);
    	}

    	if(dsd2.charAt(0)=='0'){
    		dsd2 = dsd2.substr(1);
    	}

    	if(plan=='plan'){
    		$('.month'+dsm1+'-data'+dsd1).append('<article class="text-red">'+name+'は'+msg+' を実行する予定です</article>');
    		$('.month'+dsm2+'-data'+dsd2).append('<article class="text-red">'+name+'は'+msg+' を終了する予定です</article>');
    	}
    	if(plan=='ran'){
    		$('.month'+dsm1+'-data'+dsd1).append('<article class="text-blue">'+name+'は'+msg+' を実行しました</article>');
    		$('.month'+dsm2+'-data'+dsd2).append('<article class="text-blue">'+name+'は'+msg+' を終了しました</article>');

    	}

    }

	});

});





    //サーバに到達
    // console.log(pushed);
    /*
    {
        id: 'foo(自動生成)',
        value: {
            content: 'Hello!!!'
        }
    }
    */
// }, function(err) {
    //"Permission denied" or "limit exceeded"
// });
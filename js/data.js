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

  data();

  $(document).on('click','#next-btn',function(){
    data();
  });
  $(document).on('click','#pre-btn',function(){
    data();
  });

  function data(){
    ds.stream().next(function(err, data) {

      for(var i = 0;i < data.length; i++){

        var name = data[i].value.name;
        var plan = data[i].value.plan;
        var msg = data[i].value.msg;

        var dsm1 = data[i].value.date1.slice(5,7);
        var dsd1 = data[i].value.date1.slice(8,10);
        var dsm2 = data[i].value.date2.slice(5,7);
        var dsd2 = data[i].value.date2.slice(8,10);

        if(dsm1.charAt(0) == '0'){
            dsm1 = dsm1.substr(1);
        }

        if(dsd1.charAt(0) == '0'){
            dsd1 = dsd1.substr(1);
        }

        if(dsm2.charAt(0) == '0'){
            dsm2 = dsm2.substr(1);
        }

        if(dsd2.charAt(0) == '0'){
            dsd2 = dsd2.substr(1);
        }

        if(plan === 'plan'){
            $('.month' + dsm1 + '-data' + dsd1).append('<article class="calendar-list text-orange">【実行予定】<br>' + name + '：' + msg + '</article>');
            $('.month' + dsm2 + '-data' + dsd2).append('<article class="calendar-list text-orange【終了予定】<br>' + name + '：' + msg + '</article>');
        }

        if(plan === 'ran'){
            $('.month' + dsm1 + '-data' + dsd1).append('<article class="calendar-list text-blue">【実行】<br>' + name + '：' + msg + '</article>');
            $('.month' + dsm2 + '-data' + dsd2).append('<article class="calendar-list text-blue">【終了】<br>' + name + '：' + msg + '</article>');
        }
      }
    });
  };
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
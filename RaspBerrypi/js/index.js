 window.onload = function () {
		
     
        var div2 = document.getElementById("div2");
        var div1 = document.getElementById("div1");

        div1.onclick = function () {
            div1.className = (div1.className == "close1") ? "open1" : "close1";
            div2.className = (div2.className == "close2") ? "open2" : "close2";
            
 			if (div1.className == "open1") {

                $.ajax({
                    type: 'get',
                    url: '/judge?code=1',
                    // data: { code: 1 },
                })
                  .then((data) => {
                        console.log(data)
						//div1.className = "open1"
						//div2.className = "open2"
                    })
            } else {
                console.log("关闭")
                $.ajax({
                    type: 'get',
                    url: '/judge?code=0',
                    // data: { code: 0 },
                })
                    .then((data) => {
                        console.log(data)
						//div1.className = "close1"
						//div2.className = "close2"
                    })
            }
        }



    }

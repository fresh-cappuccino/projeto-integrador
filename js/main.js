window.onload = function () {
        
    var sms = new CanvasJS.Chart("smscontainer", {
        theme: "light2",
        animationEnabled: true,
        data: [{
           type: "pie",
            indexLabelFontSize: 18,
            radius: 200,
            indexLabel: "{label} - {y}",
            yValueFormatString: "###0.0",
            click: explodePie,
            dataPoints: [
                { y: 10, label: "Cliente I"   },
                { y: 20, label: "Cliente II"  },
                { y: 30, label: "Cliente III" },
                { y: 40, label: "Cliente VI"  },
                { y: 50, label: "Cliente V"   }
            ]
        }]
    });
    
    sms.render();

    var call = new CanvasJS.Chart("callcontainer", {
        theme: "light",
        animationEnabled: true,
        data: [{
           type: "pie",
            indexLabelFontSize: 18,
            radius: 200,
            indexLabel: "{label} - {y}",
            yValueFormatString: "###0.0",
            click: explodePie,
            dataPoints: [
                { y: 50, label: "Cliente I"   },
                { y: 40, label: "Cliente II"  },
                { y: 30, label: "Cliente III" },
                { y: 20, label: "Cliente VI"  },
                { y: 10, label: "Cliente V"   }
            ]
        }]
    });
    
    call.render();

}





function explodePie(e) {
    for(var i = 0; i < e.dataSeries.dataPoints.length; i++) {
        if(i !== e.dataPointIndex){
            e.dataSeries.dataPoints[i].exploded = false;
        }
    }
}

function AltNav() {
if (document.getElementById("mySidebar").style.width < "250px") {
    openNav();
    mostra_oculta();
}else{
    closeNav();
    mostra_oculta();
}
}

function openNav() {
document.getElementById("mySidebar").style.width = "250px";
}

function closeNav() {
document.getElementById("mySidebar").style.width = "100px";
}

function mostra_oculta(){

var test = document.getElementById("colums");
if (test.style.display === "none") {
    test.style.display = "block";
}else{
    test.style.display = "none";
}

}
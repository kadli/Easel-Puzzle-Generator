    // Define a properties array that returns array of objects representing
    // the accepted properties for your application
    var properties = [
      {type: 'range', id: "X Count", value: 4, min: 2, max: 20, step: 1},
      {type: 'range', id: "Y Count", value: 4, min: 2, max: 20, step: 1},
      {type: 'range', id: "Space", value: -1, min: -1, max: 100, step: 1}
    ];
    function getPathData(type,xOffset,yOffset,rotation){
        rotation = rotation*90;
        var xPlace;
        var yPlace;
        switch(type){
            case 1:
                xPlace = 11+xOffset;
                yPlace = 814-yOffset+hglob-800;
                return '<path fill="none" stroke="#000000" stroke-miterlimit="10" d="M'+xPlace+','+yPlace+' h 200 v -48.59 c 0 -37.5 13.463 -26.367 13.463 -26.367 c 4.745 3.142 10.422 4.98 16.537 4.98 c 16.569 0 30 -13.433 30 -30.002 c 0 -16.568 -13.431 -30.002 -30 -30.002 c -6.112 0 -11.792 1.839 -16.534 4.98 c 0 0 -13.466 11.133 -13.466 -26.367 v -48.632 h -47.917 c -37.5 0 -26.367 13.466 -26.367 13.466 c 3.14 4.741 4.978 10.422 4.978 16.531 c 0 16.568 -13.43 30.002 -30 30.002 c -16.569 0 -30 -13.434 -30 -30.002 c 0 -6.114 1.839 -11.79 4.979 -16.537 c 0 0 11.133 -13.46 -26.367 -13.46 c -0.236 0 -0.461 0 -0.694 0 h -48.612 v 200 Z" transform="rotate('+rotation+','+(xPlace+100)+','+(yPlace-100)+')"/>';
            case 2:
                xPlace = 241+xOffset-200;
                yPlace = 744.002-yOffset+hglob-800;
                return '<path fill="none" stroke="#000000" stroke-miterlimit="10" d="M'+xPlace+','+yPlace+' c -6.114 0 -11.792 -1.839 -16.537 -4.98 c 0 0 -13.463 -11.133 -13.463 26.367 v 48.611 h 200 v -48.611 c 0 -37.5 -13.463 -26.367 -13.463 -26.367 c -4.743 3.142 -10.422 4.98 -16.537 4.98 c -16.569 0 -30 -13.433 -30 -30.002 s 13.431 -29.997 30 -29.997 c 6.113 0 11.793 1.834 16.535 4.976 c 0 0 13.464 11.133 13.464 -26.367 v -48.612 h -48.611 c -37.5 0 -26.367 -13.46 -26.367 -13.46 c 3.14 -4.745 4.979 -10.423 4.979 -16.537 c 0 -16.568 -13.432 -30.002 -30.001 -30.002 s -30 13.434 -30 30.002 c 0 6.112 1.838 11.792 4.978 16.534 c 0 0 11.133 13.463 -26.367 13.463 h -48.61 v 48.611 c 0 37.5 13.466 26.367 13.466 26.367 c 4.742 -3.142 10.422 -4.976 16.534 -4.976 c 16.569 0 30 13.428 30 29.997 s -13.432 30.003 -30 30.003 Z" transform="rotate('+rotation+','+(xPlace+70)+','+(yPlace-30)+')"/>';
            case 3:
                xPlace = 381+xOffset-400;
                yPlace = 744.002-yOffset+hglob-800;
                return '<path fill="none" stroke="#000000" stroke-miterlimit="10" d="M'+xPlace+','+yPlace+' c 6.114 0 11.793 -1.839 16.537 -4.98 c 0 0 13.463 -11.133 13.463 26.367 v 48.611 h 200 v -48.611 c 0 -37.5 13.463 -26.367 13.463 -26.367 c 4.743 3.142 10.422 4.98 16.536 4.98 c 16.569 0 30 -13.433 30 -30.002 s -13.431 -29.997 -30 -29.997 c -6.112 0 -11.793 1.834 -16.535 4.976 c 0 0 -13.464 11.133 -13.464 -26.367 v -48.612 h -48.611 c -37.5 0 -26.367 13.466 -26.367 13.466 c 3.14 4.741 4.979 10.422 4.979 16.536 c 0 16.569 -13.432 29.997 -30.001 29.997 s -30 -13.428 -30 -29.997 c 0 -6.114 1.838 -11.795 4.978 -16.536 c 0 0 11.133 -13.466 -26.367 -13.466 h -48.611 v 48.611 c 0 37.5 -13.464 26.367 -13.464 26.367 c -4.742 -3.142 -10.422 -4.976 -16.535 -4.976 c -16.569 0 -30 13.428 -30 29.997 s 13.431 30.003 29.999 30.003 Z" transform="rotate('+rotation+','+(xPlace+130)+','+(yPlace-30)+')"/>';            
            case 4:
                xPlace = 341.001+xOffset-200;
                yPlace = 584.003-yOffset+200+hglob-800;
                return '<path fill="none" stroke="#000000" stroke-miterlimit="10" d="M'+xPlace+','+yPlace+' c 0 6.114 -1.839 11.79 -4.979 16.537 c 0 0 -11.133 13.46 26.367 13.46 h 48.611 v -48.611 c 0 -37.5 13.464 -26.367 13.464 -26.367 c 4.742 3.142 10.422 4.98 16.535 4.98 c 16.569 0 30 -13.433 30 -30.002 s -13.431 -30 -30 -30 c -6.114 0 -11.793 1.839 -16.537 4.979 c 0 0 -13.463 11.132 -13.463 -26.367 v -48.611 h -48.611 c -37.5 0 -26.367 13.463 -26.367 13.463 c 3.14 4.743 4.979 10.422 4.979 16.537 c 0.00100899 16.569 -13.431 29.999 -30 29.999 s -30 -13.43 -30 -29.999 c 0 -6.113 1.838 -11.793 4.978 -16.535 c 0 0 11.133 -13.464 -26.367 -13.464 h -48.611 v 48.611 c 0 37.499 -13.463 26.367 -13.463 26.367 c -4.74299 -3.14 -10.422 -4.98 -16.537 -4.98 c -16.567 0 -30 13.431 -30 30 s 13.434 30.002 30.001 30.002 c 6.113 0 11.793 -1.839 16.535 -4.98 c 0 0 13.464 -11.133 13.464 26.367 v 48.611 h 48.611 c 37.5 0 26.367 -13.466 26.367 -13.466 c -3.14 -4.741 -4.978 -10.422 -4.978 -16.531 c 0 -16.568 13.431 -30.002 30 -30.002 s 30.001 13.434 30.001 30.002 Z" transform="rotate('+rotation+','+(xPlace+70-100)+','+(yPlace+30-100)+')"/>';
            case 5:
                xPlace = 11+xOffset;
                yPlace = 814-yOffset+hglob-800;
                return '<path fill="none" stroke="#000000" stroke-miterlimit="10" d="M'+xPlace+','+yPlace+' h 200 v -48.611 c 0 -37.5 -13.463 -26.367 -13.463 -26.367 c -4.743 3.142 -10.422 4.98 -16.537 4.98 c -16.569 0 -30 -13.433 -30 -30.002 s 13.431 -29.997 30 -29.997 c 6.113 0 11.793 1.834 16.535 4.976 c 0 0 13.464 11.133 13.464 -26.367 v -48.612 h -48.611 c -37.5 0 -26.367 -13.46 -26.367 -13.46 c 3.14 -4.745 4.979 -10.423 4.979 -16.537 c 0 -16.568 -13.432 -30.002 -30.001 -30.002 s -30 13.434 -30 30.002 c 0 6.112 1.838 11.792 4.978 16.534 c 0 0 11.133 13.463 -26.367 13.463 h -48.61 v 200 Z" transform="rotate('+rotation+','+(xPlace+100)+','+(yPlace-100)+')"/>';
            default:
                return "";
        }
    }
    // Define an executor function that generates a valid SVG document string,
    // and passes it to the provided success callback, or invokes the failure
    // callback if unable to do so
    var executor = function(args, success, failure) {
      var params = args[0];
      var xCount = params['X Count'];
      var yCount = params['Y Count']; 
      var space = params['Space'];
      var scale = 1;
      
      var gap=(50+space);
      if(space<0) gap=0;
      
        var width = (774)/scale;
        var height = (774)/scale;
        hglob = (yCount*(200+gap));
        if ((xCount > 1) && (yCount > 1) && (scale > 0)){
        
            var svgheader ='<?xml version="1.0" encoding="utf-8"?><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="'+width+'px" height="'+height+'px" viewBox="0 0 '+((xCount*(200+gap))+25)+' '+((yCount*(200+gap))+28)+'" xml:space="preserve">';
            var svgend = '</svg>';
            
            var svgOut = svgheader;
            
            //assembly corners by right peace
            svgOut=svgOut.concat(getPathData(1,0,0,0));
            if(((xCount%2)==0)&&((yCount%2)==0)){
                svgOut=svgOut.concat(getPathData(1,(xCount-1)*(200+gap),(yCount-1)*(200+gap),2));
                svgOut=svgOut.concat(getPathData(1,(xCount-1)*(200+gap),0,3));
                svgOut=svgOut.concat(getPathData(1,0,(yCount-1)*(200+gap),1));
            }else if((xCount%2)==0){
                svgOut=svgOut.concat(getPathData(1,(xCount-1)*(200+gap),0,3));
                svgOut=svgOut.concat(getPathData(5,(xCount-1)*(200+gap),(yCount-1)*(200+gap),2));
                svgOut=svgOut.concat(getPathData(5,0,(yCount-1)*(200+gap),1));
            }else if((yCount%2)==0){
                svgOut=svgOut.concat(getPathData(1,0,(yCount-1)*(200+gap),1));
                svgOut=svgOut.concat(getPathData(5,(xCount-1)*(200+gap),0,3));
                svgOut=svgOut.concat(getPathData(5,(xCount-1)*(200+gap),(yCount-1)*(200+gap),2));
            }else{
                svgOut=svgOut.concat(getPathData(1,(xCount-1)*(200+gap),(yCount-1)*(200+gap),2));
                svgOut=svgOut.concat(getPathData(5,0,(yCount-1)*(200+gap),1));
                svgOut=svgOut.concat(getPathData(5,(xCount-1)*(200+gap),0,3));
            }
            
            //bottom side
            for (x=2;x<xCount;x++){
                svgOut=svgOut.concat(getPathData(2+(x%2),(x-1)*(200+gap),0,0));
            }
            //left side
            for (y=2;y<yCount;y++){
                svgOut=svgOut.concat(getPathData(3-(y%2),0,(y-1)*(200+gap),1));
            }
            //right side
            for (x=2;x<xCount;x++){
                svgOut=svgOut.concat(getPathData(3-((x+(yCount%2))%2),(x-1)*(200+gap),(yCount-1)*(200+gap),2));
            }
            //top side
            for (y=2;y<yCount;y++){
                svgOut=svgOut.concat(getPathData(2+((y+(xCount%2))%2),(xCount-1)*(200+gap),(y-1)*(200+gap),3));
            }
            //fill middle
            for (x=2; x<xCount;x++){
                var k=0;
                if((x%2)==0) k=1;
                for(y=2;y<yCount;y++){
                    svgOut=svgOut.concat(getPathData(4,(x-1)*(200+gap),(y-1)*(200+gap),(x+(y%2))%2));
                }
            }
      }
      success(svgOut);
    };

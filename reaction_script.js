 var start = new Date().getTime()
            function getRandomColor() {
                letters = "0123456789ABCDEF".split("");
                color = "#";
                for (var i = 0; i < 6; i++) {
                    color += letters[Math.floor(Math.random() * 16)];
                }
                return color;
            }
            
            function makeShapeAppear() {
                
                var size = Math.random() * 200 + 100;
                var color = getRandomColor();
                var top = Math.random() * 400;
                var left = Math.random() * 400;
                
                if (Math.random() > 0.5) {
                    
                    document.getElementById("shape").style.borderRadius = "50%";
                    
                } else {
                    
                    document.getElementById("shape").style.borderRadius = "0%";
                }
                
                document.getElementById("shape").style.backgroundColor = color;
                
                document.getElementById("shape").style.top = top + "px";
                
                document.getElementById("shape").style.left = left + "px";
                
                document.getElementById("shape").style.width = size + "px";
                
                document.getElementById("shape").style.height = size + "px";
                
                document.getElementById("shape").style.display = "block";
               
                
                start = new Date().getTime();
            }
            
            function appearAfterDelay(){
                
                setTimeout(makeShapeAppear, Math.random() * 2000);
            }
            
          appearAfterDelay();
            
            document.getElementById("shape").onclick = function(){
                
                document.getElementById("shape").style.display = "none";
                
                var end = new Date().getTime()
                
                var timeTaken = (end - start)/1000
                
                document.getElementById("timeTaken").innerHTML = timeTaken + "s";
                
               appearAfterDelay();
            }

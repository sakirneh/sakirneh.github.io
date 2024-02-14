        const label = document.getElementById('label');
        const btn = document.getElementById('btn1');
        const txt1 = document.getElementById('user');

        var mymessage = document.getElementById('mymessage');
        
        var message = "Hey Mar, i know we can't do much together on valentine's day while we are so far apart but i wanted to do something so i made a collection/collage of the photos we have together and i wish we took more photos before you left. I'm hopefull we will take many more together, love you.";
        

        var elements = document.getElementsByClassName("photo");
        var userInput = txt1.value;

function replaceImg() {
            if (txt1.value == "Mar" || txt1.value == "mar") {

                for(i = 0; i < elements.length; i++){
                    elements[i].classList.toggle("fade-in");
                }
                
                label.style.display = 'none';
                txt1.style.display = 'none';
                btn.style.display = 'none';
                mymessage.style.display = 'block';
                mymessage.innerHTML = message;
                
            }
            else if (txt1.value != "Mar" || txt1.value != "mar"){
                mymessage.style.display = 'block';
                mymessage.innerHTML = "Hey! you are either not my valentine or you are a silly goose who typed their name wrong!";
            }
            else{
                mymessage.style.display = 'none';
            }
        }
